export function getStoneImage(stoneIndex) {
  return new URL(`../assets/images/stone${stoneIndex + 1}.png`, import.meta.url).href;
}