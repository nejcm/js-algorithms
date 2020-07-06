export function variableName(name: string): boolean {
  return /^[a-z_][a-z_0-9]*$/i.test(name);
}
