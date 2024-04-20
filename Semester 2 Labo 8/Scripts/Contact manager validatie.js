// Validatiefuncties
const valideer = () => {
    valideerVoornaam();
    valideerFamilienaam();
    valideerGeboorteDatum();
    valideerEmail();
    valideerAantalKinderen();
};

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let voornaam = txtVoornaam.value.trim();
    if (voornaam.length > 30) {
        reportError(txtVoornaam, "max. 30 karakters");
        console.log("Voornaam te lang");
    } else {
        clearError(txtVoornaam);
        console.log("Voornaam is geldig");
    }
};

const valideerFamilienaam = () => {
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let familienaam = txtFamilienaam.value.trim();
    if (familienaam.length === 0) {
        reportError(txtFamilienaam, "verplicht veld");
        console.log("Familienaam is verplicht");
    } else if (familienaam.length > 50) {
        reportError(txtFamilienaam, "max. 50 karakters");
        console.log("Familienaam te lang");
    } else {
        clearError(txtFamilienaam);
        console.log("Familienaam is geldig");
    }
};

const valideerGeboorteDatum = () => {
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    let geboorteDatum = txtGeboorteDatum.value.trim();
    // correcte lengte?
    if (geboorteDatum.length!==10) {
        reportError(txtGeboorteDatum, "verplicht veld");
        console.log("Geboortedatum vereist");
    } else {
        let formatCorrect=true;
        // streepjes op juiste plaats?
        if (formatCorrect && !(geboorteDatum.charAt(4)=='-' && geboorteDatum.charAt(7)=='-') ) {
            formatCorrect=false;
        }
        // jaar gedeelte een getal?
        if (formatCorrect) {
            // year
            let yearText=geboorteDatum.substring(0,4);
            if (!isPositiveNonZeroNumber(yearText)) {
                formatCorrect=false;
            }
        }
        // maand gedeelte een getal?
        if (formatCorrect) {
            // month
            let monthText=geboorteDatum.substring(5,7);
            if (!isPositiveNonZeroNumber(monthText)) {
                formatCorrect=false;
            }
        }
        // dag gedeelte een getal?
        if (formatCorrect) {
            // day
            let dayText=geboorteDatum.substring(8,11);
            if (!isPositiveNonZeroNumber(dayText)) {
                formatCorrect=false;
            }
        }

        if (formatCorrect) {
            clearError(txtGeboorteDatum);
            console.log("Geboortedatum is geldig");
        } else {
            reportError(txtGeboorteDatum, "formaat is niet jjjj-mm-dd");
            console.log("Ongeldige geboortedatum formaat");
        }
    }
};

const valideerEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let email = txtEmail.value.trim();
    if (email.length===0) {
        reportError(txtEmail, "verplicht veld");
        console.log("E-mailadres vereist");
    } else {
        let formatCorrect=true;
        let idx=email.indexOf("@");

        if (idx<1 || idx==email.length-1) {
            // @ teken komt niet voor, of helemaal vooraan of helemaal achteraan de tekst
            formatCorrect=false;
        }
        idx=email.indexOf("@", idx+1);
        if (formatCorrect && idx!==-1) {
            // @-teken komt meermaals voor
            formatCorrect=false;
        }
        if (formatCorrect) {
            clearError(txtEmail);
            console.log("E-mailadres is geldig");
        } else {
            reportError(txtEmail, "geen geldig email adres");
            console.log("Ongeldig e-mailadres");
        }
    }
};

const valideerAantalKinderen = () => {
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    let aantalKinderenText = txtAantalKinderen.value.trim();
    if (aantalKinderenText.length===0) {
        reportError(txtAantalKinderen, "verplicht veld");
        console.log("Aantal kinderen vereist");
    } else if (!isPositiveNumber(aantalKinderenText)) {
        reportError(txtAantalKinderen, "is geen positief getal");
        console.log("Ongeldig aantal kinderen");
    } else {
        let aantal=parseInt(aantalKinderenText);
        if (aantal>=99) {
            reportError(txtAantalKinderen, "te vruchtbaar");
            console.log("Te veel kinderen");
        } else {
            clearError(txtAantalKinderen);
            console.log("Aantal kinderen is geldig");
        }
    }
};

const isPositiveNumber = (text) => {
    let number = parseInt(text, 10);
    return !isNaN(number) && number >= 0;
};

const isPositiveNonZeroNumber = (text) => {
    let number = parseInt(text, 10);
    return !isNaN(number) && number > 0;
};

// Rapporteer fouten en wis fouten
const reportError = (element, message) => {
    let elementId = element.getAttribute("id");
    let errElementId = "err" + elementId.substring(3);
    let errElement = document.getElementById(errElementId);
    element.className = "invalid";
    errElement.innerHTML = message;
};

const clearError = (element) => {
    let elementId = element.getAttribute("id");
    let errElementId = "err" + elementId.substring(3);
    let errElement = document.getElementById(errElementId);
    element.className = "";
    errElement.innerHTML = "";
};

const clearAllErrors = () => {
    let fieldIds = ["txtVoornaam", "txtFamilienaam", "txtGeboorteDatum", "txtEmail", "txtAantalKinderen"];
    fieldIds.forEach(id => clearError(document.getElementById(id)));
};
