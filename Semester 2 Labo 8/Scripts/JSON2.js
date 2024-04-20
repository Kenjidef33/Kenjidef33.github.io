let copiedJsonString = '{"voornaam":"Jan","geboorteDatum":"1993-12-31T00:00:00.000Z","adres":{"gemeente":"8500"}}';

// Maak een object vanuit de gekopieerde JSON-string
let copiedObject = JSON.parse(copiedJsonString);

console.log(copiedObject.voornaam);
