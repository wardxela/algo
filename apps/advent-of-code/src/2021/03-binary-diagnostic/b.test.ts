import { expect, test } from "vitest";
import path from "path";
import { fileURLToPath } from "url";
import fs from 'fs/promises'
import { solution } from "./b";

test("Binary Diagnostic B Input Easy", async () => {
	const inputPath = path.resolve(fileURLToPath(import.meta.url), "../input-easy.txt")
	const inputText = (await fs.readFile(inputPath)).toString()
	expect(solution(inputText)).toBe(230);
});

test("Binary Diagnostic B Input Hard", async () => {
	const inputPath = path.resolve(fileURLToPath(import.meta.url), "../input-hard.txt")
	const inputText = (await fs.readFile(inputPath)).toString()
	expect(solution(inputText)).toBe(903810);
});