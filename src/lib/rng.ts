/** mulberry32 — 給「重骰」用的可重現亂數。 */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Gumbel-perturbed score:同輸入不同 seed 出不同但仍偏向高分的排序。 */
export function gumbelScore(base: number, rnd: () => number, temperature = 0.6): number {
  const u = Math.max(rnd(), 1e-9);
  return base + temperature * -Math.log(-Math.log(u));
}

export function shuffled<T>(arr: T[], rnd: () => number): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
