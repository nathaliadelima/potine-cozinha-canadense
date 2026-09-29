document.addEventListener("DOMContentLoaded", function () {

  // ============================================================
  // MENU MOBILE
  // ============================================================

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  const closeMobileMenu = function () {
    if (mobileMenu) {
      mobileMenu.classList.remove("open");
    }

    if (menuToggle) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    }
  };

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      const isOpen = mobileMenu.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );
    });
  }

  // ============================================================
  // ROLAGEM SUAVE DOS LINKS
  // ============================================================

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      // Ignora links vazios
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);

      if (!targetEl) return;

      event.preventDefault();

      targetEl.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      closeMobileMenu();
    });
  });
});

