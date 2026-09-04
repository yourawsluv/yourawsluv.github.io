(function () {
  var GRID = 56;
  var LERP_POS = 0.18;
  var LERP_INT = 0.14;
  var GLOW_RADIUS = 0.32;
  var SCALE_ADD = 1.05;
  var WHITE_MIX = 0.78;
  var REST_DOT = 0.34;
  var BLOOM_ALPHA = 0.22;

  function prefersReduce() {
    return window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function sampleDots(img) {
    var src = document.createElement("canvas");
    var w = img.naturalWidth || img.width;
    var h = img.naturalHeight || img.height;
    src.width = w;
    src.height = h;
    var sctx = src.getContext("2d", { willReadFrequently: true });
    if (!sctx) return [];
    sctx.drawImage(img, 0, 0);
    var data = sctx.getImageData(0, 0, w, h).data;
    var cellW = w / GRID;
    var cellH = h / GRID;
    var dots = [];

    for (var j = 0; j < GRID; j++) {
      for (var i = 0; i < GRID; i++) {
        var nx = (i + 0.5) / GRID - 0.5;
        var ny = (j + 0.5) / GRID - 0.5;
        var dist2 = nx * nx + ny * ny;
        if (dist2 > 0.25) continue;

        var x0 = Math.floor(i * cellW);
        var y0 = Math.floor(j * cellH);
        var x1 = Math.max(x0 + 1, Math.floor((i + 1) * cellW));
        var y1 = Math.max(y0 + 1, Math.floor((j + 1) * cellH));
        var r = 0, g = 0, b = 0, n = 0;
        for (var y = y0; y < y1; y++) {
          var row = y * w;
          for (var x = x0; x < x1; x++) {
            var idx = (row + x) * 4;
            r += data[idx];
            g += data[idx + 1];
            b += data[idx + 2];
            n++;
          }
        }
        if (!n) continue;
        r = Math.round(r / n);
        g = Math.round(g / n);
        b = Math.round(b / n);

        var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        if (luma < 14 && dist2 > 0.2116) continue;

        dots.push({
          x: (i + 0.5) / GRID,
          y: (j + 0.5) / GRID,
          r: r,
          g: g,
          b: b
        });
      }
    }
    return dots;
  }

  function paintDots(ctx, dots, size, glowX, glowY, intensity) {
    var cell = size / GRID;
    var restR = cell * REST_DOT;
    var glowing = intensity > 0.004;
    var i, d, rad, t, dx, dy, dist, mix, rr, gg, bb;

    ctx.clearRect(0, 0, size, size);

    for (i = 0; i < dots.length; i++) {
      d = dots[i];
      rad = restR;
      rr = d.r;
      gg = d.g;
      bb = d.b;

      if (glowing) {
        dx = d.x - glowX;
        dy = d.y - glowY;
        dist = Math.sqrt(dx * dx + dy * dy);
        t = 1 - dist / GLOW_RADIUS;
        if (t < 0) t = 0;
        t = t * t * (3 - 2 * t) * intensity;
        rad = restR * (1 + t * SCALE_ADD);
        mix = t * WHITE_MIX;
        rr = Math.round(d.r + (255 - d.r) * mix);
        gg = Math.round(d.g + (255 - d.g) * mix);
        bb = Math.round(d.b + (255 - d.b) * mix);
      }

      ctx.fillStyle = "rgb(" + rr + "," + gg + "," + bb + ")";
      ctx.beginPath();
      ctx.arc(d.x * size, d.y * size, rad, 0, Math.PI * 2);
      ctx.fill();
    }

    if (glowing) {
      var bloomR = size * GLOW_RADIUS * 1.15;
      var gx = glowX * size;
      var gy = glowY * size;
      var grd = ctx.createRadialGradient(gx, gy, 0, gx, gy, bloomR);
      var a0 = BLOOM_ALPHA * intensity;
      grd.addColorStop(0, "rgba(255,255,255," + a0.toFixed(3) + ")");
      grd.addColorStop(0.35, "rgba(255,255,255," + (a0 * 0.35).toFixed(3) + ")");
      grd.addColorStop(1, "rgba(255,255,255,0)");
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(size * 0.5, size * 0.5, size * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  function LogoDots(root) {
    var img = root.querySelector("img");
    var canvas = root.querySelector("canvas");
    if (!img || !canvas) return;

    var ctx = canvas.getContext("2d");
    if (!ctx) return;

    var dots = null;
    var cssSize = 0;
    var dpr = 1;
    var glowX = 0.5;
    var glowY = 0.5;
    var targetX = 0.5;
    var targetY = 0.5;
    var intensity = 0;
    var targetInt = 0;
    var hovering = false;
    var raf = 0;
    var reduce = prefersReduce();

    function sizeCanvas() {
      var next = root.clientWidth || canvas.clientWidth;
      if (next < 2) return;
      cssSize = next;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(cssSize * dpr);
      canvas.height = Math.round(cssSize * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawStatic() {
      if (!dots || !cssSize) return;
      paintDots(ctx, dots, cssSize, 0.5, 0.5, 0);
      root.classList.add("is-ready");
    }

    function frame() {
      raf = 0;
      glowX += (targetX - glowX) * LERP_POS;
      glowY += (targetY - glowY) * LERP_POS;
      intensity += (targetInt - intensity) * LERP_INT;

      var dx = targetX - glowX;
      var dy = targetY - glowY;
      var settled =
        !hovering &&
        intensity < 0.004 &&
        Math.abs(targetInt - intensity) < 0.004 &&
        dx * dx + dy * dy < 0.00002;

      if (settled) {
        intensity = 0;
        drawStatic();
        return;
      }

      paintDots(ctx, dots, cssSize, glowX, glowY, intensity);
      raf = window.requestAnimationFrame(frame);
    }

    function kick() {
      if (reduce || raf) return;
      raf = window.requestAnimationFrame(frame);
    }

    function onPointerMove(ev) {
      if (reduce) return;
      var rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      var x = (ev.clientX - rect.left) / rect.width;
      var y = (ev.clientY - rect.top) / rect.height;
      var cdx = x - 0.5;
      var cdy = y - 0.5;
      if (cdx * cdx + cdy * cdy > 0.26) {
        if (hovering) onPointerLeave();
        return;
      }
      targetX = x;
      targetY = y;
      if (!hovering) {
        glowX = x;
        glowY = y;
      }
      hovering = true;
      targetInt = 1;
      kick();
    }

    function onPointerLeave() {
      hovering = false;
      targetInt = 0;
      kick();
    }

    function bindPointer() {
      root.addEventListener("pointerenter", onPointerMove);
      root.addEventListener("pointermove", onPointerMove);
      root.addEventListener("pointerleave", onPointerLeave);
    }

    function unbindPointer() {
      root.removeEventListener("pointerenter", onPointerMove);
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerleave", onPointerLeave);
    }

    function applyMotionPref() {
      reduce = prefersReduce();
      if (raf) {
        window.cancelAnimationFrame(raf);
        raf = 0;
      }
      hovering = false;
      targetInt = 0;
      intensity = 0;
      if (reduce) {
        unbindPointer();
        drawStatic();
      } else {
        bindPointer();
        drawStatic();
      }
    }

    function start() {
      dots = sampleDots(img);
      if (!dots.length) return;
      sizeCanvas();
      applyMotionPref();

      if (typeof ResizeObserver !== "undefined") {
        new ResizeObserver(function () {
          var prev = cssSize;
          sizeCanvas();
          if (cssSize !== prev) drawStatic();
        }).observe(root);
      } else {
        window.addEventListener("resize", function () {
          sizeCanvas();
          drawStatic();
        });
      }

      if (window.matchMedia) {
        var mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        var onMq = function () { applyMotionPref(); };
        if (mq.addEventListener) mq.addEventListener("change", onMq);
        else if (mq.addListener) mq.addListener(onMq);
      }
    }

    function whenReady() {
      if (!img.naturalWidth) return;
      start();
    }

    if (img.complete && img.naturalWidth) {
      whenReady();
    } else {
      img.addEventListener("load", whenReady);
    }
  }

  function boot() {
    var nodes = document.querySelectorAll("[data-logo-dots]");
    for (var i = 0; i < nodes.length; i++) LogoDots(nodes[i]);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
