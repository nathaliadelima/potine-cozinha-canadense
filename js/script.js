/* ============================================================
   POTINE — COZINHA CANADENSE
   Script do site 
   Desenvolvido por Na Lima — nathdelima
   ============================================================
   O que este arquivo faz:
   - Rolagem suave ao clicar nos links do menu (#sabores, #avaliacoes, etc.)
     em vez do salto seco padrão do navegador.

   Este site não depende de JavaScript para funcionar — é só uma
   melhora de experiência. Se este arquivo não carregar por algum
   motivo, os links do menu continuam funcionando normalmente,
   só sem a rolagem suave.
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {
  // Seleciona todos os links que apontam para uma âncora interna (ex: href="#sabores")
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      const targetId = link.getAttribute("href");

      // Ignora links vazios (href="#") para não quebrar nada
      if (!targetId || targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      event.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
