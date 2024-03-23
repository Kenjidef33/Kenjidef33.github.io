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
    let colorDemo = document.querySelector(".colorDemo");
    let sliders = document.getElementsByClassName("slider");
    let rood = sliders[0].value;
    let groen = sliders[1].value;
    let blauw = sliders[2].value;
    let kleur = 'rgb(' + rood + ',' + groen + ',' + blauw + ')';
    colorDemo.style.backgroundColor = kleur;
    colorDemo.dataset.color = kleur; // Sla de kleur op in het dataset attribuut
}

const saveColor = () => {
    let colorDemo = document.querySelector(".colorDemo");
    let savedColorsContainer = document.getElementById("swatches");
    let kleur = colorDemo.dataset.color;

    // Maak een nieuwe swatch
    let swatch = document.createElement("div");
    swatch.classList.add("swatch");
    swatch.style.backgroundColor = kleur; // Stel de achtergrondkleur in

    // Maak een delete knop voor de swatch
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", function() {
        savedColorsContainer.removeChild(swatch); // Verwijder de swatch bij klikken op delete
    });

    swatch.appendChild(deleteButton); // Voeg delete knop toe aan de swatch
    savedColorsContainer.appendChild(swatch); // Voeg swatch toe aan de container voor opgeslagen kleuren

    // Event listener toevoegen aan de nieuwe swatch om de kleur in te stellen op de colorpicker component
    swatch.addEventListener("click", function() {
        let sliders = document.getElementsByClassName("slider");
        sliders[0].value = parseInt(kleur.substring(4, kleur.indexOf(',')));
        sliders[1].value = parseInt(kleur.substring(kleur.indexOf(',') + 1, kleur.lastIndexOf(',')));
        sliders[2].value = parseInt(kleur.substring(kleur.lastIndexOf(',') + 1, kleur.indexOf(')')));
        update(); // Update de kleur van colorDemo
    });
}

window.onload = setup;
