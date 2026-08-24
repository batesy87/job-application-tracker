export function add(numbers: string): number {
  return numbers.split(",").reduce(
    (acc, cur) => acc + Number(cur),
    0,
  );
}
