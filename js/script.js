document.addEventListener("DOMContentLoaded", function () {

  // ============================================================
  // MENU MOBILE
  // ============================================================

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const topbar = document.querySelector(".topbar");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {

      const isOpen = mobileMenu.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );

      // Se abriu o menu, garante que o header está visível
      if (isOpen && topbar) {
        topbar.classList.remove("hide");
      }
    });
  }


  // ============================================================
  // NAVEGAÇÃO DAS ÂNCORAS
  // ============================================================

  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);

      if (!targetEl) return;

      event.preventDefault();


      // ----------------------------------------------------------
      // Fecha o menu mobile antes de calcular a posição
      // ----------------------------------------------------------

      if (mobileMenu) {
        mobileMenu.classList.remove("open");
      }

      if (menuToggle) {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
      }


      // ----------------------------------------------------------
      // Garante que o header esteja visível durante a navegação
      // ----------------------------------------------------------

      if (topbar) {
        topbar.classList.remove("hide");
      }


      // ----------------------------------------------------------
      // Calcula exatamente onde a seção deve parar
      // ----------------------------------------------------------

      const headerHeight = topbar ? topbar.offsetHeight : 0;

      const extraSpace = 20;

      const targetPosition =
        targetEl.getBoundingClientRect().top +
        window.scrollY -
        headerHeight -
        extraSpace;


      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

    });

  });


  // ============================================================
  // ESCONDE O HEADER AO DESCER / MOSTRA AO SUBIR
  // ============================================================

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", function () {

    const currentScrollY = window.scrollY;

    if (!topbar) return;


    // ----------------------------------------------------------
    // Sempre visível no topo da página
    // ----------------------------------------------------------

    if (currentScrollY <= 20) {

      topbar.classList.remove("hide");

      lastScrollY = currentScrollY;

      return;
    }


    // ----------------------------------------------------------
    // Se o menu mobile estiver aberto,
    // nunca esconde o header
    // ----------------------------------------------------------

    if (
      mobileMenu &&
      mobileMenu.classList.contains("open")
    ) {

      topbar.classList.remove("hide");

      lastScrollY = currentScrollY;

      return;
    }


    // ----------------------------------------------------------
    // Descendo → esconde
    // ----------------------------------------------------------

    if (currentScrollY > lastScrollY) {

      topbar.classList.add("hide");

    }


    // ----------------------------------------------------------
    // Subindo → mostra
    // ----------------------------------------------------------

    else if (currentScrollY < lastScrollY) {

      topbar.classList.remove("hide");

    }


    lastScrollY = currentScrollY;

  });

});