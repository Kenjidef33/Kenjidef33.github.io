let personen = [];

// Valideer de ingevoerde gegevens
const valideer = () => {
    // Implementeer validatielogica hier
    // Return true als de validatie slaagt, anders false
    return true; // Placeholder returnwaarde, vervang dit met de werkelijke validatielogica
};

// Event listener (btnBewaar click)
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // Valideer alle input data en controleer of er geen errors meer zijn
    const isValid = valideer();

    if (isValid) {
        // Haal de ingevoerde gegevens op
        const voornaam = document.getElementById("txtVoornaam").value;
        const familienaam = document.getElementById("txtFamilienaam").value;
        const geboorteDatum = document.getElementById("txtGeboorteDatum").value;
        const email = document.getElementById("txtEmail").value;
        const aantalKinderen = document.getElementById("txtAantalKinderen").value;

        // Maak een persoon object
        const persoon = {
            voornaam: voornaam,
            familienaam: familienaam,
            geboorteDatum: geboorteDatum,
            email: email,
            aantalKinderen: aantalKinderen
        };

        // Haal de geselecteerde index op uit de lijst van personen
        const selectedIndex = document.getElementById("lstPersonen").value;

        if (selectedIndex !== "") {
            // Pas de gegevens van de bestaande persoon aan
            personen[selectedIndex] = persoon;
        } else {
            // Voeg een nieuwe persoon toe aan de lijst
            personen.push(persoon);
            // Voeg een nieuwe optie toe aan de selectielijst
            const lstPersonen = document.getElementById("lstPersonen");
            const option = document.createElement("option");
            option.text = `${persoon.voornaam} ${persoon.familienaam}`;
            option.value = personen.length - 1;
            lstPersonen.add(option);
        }

        // Optioneel: Wis het formulier na het opslaan
        document.getElementById("txtVoornaam").value = "";
        document.getElementById("txtFamilienaam").value = "";
        document.getElementById("txtGeboorteDatum").value = "";
        document.getElementById("txtEmail").value = "";
        document.getElementById("txtAantalKinderen").value = "";
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Maak het formulier leeg
    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";
};

// Onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // Voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
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
};

window.addEventListener("load", setup);
