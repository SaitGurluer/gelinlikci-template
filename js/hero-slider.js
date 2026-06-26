(function () {
  const slider = document.getElementById("heroSlider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".hero__slide");
  const dots = document.querySelectorAll(".hero__dot");
  const prevBtn = document.getElementById("heroPrev");
  const nextBtn = document.getElementById("heroNext");

  let current = 0;
  let autoplayTimer;
  const AUTOPLAY_MS = 5000;

  function goTo(index) {
    current = (index + slides.length) % slides.length;

    slides.forEach(function (slide, i) {
      slide.classList.toggle("hero__slide--active", i === current);
    });

    dots.forEach(function (dot, i) {
      dot.classList.toggle("hero__dot--active", i === current);
      dot.setAttribute("aria-selected", String(i === current));
    });
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setInterval(next, AUTOPLAY_MS);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  prevBtn.addEventListener("click", function () {
    prev();
    startAutoplay();
  });

  nextBtn.addEventListener("click", function () {
    next();
    startAutoplay();
  });

  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () {
      goTo(i);
      startAutoplay();
    });
  });

  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);

  startAutoplay();
})();
