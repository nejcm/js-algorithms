export function fileNaming(names: string[]): string[] {
  const map: {[key: string]: number} = {};
  return names.map((name) => {
    let newName = name;
    while (map[newName]) {
      newName = `${name}(${map[name]++})`;
    }
    map[newName] = 1;
    return newName;
  });
}

export function fileNamingV2(names: string[]): string[] {
  const newArr = [];
  for (let i = 0; i < names.length; i++) {
    let count = 0;
    const tmp = names[i];
    while (newArr.indexOf(names[i]) > -1) {
      count++;
      names[i] = `${tmp}(${count})`;
    }
    newArr.push(names[i]);
  }
  return newArr;
}
