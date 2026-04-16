# World Event Timers

World Event Timers is a static GitHub Pages site that displays notable historical events with live counters showing how much time has elapsed since each event began.

## Features

- Live timers updating every second
- Search by title, description, or formatted date
- Sorting by elapsed time, start date, or title
- Responsive layout for desktop, tablet, and mobile
- Dark mode toggle with local preference persistence
- Event data stored in a JavaScript array for simple editing

## Files

- `index.html` - page structure and UI controls
- `style.css` - responsive styling and theme system
- `script.js` - event data, rendering, search, sorting, timers, and theme logic
- `.github/workflows/deploy.yml` - automatic GitHub Pages deployment on push to `main`

## Local preview

Open `index.html` directly in a browser, or run a simple static server:

```bash
python -m http.server 8000
```

Then visit `http://127.0.0.1:8000/`.

## GitHub Pages deployment

Push the repository to GitHub and enable Pages deployment through GitHub Actions. The included workflow deploys the repository root on every push to `main`.

Expected production URL format:

```text
https://YOUR_USERNAME.github.io/world-event-timers/
```
