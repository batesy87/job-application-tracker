export function add(numbers: string): number {
  return numbers.split(/[,\n]/).reduce(
    (acc, cur) => acc + Number(cur),
    0,
  );
}
