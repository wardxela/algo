import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { expect, test } from "vitest";
import { solution } from "./a";

test("Dive! A Input Easy", async () => {
  const inputPath = path.resolve(
    fileURLToPath(import.meta.url),
    "../input-easy.txt",
  );
  const inputText = (await fs.readFile(inputPath)).toString();
  expect(solution(inputText)).toBe(150);
});

test("Dive! A Input Hard", async () => {
  const inputPath = path.resolve(
    fileURLToPath(import.meta.url),
    "../input-hard.txt",
  );
  const inputText = (await fs.readFile(inputPath)).toString();
  expect(solution(inputText)).toBe(1654760);
});
