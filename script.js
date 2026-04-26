function filterMedinas(category) {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  const cards = document.querySelectorAll(".medina-card");
  cards.forEach((card) => {
    if (category === "all" || card.getAttribute("data-category") === category) {
      card.style.display = "grid";
      setTimeout(() => (card.style.opacity = "1"), 50);
    } else {
      card.style.display = "none";
      card.style.opacity = "0";
    }
  });
}

function openLightbox(element) {
  const imgSrc = element.querySelector("img").src;
  const lightbox = document.getElementById("imageLightbox");
  const lightboxImg = document.getElementById("lightboxImage");
  lightboxImg.src = imgSrc;
  lightbox.classList.add("active");
}

function closeLightbox() {
  document.getElementById("imageLightbox").classList.remove("active");
}

document
  .getElementById("imageLightbox")
  .addEventListener("click", function (e) {
    if (e.target === this) closeLightbox();
  });

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  const hiddenElements = document.querySelectorAll(".fade-in-element");
  hiddenElements.forEach((el) => observer.observe(el));
});
