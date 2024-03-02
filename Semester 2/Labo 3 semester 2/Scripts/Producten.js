
    function herrekenSubtotaal() {
    // Haal alle relevante elementen op
    const aantalInputs = document.getElementsByClassName('aantal');
    const prijzen = document.getElementsByClassName('prijs');
    const btwTarieven = document.getElementsByClassName('btw');
    const subtotaalElementen = document.getElementsByClassName('subtotaal');

    let totaal = 0;

    // Loop door elk product
    for (let i = 0; i < aantalInputs.length; i++) {
    // Haal de ingevoerde hoeveelheid op
    const aantal = parseInt(aantalInputs[i].value);

    // Haal de prijs op en verwijder ' Eur'
    const prijsString = prijzen[i].textContent.replace(' Eur', '');
    const prijs = parseFloat(prijsString);

    // Haal de btw op en verwijder het '%' teken
    const btwString = btwTarieven[i].textContent.replace('%', '');
    const btw = parseFloat(btwString) / 100;

    // Bereken subtotaal
    const subtotaal = aantal * prijs * (1 + btw);

    // Update de subtotaal in de HTML
    subtotaalElementen[i].textContent = subtotaal.toFixed(2) + ' Eur';

    // Update het totaal
    totaal += subtotaal;
}

    // Update het totaal in de HTML
    document.getElementById('totaal').textContent = totaal.toFixed(2) + ' Eur';
}

    function herbereken() {
    herrekenSubtotaal();
}