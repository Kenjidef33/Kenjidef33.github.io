const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    sliders[0].addEventListener("change", update);
    sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("change", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("change", update);
    sliders[2].addEventListener("input", update);

    document.getElementById("saveButton").addEventListener("click", saveColor);

    restoreSavedColors();
    restoreSliderSettings();
}

const update = () => {
    let colorDemo = document.querySelector(".colorDemo");
    let sliders = document.getElementsByClassName("slider");
    let rood = sliders[0].value;
    let groen = sliders[1].value;
    let blauw = sliders[2].value;
    let kleur = 'rgb(' + rood + ',' + groen + ',' + blauw + ')';
    colorDemo.style.backgroundColor = kleur;
    colorDemo.dataset.color = kleur;

    saveSliderSettings(rood, groen, blauw);

}

const saveColor = () => {
    let colorDemo = document.querySelector(".colorDemo");
    let savedColorsContainer = document.getElementById("swatches");
    let kleur = colorDemo.dataset.color;

    let swatch = document.createElement("div");
    swatch.classList.add("swatch");
    swatch.style.backgroundColor = kleur;

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", function() {
        savedColorsContainer.removeChild(swatch);
        removeSavedColor(kleur);
    });

    swatch.appendChild(deleteButton);
    savedColorsContainer.appendChild(swatch);

    saveColorToStorage(kleur);
}

const restoreSavedColors = () => {
    let savedColors = JSON.parse(localStorage.getItem("savedColors")) || [];
    let savedColorsContainer = document.getElementById("swatches");

    savedColors.forEach(color => {
        let swatch = document.createElement("div");
        swatch.classList.add("swatch");
        swatch.style.backgroundColor = color;

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "X";
        deleteButton.classList.add("deleteButton");
        deleteButton.addEventListener("click", function() {
            savedColorsContainer.removeChild(swatch);
            removeSavedColor(color);
        });

        swatch.appendChild(deleteButton);
        savedColorsContainer.appendChild(swatch);
    });
}

const saveColorToStorage = (color) => {
    let savedColors = JSON.parse(localStorage.getItem("savedColors")) || [];
    savedColors.push(color);
    localStorage.setItem("savedColors", JSON.stringify(savedColors));
}

const removeSavedColor = (color) => {
    let savedColors = JSON.parse(localStorage.getItem("savedColors")) || [];
    let index = savedColors.indexOf(color);
    if (index !== -1) {
        savedColors.splice(index, 1);
        localStorage.setItem("savedColors", JSON.stringify(savedColors));
    }
}

const saveSliderSettings = (red, green, blue) => {
    localStorage.setItem("sliderSettings", JSON.stringify({ red, green, blue }));
}

const restoreSliderSettings = () =>  {

    let sliderSettings = JSON.parse(localStorage.getItem("sliderSettings"));
    if (sliderSettings)  {
        let sliders = document.getElementsByClassName("slider");
        sliders[0].value = sliderSettings.red;
        sliders[1].value = sliderSettings.green;
        sliders[2].value = sliderSettings.blue;
        update();
    }
}

window.onload = setup;