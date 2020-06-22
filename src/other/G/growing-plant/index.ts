export function growingPlant(
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number,
): number {
  return upSpeed > desiredHeight
    ? 1
    : Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
}

export function growingPlantV2(
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number,
): number {
  let curr = 0;
  let year = 0;
  while (curr < desiredHeight) {
    curr += upSpeed;
    year++;
    if (curr >= desiredHeight) {
      break;
    }
    curr -= downSpeed;
  }
  return year;
}
