const yearEl = document.querySelector("#current-year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

const currentUrl = new URL(window.location.href);
let shouldCleanUrl = false;

if (currentUrl.searchParams.has("v")) {
  currentUrl.searchParams.delete("v");
  shouldCleanUrl = true;
}

if (currentUrl.hash === "#top") {
  currentUrl.hash = "";
  shouldCleanUrl = true;
}

if (shouldCleanUrl) {
  const cleanPath = `${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`;
  window.history.replaceState({}, "", cleanPath);
}
