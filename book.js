document.addEventListener("DOMContentLoaded", function () {
  /* scroll animation*/
  const fields = document.querySelectorAll(".field");
  const footer = document.getElementById("formFooter");
  const toReveal = [...fields, footer];

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      }),
    { threshold: 0.12, rootMargin: "0px 0px -30px 0px" },
  );

  toReveal.forEach((el) => el && observer.observe(el));

  setTimeout(() => {
    toReveal.forEach((el) => el && el.classList.add("visible"));
  }, 1000);

  /* la date  */
  const today = new Date().toISOString().split("T")[0];
  const arrivalInput = document.getElementById("arrival");
  const departureInput = document.getElementById("departure");

  if (arrivalInput && departureInput) {
    arrivalInput.min = today;
    departureInput.min = today;

    arrivalInput.addEventListener("change", function () {
      departureInput.min = this.value || today;
    });
  }

  /* submit  */
  const form = document.getElementById("bookForm");
  const submitBtn = document.getElementById("submitBtn");
  const successEl = document.getElementById("formSuccess");

  function validateField(fieldEl, input) {
    const isEmpty = !input.value.trim();
    const isInvalidEmail =
      input.type === "email" &&
      !isEmpty &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
    const invalid = isEmpty || isInvalidEmail;
    fieldEl.classList.toggle("has-error", invalid);
    return !invalid;
  }

  document
    .querySelectorAll(".field__input, .field__textarea, .field__select")
    .forEach((input) => {
      input.addEventListener("blur", () => {
        const wrapper = input.closest(".field");
        if (wrapper) validateField(wrapper, input);
      });
      input.addEventListener("input", () => {
        const wrapper = input.closest(".field");
        if (wrapper && wrapper.classList.contains("has-error"))
          validateField(wrapper, input);
      });
    });

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const inputs = form.querySelectorAll(
        ".field__input, .field__textarea, .field__select",
      );
      let allValid = true;
      inputs.forEach((input) => {
        const wrapper = input.closest(".field");
        if (wrapper && !validateField(wrapper, input)) allValid = false;
      });

      if (!allValid) {
        const firstError = form.querySelector(".field.has-error");
        if (firstError)
          firstError.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }

      submitBtn.querySelector(".btn-text").style.display = "none";
      submitBtn.querySelector(".btn-spinner").style.display = "block";
      submitBtn.disabled = true;

      setTimeout(() => {
        form.style.display = "none";
        successEl.classList.add("visible");
        successEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 1500);
    });
  }
});
