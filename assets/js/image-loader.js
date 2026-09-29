(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function markLoaded(frame) {
    frame.classList.remove("is-pending");
    frame.classList.add("is-loaded");
  }

  function wrap(img, isLcp) {
    if (img.closest("header") || img.closest(".media-frame")) return;
    var parent = img.parentNode;
    if (!parent) return;

    // span, not div: kramdown wraps images in <p>, and a div inside a
    // paragraph would split the node and break the case layout.
    var frame = document.createElement("span");
    frame.className = "media-frame";

    var loader = document.createElement("span");
    loader.className = "media-loader";
    loader.setAttribute("aria-hidden", "true");

    parent.insertBefore(frame, img);
    frame.appendChild(loader);
    frame.appendChild(img);

    if (img.complete && img.naturalWidth > 0) {
      markLoaded(frame);
      return;
    }

    // Keep the first content image visible: it is the LCP candidate.
    // Reduced motion skips the spinner and just shows the image when it lands.
    if (isLcp || reduce) {
      frame.classList.add("is-loaded");
      img.addEventListener("load", function () { markLoaded(frame); }, { once: true });
      img.addEventListener("error", function () { markLoaded(frame); }, { once: true });
      return;
    }

    frame.classList.add("is-pending");
    img.addEventListener("load", function () { markLoaded(frame); }, { once: true });
    img.addEventListener("error", function () { markLoaded(frame); }, { once: true });
  }

  function bind() {
    var imgs = document.querySelectorAll("section img");
    for (var i = 0; i < imgs.length; i++) wrap(imgs[i], i === 0);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
