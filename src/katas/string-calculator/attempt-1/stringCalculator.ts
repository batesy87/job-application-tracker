export function add(numbers: string): number {
  const parsed = numbers.match(/\/\/(.)\n(.*)/)
  const delimiter = parsed ? parsed[1] : ",\n"
  const str = parsed ? parsed[2] : numbers

  const values = str.split(new RegExp(`[${delimiter}\n]`)).map(Number);

  const negatives = values.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return values.reduce((acc, cur) => acc + cur, 0);
}
