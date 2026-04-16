const firebaseConfig = {
  apiKey: "REPLACE_WITH_FIREBASE_API_KEY",
  authDomain: "REPLACE_WITH_FIREBASE_AUTH_DOMAIN",
  projectId: "REPLACE_WITH_FIREBASE_PROJECT_ID",
  storageBucket: "REPLACE_WITH_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "REPLACE_WITH_FIREBASE_MESSAGING_SENDER_ID",
  appId: "REPLACE_WITH_FIREBASE_APP_ID",
};

const hasFirebaseConfig = Object.values(firebaseConfig).every(
  (value) => !String(value).startsWith("REPLACE_WITH_")
);

if (typeof window !== "undefined") {
  window.firebaseReady = false;
  window.firebaseClients = null;
  window.firebaseConfigReady = hasFirebaseConfig;
}

if (hasFirebaseConfig && typeof firebase !== "undefined") {
  const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();

  window.firebaseReady = true;
  window.firebaseClients = { app, auth, db };
}
