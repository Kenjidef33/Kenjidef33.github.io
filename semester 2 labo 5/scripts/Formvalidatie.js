const isGetal = (tekst) => {
    return !isNaN(tekst);
};

const validateForm = () => {
    const voornaam = document.getElementById('voornaam');
    const familienaam = document.getElementById('familienaam');
    const geboortedatum = document.getElementById('geboortedatum');
    const email = document.getElementById('email');
    const aantalKinderen = document.getElementById('aantalKinderen');

    let isValid = true;

    if (voornaam.value.length > 30) {
        document.getElementById('voornaamError').textContent = 'max. 30 karakters';
        isValid = false;
    } else {
        document.getElementById('voornaamError').textContent = '';
    }

    if (familienaam.value.trim() === '') {
        document.getElementById('familienaamError').textContent = 'verplicht veld';
        isValid = false;
    } else if (familienaam.value.length > 50) {
        document.getElementById('familienaamError').textContent = 'max 50 karakters';
        isValid = false;
    } else {
        document.getElementById('familienaamError').textContent = '';
    }

    const geboortedatumPattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!geboortedatum.value.match(geboortedatumPattern)) {
        document.getElementById('geboortedatumError').textContent = 'formaat is niet jjjj-mm-dd';
        isValid = false;
    } else {
        document.getElementById('geboortedatumError').textContent = '';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.match(emailPattern)) {
        document.getElementById('emailError').textContent = 'geen geldig email adres';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (!isGetal(aantalKinderen.value) || aantalKinderen.value <= 0) {
        document.getElementById('aantalKinderenError').textContent = 'is geen positief getal';
        isValid = false;
    } else if (aantalKinderen.value >= 99) {
        document.getElementById('aantalKinderenError').textContent = 'is te vruchtbaar';
        isValid = false;
    } else {
        document.getElementById('aantalKinderenError').textContent = '';
    }

    return isValid;
};

const setup = () => {
    const valideerButton = document.getElementById('valideerButton');
    valideerButton.addEventListener('click', () => {
        const isValid = validateForm();
        if (isValid) {
            alert('Proficiat!');
        }
    });
};

setup();