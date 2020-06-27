export function isUnstablePair(filename1: string, filename2: string): boolean {
  return (
    filename1 < filename2 !== filename1.toLowerCase() < filename2.toLowerCase()
  );
}
