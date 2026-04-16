const adminForm = document.querySelector("#adminForm");
const adminEventTitle = document.querySelector("#adminEventTitle");
const adminEventDescription = document.querySelector("#adminEventDescription");
const adminEventDate = document.querySelector("#adminEventDate");
const adminStatus = document.querySelector("#adminStatus");
const customEventsList = document.querySelector("#customEventsList");

const cookieKeys = {
  customEvents: "world_event_timers_custom_events",
  selectedEvent: "world_event_timers_selected_event",
  theme: "world_event_timers_theme",
};

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

function loadCustomEvents() {
  const saved = getCookie(cookieKeys.customEvents);

  if (!saved) {
    return [];
  }

  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
}

let customEvents = loadCustomEvents();

function applyThemeFromCookie() {
  const savedTheme = getCookie(cookieKeys.theme);
  const isLight = savedTheme
    ? savedTheme === "light"
    : window.matchMedia("(prefers-color-scheme: light)").matches;

  document.documentElement.classList.toggle("dark", !isLight);
  document.body.classList.toggle("light-theme", isLight);
  document.body.classList.toggle("dark-theme", !isLight);
}

function saveCustomEvents() {
  setCookie(cookieKeys.customEvents, JSON.stringify(customEvents));
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
      setCookie(cookieKeys.selectedEvent, event.id);
      window.location.href = "../index.html";
    });

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "inline-flex min-h-10 items-center rounded-full border border-line px-3 py-2 text-sm font-medium transition hover:border-amberink focus:outline-none focus:border-amberink dark:border-nightline";
    removeButton.textContent = "Delete";
    removeButton.addEventListener("click", () => {
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

adminForm.addEventListener("submit", (event) => {
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
    title: createLocalizedText(title),
    description: createLocalizedText(description),
    startDate: isoDate,
  };

  customEvents.unshift(customEvent);
  saveCustomEvents();
  setCookie(cookieKeys.selectedEvent, customEvent.id);
  adminForm.reset();
  adminStatus.textContent = "Event saved.";
  renderCustomEvents();
});

renderCustomEvents();
applyThemeFromCookie();
