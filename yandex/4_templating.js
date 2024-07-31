function solution(root) {
	if (!root.childElementCount) {
		return;
	}
	const operations = {
		copy: [],
		remove: [],
		removeChildren: [],
	};
	for (const child of root.children) {
		const attr = child.getAttribute("x-make");
		if (!attr) {
			continue;
		}
		if (attr.startsWith("switch")) {
			continue;
		}
		child.removeAttribute("x-make");
		const [operation, n] = attr.split(":");
		operations[operation].push([child, +n]);
	}
	operations.copy.forEach(([elem, n]) => {
		while (n > 0) {
			elem.after(elem.cloneNode(true));
			n--;
		}
	});
	operations.remove.forEach(([elem, n]) => {
		let next = elem.nextElementSibling;
		while (n > 0 && next) {
			next.remove();
			next = next.nextElementSibling;
			n--;
		}
	});
	operations.removeChildren.forEach(([elem, n]) => {
		[...elem.children].slice(0, n).forEach((e) => e.remove());
	});

	let elem = root.firstElementChild;
	while (elem) {
		const attr = elem.getAttribute("x-make");
		if (attr) {
			elem.removeAttribute("x-make");
			const n = +attr.slice(7);
			const index = [...root.children].indexOf(elem);
			const elemToSwitchWith =
				root.children[
					((n % root.children.length) + index) % root.children.length
				];
			const prevElemToSwitch =
				elemToSwitchWith.previousElementSibling === elem
					? elemToSwitchWith
					: elemToSwitchWith.previousElementSibling;
			elem.after(elemToSwitchWith);
			prevElemToSwitch.after(elem);
			elem = elemToSwitchWith;
		} else {
			elem = elem.nextElementSibling;
		}
	}

	for (const child of root.children) {
		solution(child);
	}
}

solution(document.getElementById("root"));
