
document.addEventListener("DOMContentLoaded", function () {
  const hiddenElements = document.querySelectorAll(".fade-in-element");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  hiddenElements.forEach((el) => revealObserver.observe(el));

  /* delai d 1.5sc */
  setTimeout(() => {
    hiddenElements.forEach((el) => el.classList.add("visible"));
  }, 1000);
});
