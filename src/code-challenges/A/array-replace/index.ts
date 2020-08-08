export function arrayReplace(
  inputArray: unknown[],
  elemToReplace: unknown,
  substitutionElem: unknown,
): unknown[] {
  return inputArray.map((curr) => (curr === elemToReplace ? substitutionElem : curr));
}
