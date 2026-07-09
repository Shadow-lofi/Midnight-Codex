// Lazy-load the giscus discussion board (GitHub Discussions) only when a visitor
// chooses to enter — keeps the page light and avoids loading the widget for
// people just browsing.
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('enter-circle');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var invite = document.getElementById('forum-invite');
    if (invite) invite.remove();

    var s = document.createElement('script');
    s.src = 'https://giscus.app/client.js';
    s.setAttribute('data-repo', 'Shadow-lofi/Midnight-Codex');
    s.setAttribute('data-repo-id', 'R_kgDORzehkg');
    s.setAttribute('data-category', 'General');
    s.setAttribute('data-category-id', 'DIC_kwDORzehks4DAy2u');
    s.setAttribute('data-mapping', 'pathname');
    s.setAttribute('data-strict', '0');
    s.setAttribute('data-reactions-enabled', '1');
    s.setAttribute('data-emit-metadata', '0');
    s.setAttribute('data-input-position', 'top');
    s.setAttribute('data-theme', 'transparent_dark');
    s.setAttribute('data-lang', 'en');
    s.crossOrigin = 'anonymous';
    s.async = true;

    document.getElementById('giscus-container').appendChild(s);
  });
});
