// Alert pop-up
alert("Dit is een voorbeeld van een alert pop-up!");

// Confirm pop-up
let confirmResult = confirm("Een voorbeeld van een confirm pop-up. Klik op 'OK' of 'Cancel'.");
console.log("Return waarde van confirm pop-up:", confirmResult);

// Prompt pop-up
let promptResult = prompt("Dit is een voorbeeld van een prompt pop-up. Typ iets in en klik op 'OK'.");
console.log("Return waarde van prompt pop-up als op 'OK' geklikt wordt:", promptResult);

if (promptResult === null) {
    console.log("Return waarde van prompt pop-up als op 'Cancel' geklikt wordt: null");
} else {
    console.log("Return waarde van prompt pop-up als op 'Cancel' geklikt wordt: niet van toepassing omdat de gebruiker op 'OK' klikte.");
}
