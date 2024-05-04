let personen = [];

const valideer = () => {
    return true;
};

const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    const isValid = valideer();

    if (isValid) {
        // Haal de ingevoerde gegevens op
        const voornaam = document.getElementById("txtVoornaam").value;
        const familienaam = document.getElementById("txtFamilienaam").value;
        const geboorteDatum = document.getElementById("txtGeboorteDatum").value;
        const email = document.getElementById("txtEmail").value;
        const aantalKinderen = document.getElementById("txtAantalKinderen").value;

        const persoon = {
            voornaam: voornaam,
            familienaam: familienaam,
            geboorteDatum: geboorteDatum,
            email: email,
            aantalKinderen: aantalKinderen
        };

        const selectedIndex = document.getElementById("lstPersonen").value;

        if (selectedIndex !== "") {
            personen[selectedIndex] = persoon;
        } else {
            personen.push(persoon);
            const lstPersonen = document.getElementById("lstPersonen");
            const option = document.createElement("option");
            option.text = `${persoon.voornaam} ${persoon.familienaam}`;
            option.value = personen.length - 1;
            lstPersonen.add(option);
        }

        document.getElementById("txtVoornaam").value = "";
        document.getElementById("txtFamilienaam").value = "";
        document.getElementById("txtGeboorteDatum").value = "";
        document.getElementById("txtEmail").value = "";
        document.getElementById("txtAantalKinderen").value = "";
    }
};

const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Maak het formulier leeg
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
};

const deletePersoon = (selectedIndex) => {
    // Verwijder de geselecteerde persoon uit de array
    personen.splice(selectedIndex, 1);

    // Verwijder de optie uit de lijst
    const lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.remove(selectedIndex);

    // Leeg het formulier
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
};

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", (event) => {
        const selectedIndex = event.target.value;
        if (selectedIndex !== "") {
            const selectedPerson = personen[selectedIndex];
            document.getElementById("txtVoornaam").value = selectedPerson.voornaam;
            document.getElementById("txtFamilienaam").value = selectedPerson.familienaam;
            document.getElementById("txtGeboorteDatum").value = selectedPerson.geboorteDatum;
            document.getElementById("txtEmail").value = selectedPerson.email;
            document.getElementById("txtAantalKinderen").value = selectedPerson.aantalKinderen;
        }
    });

    // Voeg event listeners toe aan elke optie in de lijst
    const options = lstPersonen.getElementsByTagName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener("click", () => {
            deletePersoon(i);
        });
    }
};

window.addEventListener("load", setup);