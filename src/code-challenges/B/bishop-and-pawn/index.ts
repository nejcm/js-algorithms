export function bishopAndPawn(bishop: string, pawn: string): boolean {
  return (
    Math.abs(Number(bishop[1]) - Number(pawn[1])) ===
    Math.abs(bishop.charCodeAt(0) - pawn.charCodeAt(0))
  );
}
