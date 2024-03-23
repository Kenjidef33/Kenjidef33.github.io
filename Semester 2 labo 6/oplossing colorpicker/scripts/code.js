const setup = () => {
	let sliders = document.getElementsByClassName("slider");

	sliders[0].addEventListener("change", update);
	sliders[0].addEventListener("input", update);
	sliders[1].addEventListener("change", update);
	sliders[1].addEventListener("input", update);
	sliders[2].addEventListener("change", update);
	sliders[2].addEventListener("input", update);

	document.getElementById("saveButton").addEventListener("click", saveColor);
}

const update = () => {
	let colorDemos = document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let rood = sliders[0].value;
	let groen = sliders[1].value;
	let blauw = sliders[2].value;
	colorDemos[0].style.backgroundColor = 'rgb(' + rood + ',' + groen + ',' + blauw + ')';
}

const saveColor = () => {
	let colorDemos = document.getElementsByClassName("colorDemo");
	let savedColorsSection = document.getElementById("savedColors");

	let colorClone = colorDemos[0].cloneNode(true);

	let deleteButton = document.createElement("button");
	deleteButton.innerText = "X";
	deleteButton.classList.add("deleteButton");
	deleteButton.addEventListener("click", () => {
		savedColorsSection.removeChild(colorClone);
	});
	colorClone.appendChild(deleteButton);

	colorClone.style.borderRadius = "0";

	savedColorsSection.appendChild(colorClone);

	colorClone.addEventListener("click", () => {
		let rgbColor = colorClone.style.backgroundColor.match(/\d+/g);
		sliders[0].value = parseInt(rgbColor[0]);
		sliders[1].value = parseInt(rgbColor[1]);
		sliders[2].value = parseInt(rgbColor[2]);
		update();
	});
}

window.onload = setup;