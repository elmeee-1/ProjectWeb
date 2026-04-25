const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// 1. Check if the user has a saved theme
let currentTheme = localStorage.getItem("theme");

// 2. If it's their very first time visiting, FORCE Light Mode
if (!currentTheme) {
  currentTheme = "light";
  localStorage.setItem("theme", "light");
}

// 3. Apply the correct theme on load (using dark-theme to match your CSS)
if (currentTheme === "dark") {
  body.classList.add("dark-theme");
  if (themeToggle) themeToggle.textContent = "☀️";
} else {
  body.classList.remove("dark-theme");
  if (themeToggle) themeToggle.textContent = "🌙";
}

// 4. Toggle button logic
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
