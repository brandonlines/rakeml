(function () {
  var STORAGE_KEY = "siloxane100days_theme_v1";

  function getInitialTheme() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function applyTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    var btn = document.getElementById("themeToggle");
    if (!btn) return;
    var isLight = theme === "light";
    btn.setAttribute("aria-pressed", isLight ? "true" : "false");
    btn.textContent = isLight ? "Light mode" : "Dark mode";
    btn.title = isLight ? "Switch to dark mode" : "Switch to light mode";
  }

  function saveTheme(theme) {
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
  }

  function toggleTheme() {
    var current = document.body.getAttribute("data-theme") === "light" ? "light" : "dark";
    var next = current === "light" ? "dark" : "light";
    applyTheme(next);
    saveTheme(next);
  }

  function mountToggle() {
    var headerRow = document.querySelector("header .row");
    if (!headerRow) return;

    var button = document.createElement("button");
    button.id = "themeToggle";
    button.className = "theme-toggle";
    button.type = "button";
    button.setAttribute("aria-label", "Toggle light or dark theme");
    button.addEventListener("click", toggleTheme);

    headerRow.appendChild(button);
    applyTheme(getInitialTheme());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountToggle);
  } else {
    mountToggle();
  }
})();
