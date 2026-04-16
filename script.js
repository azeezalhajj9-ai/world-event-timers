const languages = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "zh", label: "中文", dir: "ltr" },
  { code: "hi", label: "हिन्दी", dir: "ltr" },
  { code: "es", label: "Español", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "fr", label: "Français", dir: "ltr" },
  { code: "bn", label: "বাংলা", dir: "ltr" },
];

const translations = {
  en: {
    eyebrow: "Historical timelines in motion",
    headline: "World Event Timers",
    heroText: "Live counters for defining global events, measured from the moment they began to now.",
    searchLabel: "Search events",
    searchPlaceholder: "Search by title, description, or date",
    sortLabel: "Sort by",
    languageLabel: "Language",
    focusLabel: "Focused event",
    elapsedLabel: "Elapsed time",
    startDateLabel: "Start date",
    visibleEventsLabel: "Visible events",
    oldestEventLabel: "Oldest event",
    latestEventLabel: "Latest event",
    backButton: "Back to all events",
    emptyState: "No events match the current search.",
    themeLight: "Switch to light mode",
    themeDark: "Switch to dark mode",
    units: { years: "y", days: "d", hours: "h", minutes: "m", seconds: "s" },
    unitLabels: { years: "Years", days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds" },
    sortOptions: {
      "elapsed-desc": "Longest running",
      "elapsed-asc": "Most recent",
      "date-asc": "Oldest start date",
      "date-desc": "Newest start date",
      "title-asc": "Title A-Z",
      "title-desc": "Title Z-A",
    },
  },
  zh: {
    eyebrow: "历史时间线正在流动",
    headline: "世界事件计时器",
    heroText: "实时显示重大世界事件从开始时刻到现在已经过去了多久。",
    searchLabel: "搜索事件",
    searchPlaceholder: "按标题、描述或日期搜索",
    sortLabel: "排序方式",
    languageLabel: "语言",
    focusLabel: "当前聚焦事件",
    elapsedLabel: "已过时间",
    startDateLabel: "开始日期",
    visibleEventsLabel: "可见事件数",
    oldestEventLabel: "最早事件",
    latestEventLabel: "最新事件",
    backButton: "返回全部事件",
    emptyState: "没有匹配当前搜索的事件。",
    themeLight: "切换到浅色模式",
    themeDark: "切换到深色模式",
    units: { years: "年", days: "天", hours: "时", minutes: "分", seconds: "秒" },
    unitLabels: { years: "年", days: "天", hours: "时", minutes: "分", seconds: "秒" },
    sortOptions: {
      "elapsed-desc": "运行时间最长",
      "elapsed-asc": "最近发生",
      "date-asc": "最早开始日期",
      "date-desc": "最新开始日期",
      "title-asc": "标题 A-Z",
      "title-desc": "标题 Z-A",
    },
  },
  hi: {
    eyebrow: "इतिहास की समय-रेखाएं चलती हुई",
    headline: "विश्व घटना टाइमर",
    heroText: "महत्वपूर्ण विश्व घटनाओं के शुरू होने से अब तक का समय लाइव देखें।",
    searchLabel: "घटनाएं खोजें",
    searchPlaceholder: "शीर्षक, विवरण या तारीख से खोजें",
    sortLabel: "क्रमबद्ध करें",
    languageLabel: "भाषा",
    focusLabel: "चयनित घटना",
    elapsedLabel: "बीता हुआ समय",
    startDateLabel: "शुरुआती तारीख",
    visibleEventsLabel: "दिख रही घटनाएं",
    oldestEventLabel: "सबसे पुरानी घटना",
    latestEventLabel: "सबसे नई घटना",
    backButton: "सभी घटनाओं पर वापस जाएं",
    emptyState: "मौजूदा खोज से कोई घटना नहीं मिली।",
    themeLight: "लाइट मोड पर जाएं",
    themeDark: "डार्क मोड पर जाएं",
    units: { years: "व", days: "दि", hours: "घं", minutes: "मि", seconds: "से" },
    unitLabels: { years: "वर्ष", days: "दिन", hours: "घंटे", minutes: "मिनट", seconds: "सेकंड" },
    sortOptions: {
      "elapsed-desc": "सबसे लंबा चल रहा",
      "elapsed-asc": "सबसे हाल का",
      "date-asc": "सबसे पुरानी तारीख",
      "date-desc": "सबसे नई तारीख",
      "title-asc": "शीर्षक A-Z",
      "title-desc": "शीर्षक Z-A",
    },
  },
  es: {
    eyebrow: "Cronologías históricas en marcha",
    headline: "Temporizadores de Eventos Mundiales",
    heroText: "Contadores en vivo de grandes eventos mundiales, desde su inicio hasta ahora.",
    searchLabel: "Buscar eventos",
    searchPlaceholder: "Buscar por título, descripción o fecha",
    sortLabel: "Ordenar por",
    languageLabel: "Idioma",
    focusLabel: "Evento enfocado",
    elapsedLabel: "Tiempo transcurrido",
    startDateLabel: "Fecha de inicio",
    visibleEventsLabel: "Eventos visibles",
    oldestEventLabel: "Evento más antiguo",
    latestEventLabel: "Evento más reciente",
    backButton: "Volver a todos los eventos",
    emptyState: "Ningún evento coincide con la búsqueda actual.",
    themeLight: "Cambiar a modo claro",
    themeDark: "Cambiar a modo oscuro",
    units: { years: "a", days: "d", hours: "h", minutes: "m", seconds: "s" },
    unitLabels: { years: "Años", days: "Días", hours: "Horas", minutes: "Min", seconds: "Seg" },
    sortOptions: {
      "elapsed-desc": "Más tiempo transcurrido",
      "elapsed-asc": "Más reciente",
      "date-asc": "Fecha más antigua",
      "date-desc": "Fecha más nueva",
      "title-asc": "Título A-Z",
      "title-desc": "Título Z-A",
    },
  },
  ar: {
    eyebrow: "خطوط زمنية تاريخية تتحرك",
    headline: "مؤقتات أحداث العالم",
    heroText: "عدادات حية لأهم الأحداث العالمية من لحظة بدايتها وحتى الآن.",
    searchLabel: "ابحث عن الأحداث",
    searchPlaceholder: "ابحث بالعنوان أو الوصف أو التاريخ",
    sortLabel: "ترتيب حسب",
    languageLabel: "اللغة",
    focusLabel: "الحدث المحدد",
    elapsedLabel: "الوقت المنقضي",
    startDateLabel: "تاريخ البداية",
    visibleEventsLabel: "الأحداث الظاهرة",
    oldestEventLabel: "أقدم حدث",
    latestEventLabel: "أحدث حدث",
    backButton: "العودة إلى جميع الأحداث",
    emptyState: "لا توجد أحداث تطابق البحث الحالي.",
    themeLight: "التبديل إلى الوضع الفاتح",
    themeDark: "التبديل إلى الوضع الداكن",
    units: { years: "س", days: "ي", hours: "س", minutes: "د", seconds: "ث" },
    unitLabels: { years: "سنوات", days: "أيام", hours: "ساعات", minutes: "دقائق", seconds: "ثوان" },
    sortOptions: {
      "elapsed-desc": "الأطول زمنًا",
      "elapsed-asc": "الأحدث",
      "date-asc": "أقدم تاريخ",
      "date-desc": "أحدث تاريخ",
      "title-asc": "العنوان أ-ي",
      "title-desc": "العنوان ي-أ",
    },
  },
  fr: {
    eyebrow: "Les chronologies historiques en mouvement",
    headline: "Minuteurs d'Événements Mondiaux",
    heroText: "Des compteurs en direct pour les grands événements mondiaux, du début jusqu'à maintenant.",
    searchLabel: "Rechercher des événements",
    searchPlaceholder: "Rechercher par titre, description ou date",
    sortLabel: "Trier par",
    languageLabel: "Langue",
    focusLabel: "Événement ciblé",
    elapsedLabel: "Temps écoulé",
    startDateLabel: "Date de début",
    visibleEventsLabel: "Événements visibles",
    oldestEventLabel: "Événement le plus ancien",
    latestEventLabel: "Événement le plus récent",
    backButton: "Retour à tous les événements",
    emptyState: "Aucun événement ne correspond à la recherche actuelle.",
    themeLight: "Passer au mode clair",
    themeDark: "Passer au mode sombre",
    units: { years: "a", days: "j", hours: "h", minutes: "m", seconds: "s" },
    unitLabels: { years: "Ans", days: "Jours", hours: "Heures", minutes: "Min", seconds: "Sec" },
    sortOptions: {
      "elapsed-desc": "Le plus long",
      "elapsed-asc": "Le plus récent",
      "date-asc": "Date la plus ancienne",
      "date-desc": "Date la plus récente",
      "title-asc": "Titre A-Z",
      "title-desc": "Titre Z-A",
    },
  },
  bn: {
    eyebrow: "ইতিহাসের সময়রেখা চলছে",
    headline: "বিশ্ব ঘটনা টাইমার",
    heroText: "গুরুত্বপূর্ণ বিশ্ব ঘটনাগুলোর শুরু থেকে এখন পর্যন্ত কেটে যাওয়া সময় লাইভ দেখুন।",
    searchLabel: "ঘটনা খুঁজুন",
    searchPlaceholder: "শিরোনাম, বর্ণনা বা তারিখ দিয়ে খুঁজুন",
    sortLabel: "সাজান",
    languageLabel: "ভাষা",
    focusLabel: "নির্বাচিত ঘটনা",
    elapsedLabel: "অতিবাহিত সময়",
    startDateLabel: "শুরুর তারিখ",
    visibleEventsLabel: "দৃশ্যমান ঘটনা",
    oldestEventLabel: "সবচেয়ে পুরোনো ঘটনা",
    latestEventLabel: "সবচেয়ে নতুন ঘটনা",
    backButton: "সব ঘটনার তালিকায় ফিরুন",
    emptyState: "বর্তমান অনুসন্ধানে কোনো ঘটনা পাওয়া যায়নি।",
    themeLight: "লাইট মোডে যান",
    themeDark: "ডার্ক মোডে যান",
    units: { years: "ব", days: "দি", hours: "ঘ", minutes: "মি", seconds: "সে" },
    unitLabels: { years: "বছর", days: "দিন", hours: "ঘণ্টা", minutes: "মিনিট", seconds: "সেকেন্ড" },
    sortOptions: {
      "elapsed-desc": "সবচেয়ে দীর্ঘ সময়",
      "elapsed-asc": "সবচেয়ে সাম্প্রতিক",
      "date-asc": "সবচেয়ে পুরোনো তারিখ",
      "date-desc": "সবচেয়ে নতুন তারিখ",
      "title-asc": "শিরোনাম A-Z",
      "title-desc": "শিরোনাম Z-A",
    },
  },
};

const events = [
  {
    id: "ww1",
    category: createLocalizedText("Historical"),
    title: {
      en: "World War I Start",
      zh: "第一次世界大战开始",
      hi: "प्रथम विश्व युद्ध की शुरुआत",
      es: "Inicio de la Primera Guerra Mundial",
      ar: "بداية الحرب العالمية الأولى",
      fr: "Début de la Première Guerre mondiale",
      bn: "প্রথম বিশ্বযুদ্ধের সূচনা",
    },
    description: {
      en: "Austria-Hungary declared war on Serbia, igniting the conflict that became World War I.",
      zh: "奥匈帝国向塞尔维亚宣战，引发了后来演变为第一次世界大战的冲突。",
      hi: "ऑस्ट्रिया-हंगरी ने सर्बिया पर युद्ध घोषित किया, जिससे प्रथम विश्व युद्ध शुरू हुआ।",
      es: "Austria-Hungría declaró la guerra a Serbia, iniciando el conflicto que se convirtió en la Primera Guerra Mundial.",
      ar: "أعلنت النمسا والمجر الحرب على صربيا، مما أشعل الصراع الذي أصبح الحرب العالمية الأولى.",
      fr: "L'Autriche-Hongrie a déclaré la guerre à la Serbie, déclenchant le conflit devenu la Première Guerre mondiale.",
      bn: "অস্ট্রিয়া-হাঙ্গেরি সার্বিয়ার বিরুদ্ধে যুদ্ধ ঘোষণা করে, যা পরে প্রথম বিশ্বযুদ্ধে রূপ নেয়।",
    },
    startDate: "1914-07-28T00:00:00Z",
  },
  {
    id: "ww2",
    category: createLocalizedText("Historical"),
    title: {
      en: "World War II Start",
      zh: "第二次世界大战开始",
      hi: "द्वितीय विश्व युद्ध की शुरुआत",
      es: "Inicio de la Segunda Guerra Mundial",
      ar: "بداية الحرب العالمية الثانية",
      fr: "Début de la Seconde Guerre mondiale",
      bn: "দ্বিতীয় বিশ্বযুদ্ধের সূচনা",
    },
    description: {
      en: "Germany invaded Poland, triggering the beginning of World War II in Europe.",
      zh: "德国入侵波兰，触发了欧洲第二次世界大战的开始。",
      hi: "जर्मनी ने पोलैंड पर आक्रमण किया, जिससे यूरोप में द्वितीय विश्व युद्ध शुरू हुआ।",
      es: "Alemania invadió Polonia, desencadenando el inicio de la Segunda Guerra Mundial en Europa.",
      ar: "غزت ألمانيا بولندا، مما أدى إلى بداية الحرب العالمية الثانية في أوروبا.",
      fr: "L'Allemagne a envahi la Pologne, déclenchant le début de la Seconde Guerre mondiale en Europe.",
      bn: "জার্মানি পোল্যান্ড আক্রমণ করে, যার মাধ্যমে ইউরোপে দ্বিতীয় বিশ্বযুদ্ধ শুরু হয়।",
    },
    startDate: "1939-09-01T04:45:00Z",
  },
  {
    id: "moon-landing",
    category: createLocalizedText("Science"),
    title: {
      en: "Moon Landing",
      zh: "登月",
      hi: "चंद्रमा पर उतरना",
      es: "Alunizaje",
      ar: "الهبوط على القمر",
      fr: "Alunissage",
      bn: "চাঁদে অবতরণ",
    },
    description: {
      en: "Apollo 11 touched down on the Moon, marking the first crewed lunar landing.",
      zh: "阿波罗11号登陆月球，标志着人类首次载人登月。",
      hi: "अपोलो 11 चंद्रमा पर उतरा, यह मानव द्वारा पहली चंद्र लैंडिंग थी।",
      es: "El Apolo 11 aterrizó en la Luna y marcó el primer alunizaje tripulado.",
      ar: "هبطت أبولو 11 على القمر، مسجلة أول هبوط بشري على سطحه.",
      fr: "Apollo 11 s'est posé sur la Lune, marquant le premier alunissage habité.",
      bn: "অ্যাপোলো ১১ চাঁদে অবতরণ করে, যা ছিল মানুষের প্রথম চন্দ্রপৃষ্ঠে অবতরণ।",
    },
    startDate: "1969-07-20T20:17:40Z",
  },
  {
    id: "berlin-wall",
    category: createLocalizedText("Political"),
    title: {
      en: "Berlin Wall Fall",
      zh: "柏林墙倒塌",
      hi: "बर्लिन दीवार का पतन",
      es: "Caída del Muro de Berlín",
      ar: "سقوط جدار برلين",
      fr: "Chute du mur de Berlin",
      bn: "বার্লিন প্রাচীর পতন",
    },
    description: {
      en: "East Germany announced border crossings, leading crowds to dismantle the Berlin Wall.",
      zh: "东德宣布开放边境通行，引发民众拆除柏林墙。",
      hi: "पूर्वी जर्मनी ने सीमा पार करने की घोषणा की, जिसके बाद लोगों ने बर्लिन दीवार तोड़नी शुरू की।",
      es: "Alemania Oriental anunció los cruces fronterizos y las multitudes comenzaron a derribar el Muro de Berlín.",
      ar: "أعلنت ألمانيا الشرقية فتح المعابر الحدودية، فتدفقت الحشود لإزالة جدار برلين.",
      fr: "L'Allemagne de l'Est a annoncé l'ouverture des frontières, poussant les foules à démanteler le mur de Berlin.",
      bn: "পূর্ব জার্মানি সীমান্ত পারাপারের ঘোষণা দিলে জনতা বার্লিন প্রাচীর ভাঙতে শুরু করে।",
    },
    startDate: "1989-11-09T18:53:00Z",
  },
  {
    id: "covid-pandemic",
    category: createLocalizedText("Health"),
    title: {
      en: "WHO COVID-19 Declaration",
      zh: "世卫组织新冠疫情声明",
      hi: "डब्ल्यूएचओ कोविड-19 घोषणा",
      es: "Declaración de la OMS sobre la COVID-19",
      ar: "إعلان منظمة الصحة العالمية بشأن كوفيد-19",
      fr: "Déclaration de l'OMS sur la COVID-19",
      bn: "ডব্লিউএইচও কোভিড-১৯ ঘোষণা",
    },
    description: {
      en: "The World Health Organization declared COVID-19 a global pandemic.",
      zh: "世界卫生组织宣布新冠疫情构成全球大流行。",
      hi: "विश्व स्वास्थ्य संगठन ने COVID-19 को वैश्विक महामारी घोषित किया।",
      es: "La Organización Mundial de la Salud declaró la COVID-19 como pandemia mundial.",
      ar: "أعلنت منظمة الصحة العالمية أن كوفيد-19 جائحة عالمية.",
      fr: "L'Organisation mondiale de la santé a déclaré la COVID-19 comme une pandémie mondiale.",
      bn: "বিশ্ব স্বাস্থ্য সংস্থা COVID-19-কে বৈশ্বিক মহামারি ঘোষণা করে।",
    },
    startDate: "2020-03-11T00:00:00Z",
  },
];

const sortValues = [
  "elapsed-desc",
  "elapsed-asc",
  "date-asc",
  "date-desc",
  "title-asc",
  "title-desc",
];

const searchInput = document.querySelector("#searchInput");
const sortSelect = document.querySelector("#sortSelect");
const languageSelect = document.querySelector("#languageSelect");
const themeToggle = document.querySelector("#themeToggle");
const eventsGrid = document.querySelector("#eventsGrid");
const emptyState = document.querySelector("#emptyState");
const eventCount = document.querySelector("#eventCount");
const oldestEvent = document.querySelector("#oldestEvent");
const newestEvent = document.querySelector("#newestEvent");
const eventCardTemplate = document.querySelector("#eventCardTemplate");
const mainNavbar = document.querySelector("#mainNavbar");
const listPanel = document.querySelector("#listPanel");
const detailPanel = document.querySelector("#detailPanel");
const backButton = document.querySelector("#backButton");
const focusCategory = document.querySelector("#focusCategory");
const focusTitle = document.querySelector("#focusTitle");
const focusTimer = document.querySelector("#focusTimer");
const flipYearsLabel = document.querySelector("#flipYearsLabel");
const flipDaysLabel = document.querySelector("#flipDaysLabel");
const flipHoursLabel = document.querySelector("#flipHoursLabel");
const flipMinutesLabel = document.querySelector("#flipMinutesLabel");
const flipSecondsLabel = document.querySelector("#flipSecondsLabel");

const storageKeys = {
  theme: "world_event_timers_theme",
  language: "world_event_timers_language",
  selectedEvent: "world_event_timers_selected_event",
  sort: "world_event_timers_sort",
  search: "world_event_timers_search",
  detailView: "world_event_timers_detail_view",
  customEvents: "world_event_timers_custom_events",
};

let currentLanguage = "en";
let filteredEvents = [];
let selectedEventId = events[0].id;
let isDetailView = false;
let spotlightTimeoutId = null;
let customEvents = [];
const flipInstances = {};

function getAllEvents() {
  return [...events, ...customEvents];
}

function setStoredValue(name, value) {
  localStorage.setItem(name, value);
}

function getStoredValue(name) {
  return localStorage.getItem(name) || "";
}

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

function getPreference(name) {
  return getStoredValue(name) || getCookie(name);
}

function setPreference(name, value) {
  setStoredValue(name, value);
  setCookie(name, value);
}

function loadPersistedCustomEvents() {
  const savedCustomEvents = getStoredValue(storageKeys.customEvents) || getCookie(storageKeys.customEvents);

  if (!savedCustomEvents) {
    return [];
  }

  try {
    const parsed = JSON.parse(savedCustomEvents);
    setStoredValue(storageKeys.customEvents, JSON.stringify(parsed));
    return parsed;
  } catch {
    return [];
  }
}

function parseEventDate(isoString) {
  return new Date(isoString);
}

function getLocale() {
  return currentLanguage === "zh" ? "zh-CN" : currentLanguage;
}

function translate(key) {
  return translations[currentLanguage][key];
}

function getEventText(value) {
  return value[currentLanguage] || value.en;
}

function createLocalizedText(text) {
  return languages.reduce((accumulator, language) => {
    accumulator[language.code] = text;
    return accumulator;
  }, {});
}

function formatDate(date) {
  return new Intl.DateTimeFormat(getLocale(), {
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
  const units = translate("units");
  return [
    `${parts.years}${units.years}`,
    `${parts.days}${units.days}`,
    `${parts.hours}${units.hours}`,
    `${parts.minutes}${units.minutes}`,
    `${parts.seconds}${units.seconds}`,
  ].join(" ");
}

function padFlipValue(value, minDigits = 2) {
  return String(value).padStart(minDigits, "0");
}

function initFlipDisplays() {
  if (typeof Tick === "undefined" || !Tick.DOM || flipInstances.years) {
    return;
  }

  flipInstances.years = Tick.DOM.create(document.querySelector("#flipYears"), { value: "00" });
  flipInstances.days = Tick.DOM.create(document.querySelector("#flipDays"), { value: "00" });
  flipInstances.hours = Tick.DOM.create(document.querySelector("#flipHours"), { value: "00" });
  flipInstances.minutes = Tick.DOM.create(document.querySelector("#flipMinutes"), { value: "00" });
  flipInstances.seconds = Tick.DOM.create(document.querySelector("#flipSeconds"), { value: "00" });
}

function updateFlipDisplays(parts) {
  if (!flipInstances.years) {
    return;
  }

  flipInstances.years.value = padFlipValue(parts.years, 2);
  flipInstances.days.value = padFlipValue(parts.days, 2);
  flipInstances.hours.value = padFlipValue(parts.hours, 2);
  flipInstances.minutes.value = padFlipValue(parts.minutes, 2);
  flipInstances.seconds.value = padFlipValue(parts.seconds, 2);
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
      return getEventText(a.title).localeCompare(getEventText(b.title), getLocale());
    case "title-desc":
      return getEventText(b.title).localeCompare(getEventText(a.title), getLocale());
    case "elapsed-desc":
    default:
      return getElapsedMs(b.startDate) - getElapsedMs(a.startDate);
  }
}

function populateLanguageSelect() {
  languageSelect.textContent = "";

  languages.forEach((language) => {
    const option = document.createElement("option");
    option.value = language.code;
    option.textContent = language.label;
    option.selected = language.code === currentLanguage;
    languageSelect.appendChild(option);
  });
}

function populateSortOptions() {
  const selectedSort = sortSelect.value || "elapsed-desc";
  sortSelect.textContent = "";

  sortValues.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = translate("sortOptions")[value];
    option.selected = value === selectedSort;
    sortSelect.appendChild(option);
  });
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = languages.find((language) => language.code === currentLanguage)?.dir || "ltr";

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translate(key);
  });

  searchInput.placeholder = translate("searchPlaceholder");
  backButton.textContent = translate("backButton");
  const unitLabels = translate("unitLabels");
  flipYearsLabel.textContent = unitLabels.years;
  flipDaysLabel.textContent = unitLabels.days;
  flipHoursLabel.textContent = unitLabels.hours;
  flipMinutesLabel.textContent = unitLabels.minutes;
  flipSecondsLabel.textContent = unitLabels.seconds;
  populateSortOptions();
}

function getVisibleEvents() {
  const query = searchInput.value.trim().toLowerCase();
  const sortValue = sortSelect.value;

  return [...getAllEvents()]
    .filter((event) => {
      if (!query) {
        return true;
      }

      const haystack = [
        getEventText(event.title),
        getEventText(event.description),
        getEventText(event.category || createLocalizedText("General")),
        formatDate(parseEventDate(event.startDate)),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(query);
    })
    .sort((a, b) => compareEvents(a, b, sortValue));
}

function ensureValidSelectedEvent() {
  if (!filteredEvents.some((event) => event.id === selectedEventId)) {
    selectedEventId = filteredEvents[0]?.id || getAllEvents()[0].id;
  }
}

function renderSummary(visibleEvents) {
  if (eventCount) {
    eventCount.textContent = String(visibleEvents.length);
  }

  if (visibleEvents.length === 0) {
    if (oldestEvent) {
      oldestEvent.textContent = "-";
    }
    if (newestEvent) {
      newestEvent.textContent = "-";
    }
    return;
  }

  const byDate = [...visibleEvents].sort(
    (a, b) => parseEventDate(a.startDate) - parseEventDate(b.startDate)
  );

  if (oldestEvent) {
    oldestEvent.textContent = getEventText(byDate[0].title);
  }
  if (newestEvent) {
    newestEvent.textContent = getEventText(byDate[byDate.length - 1].title);
  }
}

function renderFocusPanel() {
  const selectedEvent = filteredEvents.find((event) => event.id === selectedEventId);

  if (!selectedEvent) {
    focusCategory.textContent = "-";
    focusTitle.textContent = "-";
    const emptyParts = { years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    focusTimer.textContent = formatElapsed(emptyParts);
    updateFlipDisplays(emptyParts);
    return;
  }

  const date = parseEventDate(selectedEvent.startDate);
  const parts = getElapsedBreakdown(date, new Date());
  focusCategory.textContent = getEventText(selectedEvent.category || createLocalizedText("General"));
  focusTitle.textContent = getEventText(selectedEvent.title);
  focusTimer.textContent = formatElapsed(parts);
  updateFlipDisplays(parts);
}

function syncActiveCardState() {
  document.querySelectorAll(".event-card").forEach((card) => {
    const isActive = card.dataset.eventId === selectedEventId;
    card.classList.toggle("is-active", isActive);
    card.setAttribute("aria-pressed", String(isActive));
  });
}

function spotlightFocusPanel(shouldScroll = true) {
  if (spotlightTimeoutId) {
    window.clearTimeout(spotlightTimeoutId);
  }

  detailPanel.classList.add("is-spotlit");
  detailPanel.focus({ preventScroll: true });

  if (shouldScroll) {
    detailPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  spotlightTimeoutId = window.setTimeout(() => {
    detailPanel.classList.remove("is-spotlit");
  }, 1400);
}

function updateViewMode() {
  mainNavbar.hidden = isDetailView;
  listPanel.hidden = isDetailView;
  detailPanel.hidden = !isDetailView;
  setPreference(storageKeys.detailView, String(isDetailView));
}

function selectEvent(eventId, shouldScroll = true) {
  selectedEventId = eventId;
  isDetailView = true;
  setPreference(storageKeys.selectedEvent, selectedEventId);
  updateViewMode();
  syncActiveCardState();
  renderFocusPanel();
  spotlightFocusPanel(shouldScroll);
}

function closeDetailView() {
  isDetailView = false;
  updateViewMode();
  setPreference(storageKeys.selectedEvent, selectedEventId);
}

function buildCard(event) {
  const card = eventCardTemplate.content.firstElementChild.cloneNode(true);
  const date = parseEventDate(event.startDate);
  const isActive = event.id === selectedEventId;

  card.dataset.eventId = event.id;
  card.dataset.startDate = event.startDate;
  card.classList.toggle("is-active", isActive);
  card.setAttribute("aria-pressed", String(isActive));

  card.querySelector(".event-card__category").textContent = getEventText(
    event.category || createLocalizedText("General")
  );
  card.querySelector(".event-card__date").textContent = date.getUTCFullYear();
  card.querySelector(".event-card__title").textContent = getEventText(event.title);
  card.querySelector(".event-card__description").textContent = getEventText(event.description);
  card.querySelector(".event-card__start-label").textContent = translate("startDateLabel");
  card.querySelector(".event-card__timer-label").textContent = translate("elapsedLabel");
  card.querySelector(".event-card__start").textContent = `${formatDate(date)} UTC`;
  card.querySelector(".event-card__timer").textContent = formatElapsed(
    getElapsedBreakdown(date, new Date())
  );

  const selectCard = () => {
    selectEvent(event.id, true);
  };

  card.addEventListener("click", selectCard);
  card.addEventListener("keydown", (eventObject) => {
    if (eventObject.key === "Enter" || eventObject.key === " ") {
      eventObject.preventDefault();
      selectCard();
    }
  });

  return card;
}

function renderEvents() {
  filteredEvents = getVisibleEvents();
  ensureValidSelectedEvent();
  eventsGrid.textContent = "";

  filteredEvents.forEach((event) => {
    eventsGrid.appendChild(buildCard(event));
  });

  emptyState.hidden = filteredEvents.length !== 0;
  renderSummary(filteredEvents);
  renderFocusPanel();
  syncActiveCardState();
  updateViewMode();
}

function updateTimers() {
  const now = new Date();

  document.querySelectorAll(".event-card").forEach((card) => {
    const startDate = parseEventDate(card.dataset.startDate);
    const timer = card.querySelector(".event-card__timer");
    timer.textContent = formatElapsed(getElapsedBreakdown(startDate, now));
  });

  const selectedEvent = filteredEvents.find((event) => event.id === selectedEventId);

  if (selectedEvent) {
    const parts = getElapsedBreakdown(parseEventDate(selectedEvent.startDate), now);
    focusTimer.textContent = formatElapsed(parts);
    updateFlipDisplays(parts);
  }
}

function applyTheme(theme) {
  const isLight = theme === "light";
  document.documentElement.classList.toggle("dark", !isLight);
  document.body.classList.toggle("light-theme", isLight);
  document.body.classList.toggle("dark-theme", !isLight);
  themeToggle.setAttribute("aria-pressed", String(isLight));
  themeToggle.setAttribute("aria-label", isLight ? translate("themeDark") : translate("themeLight"));
  themeToggle.setAttribute("title", isLight ? translate("themeDark") : translate("themeLight"));
  themeToggle.textContent = isLight ? "◐" : "◑";
}

function initializeTheme() {
  const savedTheme = getPreference(storageKeys.theme);
  const preferredTheme =
    savedTheme ||
    (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

  applyTheme(preferredTheme);
}

function initializeLanguage() {
  const savedLanguage = getPreference(storageKeys.language);

  if (savedLanguage && languages.some((language) => language.code === savedLanguage)) {
    currentLanguage = savedLanguage;
  }

  populateLanguageSelect();
  applyTranslations();
}

function initializePreferences() {
  const savedSort = getPreference(storageKeys.sort);
  const savedSearch = getPreference(storageKeys.search);
  const savedEventId = getPreference(storageKeys.selectedEvent);
  const savedDetailView = getPreference(storageKeys.detailView);

  if (savedSort && sortValues.includes(savedSort)) {
    sortSelect.value = savedSort;
  }

  if (savedSearch) {
    searchInput.value = savedSearch;
  }

  if (savedEventId && events.some((event) => event.id === savedEventId)) {
    selectedEventId = savedEventId;
  }

  customEvents = loadPersistedCustomEvents();

  if (savedEventId && getAllEvents().some((event) => event.id === savedEventId)) {
    selectedEventId = savedEventId;
  }

  isDetailView = savedDetailView === "true";
}

searchInput.addEventListener("input", () => {
  setPreference(storageKeys.search, searchInput.value);
  renderEvents();
});

sortSelect.addEventListener("change", () => {
  setPreference(storageKeys.sort, sortSelect.value);
  renderEvents();
});

backButton.addEventListener("click", closeDetailView);

languageSelect.addEventListener("change", () => {
  currentLanguage = languageSelect.value;
  setPreference(storageKeys.language, currentLanguage);
  applyTranslations();
  applyTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  renderEvents();
});


themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.classList.contains("dark") ? "light" : "dark";
  setPreference(storageKeys.theme, nextTheme);
  applyTheme(nextTheme);
});

initializeLanguage();
initializeTheme();
initializePreferences();
initFlipDisplays();
renderEvents();
updateTimers();
window.setInterval(updateTimers, 1000);
