import { expect, test } from "vitest";
import path from "path";
import { fileURLToPath } from "url";
import fs from 'fs/promises'
import { solution } from "./b";

test("Dive! B Input Easy", async () => {
	const inputPath = path.resolve(fileURLToPath(import.meta.url), "../input-easy.txt")
	const inputText = (await fs.readFile(inputPath)).toString()
	expect(solution(inputText)).toBe(900);
});

test("Dive! B Input Hard", async () => {
	const inputPath = path.resolve(fileURLToPath(import.meta.url), "../input-hard.txt")
	const inputText = (await fs.readFile(inputPath)).toString()
	expect(solution(inputText)).toBe(1956047400);
});