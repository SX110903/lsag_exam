/** Pantalla de revisión: resumen y detalle pregunta por pregunta. */

import { OPTION_LABELS } from "../core/config.js";
import { byId, clear, createElement } from "./dom.js";

function buildSummary(result) {
  const items = [
    { value: result.correctCount, label: "Correctas", tone: "green" },
    { value: result.wrongCount, label: "Incorrectas", tone: "red" },
    { value: result.unansweredCount, label: "Sin responder", tone: "gray" },
  ];

  return items.map((item) =>
    createElement("div", { className: "rs-item" }, [
      createElement("div", { className: `rs-val ${item.tone}`, text: String(item.value) }),
      createElement("div", { className: "rs-lbl", text: item.label }),
    ]),
  );
}

function buildBadge(entry) {
  if (!entry.isAnswered) {
    return createElement("span", { className: "review-q-badge badge-skip", text: "Sin responder" });
  }
  return entry.isCorrect
    ? createElement("span", { className: "review-q-badge badge-ok", text: "Correcta" })
    : createElement("span", { className: "review-q-badge badge-wrong", text: "Incorrecta" });
}

function buildOption(option, optionIndex, entry) {
  const element = createElement("div", { className: "review-opt" }, [
    createElement("span", { className: "r-letter", text: OPTION_LABELS[optionIndex] }),
    createElement("span", { text: option.text }),
  ]);

  // Se resalta siempre la correcta, y se tacha la marcada cuando fue errónea.
  if (optionIndex === entry.correctIndex) {
    element.classList.add("is-correct");
  } else if (optionIndex === entry.selectedIndex) {
    element.classList.add("is-wrong");
  }

  return element;
}

function buildCard(entry) {
  const card = createElement("div", { className: "review-card" }, [
    createElement("div", { className: "review-q-head" }, [
      createElement("span", { className: "review-q-num", text: `Pregunta ${entry.number}` }),
      buildBadge(entry),
    ]),
    createElement("div", { className: "review-q-text", text: entry.text }),
    ...entry.options.map((option, optionIndex) => buildOption(option, optionIndex, entry)),
  ]);

  card.classList.add(entry.isCorrect ? "correct-card" : "wrong-card");
  return card;
}

export function createReviewView() {
  const elements = {
    summary: byId("reviewSummary"),
    list: byId("reviewList"),
  };

  return {
    render(result) {
      clear(elements.summary);
      elements.summary.append(...buildSummary(result));

      clear(elements.list);
      elements.list.append(...result.review.map(buildCard));
    },
  };
}
