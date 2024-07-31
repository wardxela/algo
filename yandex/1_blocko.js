/**
 *
 * @param {{id: number; form: number[][];}[]} blocks
 */
module.exports = function layout(blocks) {
	const history = {};
	let result = [];
	let currentCeil = [[]];
	let currentPosition = 1;

	for (let i = 1; i <= blocks.length; i++) {
		history[i] = [];
	}

	for (let i = 0; i < blocks[0].form[0].length; i++) {
		currentCeil[0].push(0);
	}

	startPoint: while (true) {
		if (result.length === blocks.length) {
			return result;
		}
		for (const block of blocks) {
			if (!!result.find((v) => v.blockId === block.id)) {
				continue;
			}
			if (history[currentPosition].includes(block.id)) {
				continue;
			}
			if (compareBottomsOfMatrixes(block.form, currentCeil)) {
				history[currentPosition].push(block.id);
				result.push({
					blockId: block.id,
					position: currentPosition,
					isRotated: false,
				});
				currentPosition++;
				currentCeil = getWithZeros(block.form);
				continue startPoint;
			} else if (
				compareBottomsOfMatrixes(rotateTo180(block.form), currentCeil)
			) {
				history[currentPosition].push(block.id);
				result.push({
					blockId: block.id,
					position: currentPosition,
					isRotated: true,
				});
				currentPosition++;
				currentCeil = getWithZeros(rotateTo180(block.form));
				continue startPoint;
			}
		}
		if (currentPosition === 1) {
			if (history[1].length === blocks.length) {
				return result;
			} else {
				continue;
			}
		}
		result = result.slice(0, result.length - 1);
		currentPosition--;
	}
	return result;
};

function compareBottomsOfMatrixes(m1, m2) {
	const minRowLength = Math.min(m1.length, m2.length);
	for (let r = 0; r < minRowLength; r++) {
		if (
			!m1[m1.length - 1 - r].every((v, i) => v + m2[m2.length - 1 - r][i] === 1)
		) {
			return false;
		}
	}

	return true;
}

function rotateTo180(m) {
	const nM = [];
	for (let r = m.length - 1; r >= 0; r--) {
		const row = [];
		nM.push(row);
		for (let c = m[0].length - 1; c >= 0; c--) {
			row.push(m[r][c]);
		}
	}
	return nM;
}

function getWithZeros(m) {
	const result = [];
	for (const row of m) {
		if (row.some((v) => v === 0)) {
			result.push(row);
		} else {
			break;
		}
	}
	return result;
}
