const adminForm = document.querySelector("#adminForm");
const adminEventTitle = document.querySelector("#adminEventTitle");
const adminEventDescription = document.querySelector("#adminEventDescription");
const adminEventDate = document.querySelector("#adminEventDate");
const adminStatus = document.querySelector("#adminStatus");
const customEventsList = document.querySelector("#customEventsList");
const authPanel = document.querySelector("#authPanel");
const authForm = document.querySelector("#authForm");
const authStatus = document.querySelector("#authStatus");
const adminEmail = document.querySelector("#adminEmail");
const adminPassword = document.querySelector("#adminPassword");
const adminShell = document.querySelector("#adminShell");
const logoutButton = document.querySelector("#logoutButton");
const storageKeys = {
  customEvents: "world_event_timers_custom_events",
  selectedEvent: "world_event_timers_selected_event",
  theme: "world_event_timers_theme",
};
const firestoreCollection = "customEvents";
const adminUsersCollection = "adminUsers";
const HOME_PAGE = "index.html";

function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 86400000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name) {
  const prefix = `${name}=`;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(prefix));

  return match ? decodeURIComponent(match.slice(prefix.length)) : "";
}

function setStoredValue(key, value) {
  localStorage.setItem(key, value);
}

function getStoredValue(key) {
  return localStorage.getItem(key) || "";
}

function loadCustomEvents() {
  const saved = getStoredValue(storageKeys.customEvents);

  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      localStorage.removeItem(storageKeys.customEvents);
    }
  }

  const legacyCookie = getCookie(storageKeys.customEvents);

  if (!legacyCookie) {
    return [];
  }

  try {
    const parsed = JSON.parse(legacyCookie);
    setStoredValue(storageKeys.customEvents, JSON.stringify(parsed));
    setCookie(storageKeys.customEvents, "", -1);
    return parsed;
  } catch {
    return [];
  }
}

let customEvents = loadCustomEvents();
let unsubscribeCustomEvents = null;
const firebaseAvailable = Boolean(window.firebaseReady && window.firebaseClients);
let passwordResetPromptedThisSession = false;

function applyThemeFromStorage() {
  const savedTheme = getStoredValue(storageKeys.theme);
  const isLight = savedTheme
    ? savedTheme === "light"
    : window.matchMedia("(prefers-color-scheme: light)").matches;

  document.documentElement.classList.toggle("dark", !isLight);
  document.body.classList.toggle("light-theme", isLight);
  document.body.classList.toggle("dark-theme", !isLight);
}

function saveCustomEvents() {
  setStoredValue(storageKeys.customEvents, JSON.stringify(customEvents));
}

function unlockAdmin() {
  authPanel.hidden = true;
  adminShell.hidden = false;
}

function lockAdmin() {
  authPanel.hidden = false;
  adminShell.hidden = true;
}

function normalizeEmail(value) {
  return value.trim().toLowerCase();
}

function getAdminUserDocId(email) {
  return normalizeEmail(email).replaceAll(".", ",");
}

async function ensureAdminUserRecord(user, markMustChangePassword = false) {
  const email = normalizeEmail(user.email || "");
  const docId = getAdminUserDocId(email);
  const userDocRef = window.firebaseClients.db.collection(adminUsersCollection).doc(docId);
  const userDoc = await userDocRef.get();

  if (!userDoc.exists) {
    await userDocRef.set({
      uid: user.uid,
      email,
      mustChangePassword: markMustChangePassword,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      lastLoginAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    return { exists: false, mustChangePassword: markMustChangePassword };
  }

  await userDocRef.update({
    uid: user.uid,
    lastLoginAt: firebase.firestore.FieldValue.serverTimestamp(),
  });

  const data = userDoc.data() || {};
  return { exists: true, mustChangePassword: Boolean(data.mustChangePassword) };
}

async function sendPasswordResetPrompt(email) {
  await window.firebaseClients.auth.sendPasswordResetEmail(normalizeEmail(email));
}

function renderCustomEvents() {
  customEventsList.textContent = "";

  if (customEvents.length === 0) {
    const emptyNode = document.createElement("p");
    emptyNode.className = "text-sm text-muted dark:text-nightmuted";
    emptyNode.textContent = "No custom events yet.";
    customEventsList.appendChild(emptyNode);
    return;
  }

  customEvents.forEach((event) => {
    const row = document.createElement("div");
    row.className = "flex flex-col gap-3 rounded-2xl border border-line bg-paper/70 p-4 dark:border-nightline dark:bg-white/5 sm:flex-row sm:items-center sm:justify-between";

    const copy = document.createElement("div");
    const title = document.createElement("p");
    title.className = "font-medium";
    title.textContent = event.title.en;
    const meta = document.createElement("p");
    meta.className = "text-sm text-muted dark:text-nightmuted";
    meta.textContent = new Date(event.startDate).toLocaleString();
    copy.append(title, meta);

    const actions = document.createElement("div");
    actions.className = "flex items-center gap-2";

    const useButton = document.createElement("button");
    useButton.type = "button";
    useButton.className = "inline-flex min-h-10 items-center rounded-full border border-line px-3 py-2 text-sm font-medium transition hover:border-amberink focus:outline-none focus:border-amberink dark:border-nightline";
    useButton.textContent = "Open";
    useButton.addEventListener("click", () => {
      setStoredValue(storageKeys.selectedEvent, event.id);
      window.location.href = HOME_PAGE;
    });

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "inline-flex min-h-10 items-center rounded-full border border-line px-3 py-2 text-sm font-medium transition hover:border-amberink focus:outline-none focus:border-amberink dark:border-nightline";
    removeButton.textContent = "Delete";
    removeButton.addEventListener("click", async () => {
      if (firebaseAvailable) {
        try {
          await window.firebaseClients.db.collection(firestoreCollection).doc(event.id).delete();
          adminStatus.textContent = "Event deleted.";
        } catch {
          adminStatus.textContent = "Could not delete event from Firestore.";
        }
        return;
      }

      customEvents = customEvents.filter((item) => item.id !== event.id);
      saveCustomEvents();
      adminStatus.textContent = "Event deleted.";
      renderCustomEvents();
    });

    actions.append(useButton, removeButton);
    row.append(copy, actions);
    customEventsList.appendChild(row);
  });
}

function createLocalizedText(text) {
  return {
    en: text,
    zh: text,
    hi: text,
    es: text,
    ar: text,
    fr: text,
    bn: text,
  };
}

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!firebaseAvailable) {
    authStatus.textContent = "Firebase is not configured yet. Update firebase-init.js.";
    return;
  }

  authStatus.textContent = "Signing in...";
  const email = adminEmail.value.trim();
  const password = adminPassword.value;

  try {
    await window.firebaseClients.auth.signInWithEmailAndPassword(email, password);
    authStatus.textContent = "";
    authForm.reset();
  } catch (error) {
    const code = error?.code || "";

    if (code === "auth/user-not-found") {
      authStatus.textContent = "No admin user found. Creating one...";

      try {
        const credential = await window.firebaseClients.auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await ensureAdminUserRecord(credential.user, true);
        await sendPasswordResetPrompt(email);
        passwordResetPromptedThisSession = true;
        authStatus.textContent =
          "Admin user created. Password reset email sent - please change your password.";
        authForm.reset();
        return;
      } catch (createError) {
        if (createError?.code === "auth/email-already-in-use") {
          authStatus.textContent = "Account already exists. Try signing in again.";
          adminPassword.select();
          return;
        }

        if (createError?.code === "auth/weak-password") {
          authStatus.textContent = "Password must be at least 6 characters.";
          adminPassword.select();
          return;
        }

        authStatus.textContent = "Could not create admin account.";
        return;
      }
    }

    authStatus.textContent = "Sign-in failed. Check your email/password.";
    adminPassword.select();
  }
});

adminForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = adminEventTitle.value.trim();
  const description = adminEventDescription.value.trim() || title;
  const dateValue = adminEventDate.value;

  if (!title || !dateValue) {
    adminStatus.textContent = "Enter a title and valid start date.";
    return;
  }

  const isoDate = new Date(dateValue).toISOString();

  if (Number.isNaN(new Date(isoDate).getTime())) {
    adminStatus.textContent = "Enter a title and valid start date.";
    return;
  }

  const customEvent = {
    id: `custom-${Date.now()}`,
    category: createLocalizedText("General"),
    title: createLocalizedText(title),
    description: createLocalizedText(description),
    startDate: isoDate,
  };

  if (firebaseAvailable) {
    try {
      await window.firebaseClients.db.collection(firestoreCollection).doc(customEvent.id).set({
        ...customEvent,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setStoredValue(storageKeys.selectedEvent, customEvent.id);
      adminForm.reset();
      adminStatus.textContent = "Event saved.";
      return;
    } catch {
      adminStatus.textContent = "Could not save event to Firestore.";
      return;
    }
  }

  customEvents.unshift(customEvent);
  saveCustomEvents();
  setStoredValue(storageKeys.selectedEvent, customEvent.id);
  adminForm.reset();
  adminStatus.textContent = "Event saved.";
  renderCustomEvents();
});

renderCustomEvents();
applyThemeFromStorage();

if (firebaseAvailable) {
  window.firebaseClients.auth.onAuthStateChanged(async (user) => {
    if (!user) {
      if (unsubscribeCustomEvents) {
        unsubscribeCustomEvents();
        unsubscribeCustomEvents = null;
      }
      customEvents = [];
      renderCustomEvents();
      lockAdmin();
      return;
    }

    try {
      const adminRecord = await ensureAdminUserRecord(user, false);

      if (adminRecord.mustChangePassword && !passwordResetPromptedThisSession) {
        await sendPasswordResetPrompt(user.email || "");
        passwordResetPromptedThisSession = true;
      }

      if (adminRecord.mustChangePassword) {
        adminStatus.textContent =
          "For security, check your email and change your password using the reset link.";
      }
    } catch {
      adminStatus.textContent = "Could not verify admin user record in Firebase.";
    }

    unlockAdmin();
    unsubscribeCustomEvents = window.firebaseClients.db
      .collection(firestoreCollection)
      .orderBy("createdAt", "desc")
      .onSnapshot(
        (snapshot) => {
          customEvents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          saveCustomEvents();
          renderCustomEvents();
        },
        () => {
          adminStatus.textContent = "Could not sync Firestore events.";
        }
      );
  });
} else {
  unlockAdmin();
}

if (logoutButton) {
  logoutButton.addEventListener("click", async () => {
    if (firebaseAvailable) {
      await window.firebaseClients.auth.signOut();
      return;
    }

    lockAdmin();
  });
}
