const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

export function add(numbers: string): number {
  const parsed = numbers.replace(/\/\/([^[])/, "//[$1]").match(/^\/\/\[(.*)\]\n(.*)$/);
  const delimiter = parsed ? parsed[1] : ",";
  const str = parsed ? parsed[2] : numbers;

  const values = str.split(new RegExp(`${escapeRegExp(delimiter)}|\n`)).map(Number);

  const negatives = values.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  const filteredValues = values.filter((num) => num <= 1000);

  return filteredValues.reduce((acc, cur) => acc + cur, 0);
}
