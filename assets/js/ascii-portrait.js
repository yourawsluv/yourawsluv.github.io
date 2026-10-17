/* img2asciix 2.0.0, MIT. Browser build only (the npm "canvas" dependency is Node-only and is not included).
   Copyright (c) 2025 云深
   Permission is hereby granted, free of charge, to any person obtaining a copy
   of this software to deal in the Software without restriction, including
   the rights to use, copy, modify, merge, publish, distribute, sublicense,
   and/or sell copies of the Software, and to permit persons to whom the
   Software is furnished to do so, subject to the following conditions:
   The above copyright notice and this permission notice shall be included in
   all copies or substantial portions of the Software.
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
   https://github.com/YShenZe/Img2ASCIIx
*/
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AsciiArt=t():e.AsciiArt=t()}("undefined"!=typeof self?self:this,(()=>{return e={740:function(e){var t,r;t="undefined"!=typeof window?window:this,r=function(){"use strict";var e;e="undefined"!=typeof Image?Image:function(){throw new Error("当前环境不支持 Image 对象，请在浏览器环境或提供 polyfill 后使用。")};var t={width:100,height:void 0,asciiRamp:"@%#*+=-:. "};return{convert:function(r,n){return n=function(e){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);if(e)for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);return r}(n),new Promise((function(t,o){var i,a;"string"==typeof r?(a=r,i=new Promise((function(t,r){var n;try{n=new e}catch(e){return r(e)}n.onload=function(){t(n)},n.onerror=function(){r(new Error("加载图片失败："+a))},n.src=a}))):i=Promise.resolve(r),i.then((function(e){var r,i=e.height/e.width,a=n.width,f=n.height||Math.round(a*i);try{r=function(e,t){if("undefined"!=typeof document&&"function"==typeof document.createElement){var r=document.createElement("canvas");return r.width=e,r.height=t,r}if("undefined"!=typeof OffscreenCanvas)return new OffscreenCanvas(e,t);throw new Error("当前环境不支持 Canvas，请在浏览器环境或提供 polyfill 后使用。")}(a,f)}catch(e){return o(e)}var c,u=r.getContext("2d");u.drawImage(e,0,0,a,f);try{c=u.getImageData(0,0,a,f).data}catch(e){return o(new Error("无法获取图像像素数据，可能是跨域问题。"))}for(var s="",d=n.asciiRamp,p=0;p<f;p++){for(var h=0;h<a;h++){var v=4*(p*a+h),w=.299*c[v]+.587*c[v+1]+.114*c[v+2],y=Math.floor(w/255*(d.length-1));s+=d.charAt(y)}s+="\n"}t(s)})).catch((function(e){o(e)}))}))}}},"object"==typeof e.exports?e.exports=r():t.AsciiArt=r()}},t={},function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(740);var e,t}));
/* Sidebar portrait.
   img2asciix maps the prepared pixels to text. The page keeps the pixel
   image until that text exists, then swaps it inside the same circle.
   Blink: eyes shut for BLINK_CLOSED_MS, once every BLINK_INTERVAL_MS.
   prefers-reduced-motion: open eyes, no timer. */
(function (root) {
  var BLINK_INTERVAL_MS = 3000;
  var BLINK_CLOSED_MS = 140;
  var COLS = 88;
  var ROWS = 53;
  var RAMP = "@%#*+=-:. ";
  /* Eye boxes measured on assets/img/logo.png (460px). Light lens pixels
     inside the box become a shut lid; the dark frame stays. */
  var EYES = [
    [145, 172, 172, 198],
    [178, 205, 172, 198]
  ];
  var SOURCE_SIZE = 460;

  function createBlinkController(options) {
    var setTimeoutFn = options.setTimeoutFn;
    var setIntervalFn = options.setIntervalFn;
    var clearTimeoutFn = options.clearTimeoutFn;
    var clearIntervalFn = options.clearIntervalFn;
    var onFrame = options.onFrame;
    var intervalId = null;
    var closedId = null;

    function stop() {
      if (intervalId !== null) {
        clearIntervalFn(intervalId);
        intervalId = null;
      }
      if (closedId !== null) {
        clearTimeoutFn(closedId);
        closedId = null;
      }
    }

    if (options.reducedMotion) {
      onFrame("open");
      return { scheduled: false, stop: stop };
    }

    onFrame("open");
    intervalId = setIntervalFn(function () {
      onFrame("closed");
      if (closedId !== null) clearTimeoutFn(closedId);
      closedId = setTimeoutFn(function () {
        closedId = null;
        onFrame("open");
      }, BLINK_CLOSED_MS);
    }, BLINK_INTERVAL_MS);

    return { scheduled: true, stop: stop };
  }

  function toneValue(r, g, b, a) {
    if (a < 32) return 255;
    var lum = 0.299 * r + 0.587 * g + 0.114 * b;
    if (lum < 36) return 0;
    if (b > r + 18 && b > 60) {
      if (r < 70 && lum > 100) return 30;
      return 232;
    }
    if (lum > 160 && Math.min(r, g, b) > 110 && Math.abs(r - g) < 35) return 240;
    if (r > 95 && r > b + 40 && b < 100 && g < 175) return lum >= 108 ? 145 : 55;
    if (r > 115 && g > 95 && Math.abs(r - g) < 40 && b > 55) return 205;
    return lum;
  }

  function paintShut(data, width, height) {
    var sx = width / SOURCE_SIZE;
    var sy = height / SOURCE_SIZE;
    var i, e, x0, x1, y0, y1, x, y, p, v;
    for (i = 0; i < EYES.length; i++) {
      e = EYES[i];
      x0 = Math.max(0, Math.round(e[0] * sx));
      x1 = Math.min(width - 1, Math.round(e[1] * sx));
      y0 = Math.max(0, Math.round(e[2] * sy));
      y1 = Math.min(height - 1, Math.round(e[3] * sy));
      for (y = y0; y <= y1; y++) {
        for (x = x0; x <= x1; x++) {
          p = (y * width + x) * 4;
          v = data[p];
          if (v > 40) {
            data[p] = data[p + 1] = data[p + 2] = 0;
          }
        }
      }
    }
  }

  function boxDownscale(data, sw, sh, cols, rows) {
    var out = new Uint8ClampedArray(cols * rows);
    var xScale = sw / cols;
    var yScale = sh / rows;
    var y, x, y0, y1, x0, x1, yy, xx, sum, n;
    for (y = 0; y < rows; y++) {
      y0 = Math.floor(y * yScale);
      y1 = Math.floor((y + 1) * yScale);
      if (y1 <= y0) y1 = y0 + 1;
      for (x = 0; x < cols; x++) {
        x0 = Math.floor(x * xScale);
        x1 = Math.floor((x + 1) * xScale);
        if (x1 <= x0) x1 = x0 + 1;
        sum = 0;
        n = 0;
        for (yy = y0; yy < y1 && yy < sh; yy++) {
          for (xx = x0; xx < x1 && xx < sw; xx++) {
            sum += data[(yy * sw + xx) * 4];
            n++;
          }
        }
        out[y * cols + x] = n ? Math.round(sum / n) : 255;
      }
    }
    return out;
  }

  function samplesToCanvas(samples, cols, rows) {
    var canvas = document.createElement("canvas");
    canvas.width = cols;
    canvas.height = rows;
    var ctx = canvas.getContext("2d");
    var image = ctx.createImageData(cols, rows);
    var i, p, v;
    for (i = 0; i < samples.length; i++) {
      v = samples[i];
      p = i * 4;
      image.data[p] = image.data[p + 1] = image.data[p + 2] = v;
      image.data[p + 3] = 255;
    }
    ctx.putImageData(image, 0, 0);
    return canvas;
  }

  function cleanAscii(text) {
    return String(text).replace(/\s+$/, "");
  }

  function boot() {
    var slot = document.querySelector(".avatar-slot");
    if (!slot) return;
    var img = slot.querySelector("img");
    var pre = slot.querySelector(".avatar-ascii");
    var AsciiArt = root.AsciiArt;
    if (!img || !pre || !AsciiArt || typeof AsciiArt.convert !== "function") return;

    function reveal(openText, closedText) {
      pre.textContent = openText;
      slot.style.setProperty("--ascii-rows", String(ROWS));
      slot.style.setProperty("--ascii-cols", String(COLS));
      pre.removeAttribute("hidden");
      slot.classList.add("is-ascii");

      var mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      var controller = null;

      function arm(reduced) {
        if (controller) controller.stop();
        controller = createBlinkController({
          reducedMotion: reduced,
          setTimeoutFn: function (fn, ms) { return window.setTimeout(fn, ms); },
          setIntervalFn: function (fn, ms) { return window.setInterval(fn, ms); },
          clearTimeoutFn: function (id) { window.clearTimeout(id); },
          clearIntervalFn: function (id) { window.clearInterval(id); },
          onFrame: function (frame) {
            pre.textContent = frame === "closed" ? closedText : openText;
          }
        });
      }

      arm(mq.matches);
      if (mq.addEventListener) {
        mq.addEventListener("change", function () {
          arm(mq.matches);
        });
      }
    }

    function build() {
      var width = img.naturalWidth;
      var height = img.naturalHeight;
      if (!width || !height) return;
      var canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      var ctx = canvas.getContext("2d", { willReadFrequently: true });
      ctx.drawImage(img, 0, 0, width, height);
      var pixels = ctx.getImageData(0, 0, width, height).data;
      var open = new Uint8ClampedArray(pixels.length);
      var i, v;
      for (i = 0; i < pixels.length; i += 4) {
        v = toneValue(pixels[i], pixels[i + 1], pixels[i + 2], pixels[i + 3]);
        open[i] = open[i + 1] = open[i + 2] = v;
        open[i + 3] = 255;
      }
      var shut = new Uint8ClampedArray(open);
      paintShut(shut, width, height);
      var openCanvas = samplesToCanvas(boxDownscale(open, width, height, COLS, ROWS), COLS, ROWS);
      var shutCanvas = samplesToCanvas(boxDownscale(shut, width, height, COLS, ROWS), COLS, ROWS);
      var options = { width: COLS, height: ROWS, asciiRamp: RAMP };
      Promise.all([
        AsciiArt.convert(openCanvas, options),
        AsciiArt.convert(shutCanvas, options)
      ]).then(function (frames) {
        reveal(cleanAscii(frames[0]), cleanAscii(frames[1]));
      }).catch(function () {});
    }

    function afterPaint() {
      window.requestAnimationFrame(function () {
        window.requestAnimationFrame(build);
      });
    }

    if (img.complete && img.naturalWidth) afterPaint();
    else img.addEventListener("load", afterPaint);
  }

  var api = {
    BLINK_INTERVAL_MS: BLINK_INTERVAL_MS,
    BLINK_CLOSED_MS: BLINK_CLOSED_MS,
    createBlinkController: createBlinkController
  };

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  }

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", function () {
        try { boot(); } catch (e) {}
      });
    } else {
      try { boot(); } catch (e) {}
    }
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
