/** Utilidades de aleatorización. */

/** Devuelve un elemento al azar del arreglo. */
export function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

/** Devuelve una copia barajada del arreglo (Fisher-Yates). */
export function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}
