const themeToggle = document.getElementById("themeToggle");
const body = document.body;
let currentTheme = localStorage.getItem("theme");
if (!currentTheme) {
  currentTheme = "light";
  localStorage.setItem("theme", "light");
}
if (currentTheme === "dark") {
  body.classList.add("dark-theme");
  if (themeToggle) themeToggle.textContent = "☀️";
} else {
  body.classList.remove("dark-theme");
  if (themeToggle) themeToggle.textContent = "🌙";
}
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙";
    }
  });
}
