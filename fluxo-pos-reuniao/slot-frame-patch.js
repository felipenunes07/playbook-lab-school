/* Remove o fundo cinza padrão do <image-slot> para que o logo flutue sobre o disco branco. */
(function () {
  const css = '.frame{background:transparent !important}';
  const patch = (el) => {
    if (!el.shadowRoot || el.__framePatched) return;
    el.__framePatched = true;
    const s = document.createElement('style');
    s.textContent = css;
    el.shadowRoot.appendChild(s);
  };
  const scan = () => document.querySelectorAll('image-slot').forEach(patch);
  new MutationObserver(scan).observe(document.documentElement, { childList: true, subtree: true });
  const t = setInterval(scan, 250);
  setTimeout(() => clearInterval(t), 8000);
  scan();
})();
