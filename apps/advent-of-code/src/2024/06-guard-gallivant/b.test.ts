import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { expect, test } from "vitest";
import { solution } from "./b";

test("Guard Gallivant B Input Easy", async () => {
  const inputPath = path.resolve(
    fileURLToPath(import.meta.url),
    "../input-easy.txt",
  );
  const inputText = (await fs.readFile(inputPath)).toString();
  expect(solution(inputText)).toBe(6);
});

test("Guard Gallivant B Input Hard", async () => {
  const inputPath = path.resolve(
    fileURLToPath(import.meta.url),
    "../input-hard.txt",
  );
  const inputText = (await fs.readFile(inputPath)).toString();
  expect(solution(inputText)).toBe(1888);
});
