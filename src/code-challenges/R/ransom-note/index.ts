export function checkMagazine(magazine: string[], note: string[]): boolean {
  const map: {[key: string]: number} = {};
  for (let i = 0; i < magazine.length; i++) {
    map[magazine[i]] = -~map[magazine[i]];
  }
  for (let i = 0; i < note.length; i++) {
    if (!map[note[i]]) {
      console.log('No');
      return false;
    }
    map[note[i]]--;
  }
  console.log('Yes');
  return true;
}
