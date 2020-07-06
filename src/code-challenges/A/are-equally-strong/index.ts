export function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number,
): boolean {
  const your = [yourLeft, yourRight].sort((a, b) => a - b);
  const friend = [friendsLeft, friendsRight].sort((a, b) => a - b);
  return your[0] === friend[0] && your[1] === friend[1];
}

export function areEquallyStrongV2(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number,
): boolean {
  return (
    yourLeft + yourRight === friendsLeft + friendsRight &&
    (yourLeft === friendsLeft || yourLeft === friendsRight)
  );
}

export function areEquallyStrongV3(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number,
): boolean {
  const me = [yourLeft, yourRight].sort().join('');
  const friend = [friendsLeft, friendsRight].sort().join('');
  return me === friend;
}
