import { TextMorph } from "./vendor/torph.js";

var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function morph(element, options) {
  if (!element) return null;
  return new TextMorph(
    Object.assign(
      {
        element: element,
        locale: "ru",
        duration: 520,
        ease: "cubic-bezier(0.19, 1, 0.22, 1)",
        respectReducedMotion: true
      },
      options || {}
    )
  );
}

function start() {
  var hello = document.querySelector(".hello-morph");
  if (hello) {
    var helloMorph = morph(hello, { duration: 640 });
    if (helloMorph) {
      helloMorph.update("привет");
      if (reduce) {
        helloMorph.update("привет, а вот и кейсы!");
      } else {
        window.setTimeout(function () {
          helloMorph.update("привет, а вот и кейсы!");
        }, 640);
      }
    }
  }

  var bio = document.querySelector(".bio-morph");
  if (!bio) return;

  var phrases = [
    "Увеличиваю ценность продукта через исследования.",
    "Создаю масштабируемые дизайн‑системы.",
    "Выстраиваю процессы DesignOps."
  ];

  if (reduce) {
    bio.textContent = phrases.join(" ");
    return;
  }

  var bioMorph = morph(bio, { duration: 560 });
  if (!bioMorph) return;

  bioMorph.update(phrases[0]);
  var i = 0;
  window.setInterval(function () {
    i = (i + 1) % phrases.length;
    bioMorph.update(phrases[i]);
  }, 3600);
}

var started = false;
function once() {
  if (started) return;
  started = true;
  start();
}

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(once).catch(once);
  window.setTimeout(once, 1200);
} else {
  once();
}
