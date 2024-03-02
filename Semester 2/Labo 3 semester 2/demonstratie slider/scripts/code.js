const setup = () => {
	let sliders = document.getElementsByClassName("slider");

	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	sliders[0].addEventListener("change", update);
	sliders[0].addEventListener("input", update);
	sliders[1].addEventListener("change", update);
	sliders[1].addEventListener("input", update);
	sliders[2].addEventListener("change", update);
	sliders[2].addEventListener("input", update);

}

const update = () => {
	let colorDemos=document.getElementsByClassName("colorDemo");
	let sliders = document.getElementsByClassName("slider");
	let rood=sliders[0].value;
	let groen=sliders[1].value;
	let blauw=sliders[2].value;
	colorDemos[0].style.backgroundColor =  'rgb(' + rood + ',' + groen + ',' + blauw + ')';

}

// dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);