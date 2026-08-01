/** Pantalla de resultado: calificación y revisión pregunta por pregunta. */

import { OPTION_LABELS, PASSING_PERCENT } from "../core/config.js";
import { byId, clear, createElement } from "./dom.js";

export function createResultView() {
  const elements = {
    card: byId("result-card"),
    candidate: byId("result-candidate"),
    exam: byId("result-exam"),
    score: byId("result-score"),
    percent: byId("result-percent"),
    status: byId("result-status"),
    threshold: byId("result-threshold"),
    review: byId("result-review"),
  };

  function buildOption(option, optionIndex, entry) {
    const isSelected = entry.selectedIndex === optionIndex;
    const isCorrect = entry.correctIndex === optionIndex;

    const marks = [];
    if (isCorrect) marks.push("Correcta");
    if (isSelected && !isCorrect) marks.push("Tu respuesta");

    const element = createElement("li", { className: "review__option" }, [
      createElement("span", {
        className: "option__label",
        text: OPTION_LABELS[optionIndex],
      }),
      createElement("span", { className: "option__text", text: option.text }),
    ]);

    if (marks.length > 0) {
      element.append(createElement("span", { className: "review__tag", text: marks.join(" · ") }));
    }
    element.classList.toggle("is-correct", isCorrect);
    element.classList.toggle("is-wrong", isSelected && !isCorrect);

    return element;
  }

  function buildReviewEntry(entry) {
    const options = entry.options.map((option, optionIndex) =>
      buildOption(option, optionIndex, entry),
    );

    return createElement("article", { className: "review__item" }, [
      createElement("header", { className: "review__header" }, [
        createElement("span", {
          className: `review__badge ${entry.isCorrect ? "is-correct" : "is-wrong"}`,
          text: entry.isCorrect ? "✔" : "✘",
        }),
        createElement("h3", { className: "review__title", text: `${entry.number}. ${entry.text}` }),
      ]),
      createElement("ul", { className: "review__options" }, options),
    ]);
  }

  return {
    render(result) {
      elements.candidate.textContent = result.candidate;
      elements.exam.textContent = result.examTitle;
      elements.score.textContent = `${result.correctCount} de ${result.total}`;
      elements.percent.textContent = `${result.percent}%`;
      elements.status.textContent = result.passed ? "APROBADO" : "NO APROBADO";
      elements.threshold.textContent = `Mínimo para aprobar: ${PASSING_PERCENT}%`;

      elements.card.classList.toggle("is-pass", result.passed);
      elements.card.classList.toggle("is-fail", !result.passed);

      clear(elements.review);
      elements.review.append(...result.review.map(buildReviewEntry));
    },
  };
}
