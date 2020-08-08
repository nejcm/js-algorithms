export function chessBoardCellColor(cell1: string, cell2: string): boolean {
  const isDark = (cell: string) => {
    return cell[0].charCodeAt(0) % 2 === parseInt(cell[1], 10) % 2;
  };
  return isDark(cell1) === isDark(cell2);
}

export function chessBoardCellColorV2(cell1: string, cell2: string): boolean {
  return (
    (cell1.charCodeAt(0) + Number(cell1[1]) + cell2.charCodeAt(0) + Number(cell2[1])) %
      2 ==
    0
  );
}
