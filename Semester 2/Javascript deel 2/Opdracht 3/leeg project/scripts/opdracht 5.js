document.addEventListener("DOMContentLoaded", function() {
    // Zoek het element met het id "txtOutput"
    let pElement = document.getElementById("txtOutput");

    // Zoek het element met het id "btnWijzig"
    let btnWijzig = document.getElementById("btnWijzig");

    // Voeg een event listener toe aan de knop "Wijzig"
    btnWijzig.addEventListener("click", function() {
        // Wijzig de tekst van het element met het id "txtOutput"
        pElement.innerHTML = "Welkom!";
    });
});
