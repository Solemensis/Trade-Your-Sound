const categories = [
  "sound-effects",
  "environmental-sounds",
  "ui-sounds",
  "foley-sounds",
  "dialogue",
  "soundscapes"
];
const prices = [
  "0-3",
  "4-10",
  "11-20",
  "21>"
];
const processing = [
  "raw",
  "edited",
  "mastered"
];
function useCategories() {
  return {
    categories,
    prices,
    processing
  };
}

export { useCategories as u };
//# sourceMappingURL=useCategories-CLjNoZHS.mjs.map
