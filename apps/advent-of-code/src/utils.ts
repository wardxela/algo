import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export async function getPuzzleInput(url: string) {
  const puzzleInputPath = path.resolve(fileURLToPath(url), "../input.txt");
  const file = await readFile(puzzleInputPath);
  return file.toString();
}
