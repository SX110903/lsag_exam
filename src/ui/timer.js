/** Cuenta regresiva del examen. */

import { EXAM_DURATION_MINUTES, TIMER_DANGER_SECONDS, TIMER_WARN_SECONDS } from "../core/config.js";
import { byId } from "./dom.js";

/** Formatea segundos como `MM:SS`. */
export function formatClock(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

/** Formatea segundos como `Xm YYs`, para el certificado. */
export function formatElapsed(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
}

/**
 * @param {() => void} onExpire Se ejecuta cuando el tiempo llega a cero.
 */
export function createTimer(onExpire) {
  const display = byId("timerDisplay");
  let remaining = 0;
  let intervalId = null;

  function render() {
    display.textContent = formatClock(remaining);
    display.className = "timer";
    if (remaining <= TIMER_DANGER_SECONDS) {
      display.classList.add("danger");
    } else if (remaining <= TIMER_WARN_SECONDS) {
      display.classList.add("warn");
    }
  }

  function stop() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  return {
    start() {
      stop();
      remaining = EXAM_DURATION_MINUTES * 60;
      render();
      intervalId = setInterval(() => {
        remaining -= 1;
        if (remaining <= 0) {
          remaining = 0;
          render();
          stop();
          onExpire();
          return;
        }
        render();
      }, 1000);
    },
    stop,
  };
}
