(function () {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  /* Scroll efekti */
  function onScroll() {
    navbar.classList.toggle("navbar--scrolled", window.scrollY > 20);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobil menü aç/kapa */
  toggle.addEventListener("click", function () {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Menüyü aç" : "Menüyü kapat");
    mobileMenu.classList.toggle("navbar__mobile--open", !isOpen);
    mobileMenu.setAttribute("aria-hidden", String(isOpen));
    document.body.style.overflow = isOpen ? "" : "hidden";
  });

  /* Mobil link tıklanınca menüyü kapat */
  mobileMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Menüyü aç");
      mobileMenu.classList.remove("navbar__mobile--open");
      mobileMenu.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    });
  });

  /* Aktif sayfa linki (hash'e göre) */
  function setActiveLink() {
    const hash = window.location.hash || "#anasayfa";
    document.querySelectorAll(".navbar__link").forEach(function (link) {
      link.classList.toggle("navbar__link--active", link.getAttribute("href") === hash);
    });
  }

  window.addEventListener("hashchange", setActiveLink);
  setActiveLink();
})();
