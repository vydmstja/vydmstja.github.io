const yearEl = document.querySelector("#current-year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
