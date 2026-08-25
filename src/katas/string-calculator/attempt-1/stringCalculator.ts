const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** A leading "//<header>\n" declares the delimiters; everything after is the body. */
const DECLARATION = /^\/\/([^\n]*)\n([\s\S]*)$/;

const DEFAULT_DELIMITERS = [","];

/**
 * "[*][%]" -> ["*", "%"]
 * "[***]"  -> ["***"]
 * ";"      -> [";"]        (shorthand: an unbracketed header is the delimiter)
 */
function parseDelimiters(header: string): string[] {
  if (!header.startsWith("[")) return [header];
  return [...header.matchAll(/\[([^\]]*)\]/g)].flatMap((match) => match[1] ?? []);
}

function splitterFor(delimiters: string[]): RegExp {
  return new RegExp([...delimiters.map(escapeRegExp), "\\n"].join("|"));
}

export function add(input: string): number {
  const declaration = input.match(DECLARATION);
  const delimiters = declaration ? parseDelimiters(declaration[1] ?? "") : DEFAULT_DELIMITERS;
  const body = declaration ? declaration[2] ?? "" : input;

  const values = body.split(splitterFor(delimiters)).map(Number);

  const negatives = values.filter((value) => value < 0);
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return values
    .filter((value) => value <= 1000)
    .reduce((total, value) => total + value, 0);
}
