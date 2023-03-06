const panel = document.getElementById("panel");

for (let i = 0; i < 6; i++) {
	const item = document.createElement("div");
	item.classList.add("empty");
	item.classList.add(i.toString());
	panel.append(item);
}
