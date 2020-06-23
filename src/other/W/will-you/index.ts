export function willYou(
  young: boolean,
  beautiful: boolean,
  loved: boolean,
): boolean {
  if (young && beautiful && !loved) return true;
  if (loved && (!young || !beautiful)) return true;
  return false;
}
