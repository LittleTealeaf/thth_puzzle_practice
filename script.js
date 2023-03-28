const BODY = document.body;

function generatePuzzle() {
	return [0, 0, 0, 0, 0, 0].map((_) => Math.floor(Math.random() * 4));
}

function is_right() {
	return BODY.dataset.side == "right";
}

function cycleLight(index) {
	const element = document.querySelector(`.light:nth-child(${index})`);
	element.dataset.value = (parseInt(element.dataset.value) + 1) | 0;
}

function pullLever(index) {
	if (is_right()) {

	} else {

	}
}

{
	const levers = document.querySelector(".levers");
	var index = 0;
	for (let i = 0; i < 3; i++) {
		const group = document.createElement("div");
		group.classList.add("group");

		for (let j = 0; j < 2; j++) {
			const lever = document.createElement("div");
			lever.classList.add("lever");
			const ind = index++;
			lever.addEventListener("click", () => pullLever(ind));
			group.append(lever);
		}

		levers.append(group);
	}
}
