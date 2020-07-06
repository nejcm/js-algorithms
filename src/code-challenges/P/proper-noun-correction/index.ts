export function properNounCorrection(noun: string): string {
  return noun.charAt(0).toUpperCase() + noun.slice(1).toLowerCase();
}

export function properNounCorrectionV2([first, ...rest]: string): string {
  return first.toUpperCase() + rest.join('').toLowerCase();
}
