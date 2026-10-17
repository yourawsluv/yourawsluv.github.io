import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const {
  BLINK_INTERVAL_MS,
  BLINK_CLOSED_MS,
  createBlinkController
} = require("../assets/js/ascii-portrait.js");

function createClock() {
  let now = 0;
  let seq = 0;
  const timers = [];

  function setTimeoutFn(fn, ms) {
    const entry = { id: ++seq, fn, at: now + ms, interval: false };
    timers.push(entry);
    return entry.id;
  }

  function setIntervalFn(fn, ms) {
    const entry = { id: ++seq, fn, at: now + ms, interval: true, every: ms };
    timers.push(entry);
    return entry.id;
  }

  function clearTimer(id) {
    const index = timers.findIndex((entry) => entry.id === id);
    if (index >= 0) timers.splice(index, 1);
  }

  function flushTo(target) {
    while (true) {
      const due = timers.filter((entry) => entry.at <= target);
      if (!due.length) break;
      due.sort((a, b) => a.at - b.at || a.id - b.id);
      const next = due[0];
      timers.splice(timers.indexOf(next), 1);
      now = next.at;
      next.fn();
      if (next.interval) {
        next.at = now + next.every;
        timers.push(next);
      }
    }
    now = target;
  }

  return {
    setTimeoutFn,
    setIntervalFn,
    clearTimeoutFn: clearTimer,
    clearIntervalFn: clearTimer,
    flushTo,
    pending: () => timers.length
  };
}

test("blink interval is 3000ms and the shut time stays under 200ms", () => {
  assert.equal(BLINK_INTERVAL_MS, 3000);
  assert.ok(BLINK_CLOSED_MS >= 120);
  assert.ok(BLINK_CLOSED_MS <= 150);
  assert.ok(BLINK_CLOSED_MS < 200);
});

test("a short blink is scheduled every 3000ms", () => {
  const clock = createClock();
  const frames = [];
  const controller = createBlinkController({
    reducedMotion: false,
    setTimeoutFn: clock.setTimeoutFn,
    setIntervalFn: clock.setIntervalFn,
    clearTimeoutFn: clock.clearTimeoutFn,
    clearIntervalFn: clock.clearIntervalFn,
    onFrame: (frame) => frames.push(frame)
  });

  assert.equal(controller.scheduled, true);
  assert.deepEqual(frames, ["open"]);

  clock.flushTo(BLINK_INTERVAL_MS - 1);
  assert.deepEqual(frames, ["open"]);

  clock.flushTo(BLINK_INTERVAL_MS);
  assert.deepEqual(frames, ["open", "closed"]);

  clock.flushTo(BLINK_INTERVAL_MS + BLINK_CLOSED_MS - 1);
  assert.deepEqual(frames, ["open", "closed"]);

  clock.flushTo(BLINK_INTERVAL_MS + BLINK_CLOSED_MS);
  assert.deepEqual(frames, ["open", "closed", "open"]);

  clock.flushTo(BLINK_INTERVAL_MS * 2);
  assert.deepEqual(frames, ["open", "closed", "open", "closed"]);

  clock.flushTo(BLINK_INTERVAL_MS * 2 + BLINK_CLOSED_MS);
  assert.deepEqual(frames, ["open", "closed", "open", "closed", "open"]);
});

test("reduced motion does not schedule a blink", () => {
  let timeouts = 0;
  let intervals = 0;
  const frames = [];
  const controller = createBlinkController({
    reducedMotion: true,
    setTimeoutFn: () => {
      timeouts += 1;
      return 1;
    },
    setIntervalFn: () => {
      intervals += 1;
      return 1;
    },
    clearTimeoutFn: () => {},
    clearIntervalFn: () => {},
    onFrame: (frame) => frames.push(frame)
  });

  assert.equal(controller.scheduled, false);
  assert.equal(timeouts, 0);
  assert.equal(intervals, 0);
  assert.deepEqual(frames, ["open"]);
});
