export function add(numbers: string): number {
  const parsed = numbers.match(/\/\/(.)\n(.*)/)
  const delimiter = parsed ? parsed[1] : ",\n"
  const str = parsed ? parsed[2] : numbers

  return str.split(new RegExp(`[${delimiter}\n]`)).reduce(
    (acc, cur) => acc + Number(cur),
    0,
  );
}
