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
- Admin pages for managing event content
- Bundled flip timer library for the featured event counter
- Event data stored in a JavaScript array for simple editing

## Files

- `index.html` - page structure and UI controls
- `style.css` - responsive styling and theme system
- `script.js` - event data, rendering, search, sorting, categories, timers, language switching, and theme logic
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

## GitHub Pages deployment

Push the repository to GitHub and publish the repository as a static site. Because the project is plain HTML, CSS, and JavaScript, no build step is required.

Expected production URL format:

```text
https://YOUR_USERNAME.github.io/world-event-timers/
```
