# World Event Timers

World Event Timers is a static GitHub Pages site that turns major world events into live elapsed-time displays. Instead of presenting history as a static list of dates, the site frames each event as an active timeline with continuously updating counters.

The current visual direction is editorial newspaper: classical serif headlines, body copy with a print-like reading feel, and mechanical mono-styled timers that emphasize precision.

## Features

- Live timers updating every second
- Search by title, description, or formatted date
- Search by event category
- Sorting by elapsed time, start date, or title
- Dedicated detail view with a large flip-style elapsed timer
- Event categories such as Historical, Science, Political, and Health
- Multilingual interface with language switching
- Responsive layout for desktop, tablet, and mobile
- Dark mode toggle with persisted preferences
- Admin pages for managing event content with Firebase Authentication
- Firebase Firestore sync for shared custom events across devices
- Bundled flip timer library for the featured event counter
- Event data stored in a JavaScript array for simple editing

## Files

- `index.html` - page structure and UI controls
- `style.css` - responsive styling and theme system
- `script.js` - event data, rendering, search, sorting, categories, timers, language switching, and theme logic
- `firebase-init.js` - Firebase app bootstrap (Auth + Firestore clients)
- `firestore.rules` - Firestore security rules (public read, authenticated write)
- `admin/index.html` - admin interface entry page
- `admin/admin.js` - admin event management logic
- `vendor/flip/flip.min.css` - bundled flip clock styles
- `vendor/flip/flip.min.js` - bundled flip clock script

## Local preview

Open `index.html` directly in a browser, or run a simple static server:

```bash
python -m http.server 8000
```

Then visit `http://127.0.0.1:8000/`.

## Firebase setup

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable **Authentication** and add the **Email/Password** sign-in provider.
3. Create at least one admin user in Authentication.
4. Enable **Cloud Firestore** (start in production or test mode as needed).
5. Open `firebase-init.js` and replace all `REPLACE_WITH_FIREBASE_*` values with your web app config.
6. Open `admin.html` (or `admin/index.html`) and sign in with your Firebase admin user.
7. Add events in admin and confirm they appear live on `index.html`.

## Firestore Security Rules

This repository includes `firestore.rules` with the policy:

- Anyone can read custom events (public website access)
- Only authenticated users can create, update, or delete custom events

Rules file content:

```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /customEvents/{eventId} {
      allow read: if true;
      allow create, update, delete: if request.auth != null;
    }
  }
}
```

Deploy rules from your project root:

```bash
firebase login
firebase init firestore
firebase deploy --only firestore:rules
```

## GitHub Pages deployment

Push the repository to GitHub and publish the repository as a static site. Because the project is plain HTML, CSS, and JavaScript, no build step is required.

For Firebase Authentication to work on GitHub Pages:

1. In Firebase Console, open **Authentication > Settings > Authorized domains**.
2. Add your production domain:
   - `YOUR_USERNAME.github.io`
3. Keep `authDomain` in `firebase-init.js` set to your Firebase project auth domain (for example `your-project-id.firebaseapp.com`).
4. Ensure Firestore is enabled and rules are deployed before publishing.

If you use the included GitHub Pages workflow, add these **GitHub Actions secrets** in your repository:

- `FIREBASE_API_KEY`
- `FIREBASE_AUTH_DOMAIN`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_STORAGE_BUCKET`
- `FIREBASE_MESSAGING_SENDER_ID`
- `FIREBASE_APP_ID`

Path: **GitHub repository -> Settings -> Secrets and variables -> Actions -> New repository secret**

Expected production URL format:

```text
https://YOUR_USERNAME.github.io/world-event-timers/
```
