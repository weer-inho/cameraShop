export function getRandomPositiveInteger ():number {
  const lower = Math.ceil(Math.min(Math.abs(0), Math.abs(1000)));
  const upper = Math.floor(Math.max(Math.abs(0), Math.abs(1000)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
