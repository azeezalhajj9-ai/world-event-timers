const events = [
  {
    title: "World War I Start",
    description: "Austria-Hungary declared war on Serbia, igniting the conflict that became World War I.",
    startDate: "1914-07-28T00:00:00Z",
  },
  {
    title: "World War II Start",
    description: "Germany invaded Poland, triggering the beginning of World War II in Europe.",
    startDate: "1939-09-01T04:45:00Z",
  },
  {
    title: "Moon Landing",
    description: "Apollo 11 touched down on the Moon, marking the first crewed lunar landing.",
    startDate: "1969-07-20T20:17:40Z",
  },
  {
    title: "Berlin Wall Fall",
    description: "East Germany announced border crossings, leading crowds to dismantle the Berlin Wall.",
    startDate: "1989-11-09T18:53:00Z",
  },
  {
    title: "WHO COVID-19 Declaration",
    description: "The World Health Organization declared COVID-19 a global pandemic.",
    startDate: "2020-03-11T00:00:00Z",
  },
];

const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const themeToggle = document.querySelector("#themeToggle");
const eventsGrid = document.querySelector("#eventsGrid");
const emptyState = document.querySelector("#emptyState");
const eventCount = document.querySelector("#eventCount");
const oldestEvent = document.querySelector("#oldestEvent");
const newestEvent = document.querySelector("#newestEvent");
const eventCardTemplate = document.querySelector("#eventCardTemplate");

const storageKey = "world-event-timers-theme";

let filteredEvents = [];

function parseEventDate(isoString) {
  return new Date(isoString);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(date);
}

function getElapsedBreakdown(start, end) {
  if (end < start) {
    return { years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const cursor = new Date(start);
  let years = 0;

  while (true) {
    const next = new Date(cursor);
    next.setUTCFullYear(next.getUTCFullYear() + 1);

    if (next <= end) {
      years += 1;
      cursor.setUTCFullYear(cursor.getUTCFullYear() + 1);
    } else {
      break;
    }
  }

  let remainderSeconds = Math.floor((end - cursor) / 1000);
  const days = Math.floor(remainderSeconds / 86400);
  remainderSeconds -= days * 86400;
  const hours = Math.floor(remainderSeconds / 3600);
  remainderSeconds -= hours * 3600;
  const minutes = Math.floor(remainderSeconds / 60);
  const seconds = remainderSeconds - minutes * 60;

  return { years, days, hours, minutes, seconds };
}

function formatElapsed(parts) {
  return `${parts.years}y ${parts.days}d ${parts.hours}h ${parts.minutes}m ${parts.seconds}s`;
}

function getElapsedMs(startDate) {
  return Date.now() - parseEventDate(startDate).getTime();
}

function compareEvents(a, b, sortValue) {
  switch (sortValue) {
    case "elapsed-asc":
      return getElapsedMs(a.startDate) - getElapsedMs(b.startDate);
    case "date-asc":
      return parseEventDate(a.startDate) - parseEventDate(b.startDate);
    case "date-desc":
      return parseEventDate(b.startDate) - parseEventDate(a.startDate);
    case "title-asc":
      return a.title.localeCompare(b.title);
    case "title-desc":
      return b.title.localeCompare(a.title);
    case "elapsed-desc":
    default:
      return getElapsedMs(b.startDate) - getElapsedMs(a.startDate);
  }
}

function getVisibleEvents() {
  const query = searchInput.value.trim().toLowerCase();
  const sortValue = sortSelect.value;

  return [...events]
    .filter((event) => {
      if (!query) {
        return true;
      }

      const haystack = [
        event.title,
        event.description,
        formatDate(parseEventDate(event.startDate)),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(query);
    })
    .sort((a, b) => compareEvents(a, b, sortValue));
}

function renderSummary(visibleEvents) {
  eventCount.textContent = String(visibleEvents.length);

  if (visibleEvents.length === 0) {
    oldestEvent.textContent = "-";
    newestEvent.textContent = "-";
    return;
  }

  const byDate = [...visibleEvents].sort(
    (a, b) => parseEventDate(a.startDate) - parseEventDate(b.startDate)
  );

  oldestEvent.textContent = byDate[0].title;
  newestEvent.textContent = byDate[byDate.length - 1].title;
}

function renderEvents() {
  filteredEvents = getVisibleEvents();
  eventsGrid.textContent = "";

  filteredEvents.forEach((event) => {
    const card = eventCardTemplate.content.firstElementChild.cloneNode(true);
    const date = parseEventDate(event.startDate);

    card.dataset.startDate = event.startDate;
    card.querySelector(".event-card__date").textContent = date.getUTCFullYear();
    card.querySelector(".event-card__title").textContent = event.title;
    card.querySelector(".event-card__description").textContent = event.description;
    card.querySelector(".event-card__start").textContent = `${formatDate(date)} UTC`;
    card.querySelector(".event-card__timer").textContent = formatElapsed(
      getElapsedBreakdown(date, new Date())
    );

    eventsGrid.appendChild(card);
  });

  emptyState.hidden = filteredEvents.length !== 0;
  renderSummary(filteredEvents);
}

function updateTimers() {
  const timerNodes = document.querySelectorAll(".event-card");
  const now = new Date();

  timerNodes.forEach((card) => {
    const startDate = parseEventDate(card.dataset.startDate);
    const timer = card.querySelector(".event-card__timer");
    timer.textContent = formatElapsed(getElapsedBreakdown(startDate, now));
  });
}

function applyTheme(theme) {
  const isLight = theme === "light";
  document.body.classList.toggle("light-theme", isLight);
  themeToggle.setAttribute("aria-pressed", String(isLight));
  themeToggle.textContent = isLight ? "Switch to dark mode" : "Switch to light mode";
}

function initializeTheme() {
  const savedTheme = localStorage.getItem(storageKey);
  const preferredTheme =
    savedTheme ||
    (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

  applyTheme(preferredTheme);
}

searchInput.addEventListener("input", renderEvents);
sortSelect.addEventListener("change", renderEvents);

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
  localStorage.setItem(storageKey, nextTheme);
  applyTheme(nextTheme);
});

initializeTheme();
renderEvents();
updateTimers();
window.setInterval(updateTimers, 1000);
