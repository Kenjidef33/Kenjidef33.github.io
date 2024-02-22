// Array met namen van familieleden
let familieleden = ['Jan', 'Piet', 'Klaas', 'Marie', 'Anna'];

// Functie om een naam toe te voegen aan de array
function voegNaamToe(array, naam) {
    array.push(naam);
}

// Schrijf naar de console hoeveel elementen de array bevat
console.log('Aantal elementen in de array:', familieleden.length);

// Schrijf het eerste, derde en vijfde element uit de array naar de console
console.log('Eerste element:', familieleden[0]);
console.log('Derde element:', familieleden[2]);
console.log('Vijfde element:', familieleden[4]);

// Vraag met prompt() een extra naam op en voeg deze toe aan de Array
let extraNaam = prompt('Voer een extra naam in:');
voegNaamToe(familieleden, extraNaam);
console.log('Array na toevoeging van extra naam:', familieleden);

// Converteer de array naar een string en toon deze op de console
let familieledenString = familieleden.join(', ');
console.log('Array geconverteerd naar string:', familieledenString);
