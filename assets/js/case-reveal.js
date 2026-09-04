(function () {
  var cards = document.querySelectorAll(".home-feed .case-card");
  if (!cards.length) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.setProperty("--card-delay", (i * 0.08).toFixed(2) + "s");
    if (reduce) cards[i].classList.add("is-in");
  }
  if (reduce) return;

  if (!("IntersectionObserver" in window)) {
    for (var j = 0; j < cards.length; j++) cards[j].classList.add("is-in");
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      for (var k = 0; k < entries.length; k++) {
        if (!entries[k].isIntersecting) continue;
        entries[k].target.classList.add("is-in");
        io.unobserve(entries[k].target);
      }
    },
    { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
  );

  for (var n = 0; n < cards.length; n++) io.observe(cards[n]);
})();
