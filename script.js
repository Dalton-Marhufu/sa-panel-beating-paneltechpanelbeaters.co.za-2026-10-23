// Panel Tech Panel Beaters - redesign interactions
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('open'); });
    });
  }

  // Active section highlight
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav a[href^="#"]');
  if (sections.length && 'IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          navLinks.forEach(function (l) {
            l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { obs.observe(s); });
  }

  // Year
  var y = document.getElementById('year');
  if (y) { y.textContent = new Date().getFullYear(); }
})();

function handleQuote(e) {
  e.preventDefault();
  var note = document.getElementById('formNote');
  var name = (e.target.name && e.target.name.value) || '';
  var msg = 'Hi Panel Tech, my name is ' + name + ". I'd like a quote.";
  if (note) { note.hidden = false; }
  var url = 'https://api.whatsapp.com/send?phone=27107466056&text=' + encodeURIComponent(msg);
  window.open(url, '_blank');
  return false;
}
