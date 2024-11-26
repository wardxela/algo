import path from "path";
import { fileURLToPath } from "url";
import fs from "fs/promises";
import { expect, test } from "vitest";
import { solution } from "./a";

test("Binary Diagnostic A Input Easy", async () => {
  const inputPath = path.resolve(
    fileURLToPath(import.meta.url),
    "../input-easy.txt",
  );
  const inputText = (await fs.readFile(inputPath)).toString();
  expect(solution(inputText)).toBe(198);
});

test("Binary Diagnostic A Input Hard", async () => {
  const inputPath = path.resolve(
    fileURLToPath(import.meta.url),
    "../input-hard.txt",
  );
  const inputText = (await fs.readFile(inputPath)).toString();
  expect(solution(inputText)).toBe(741950);
});
