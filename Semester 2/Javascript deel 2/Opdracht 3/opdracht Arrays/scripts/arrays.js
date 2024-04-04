let familieleden = ["Jan", "Piet", "Kevin", "Maria", "Louise", "Tomas"];

function voegNaamToe(array, naam) {
    array.push(naam);
}

console.log("Het aantal elementen in de array:", familieleden.length);

console.log("Eerste element:", familieleden[0]);
console.log("Derde element:", familieleden[2]);
console.log("Vijfde element", familieleden[4]);

let nieuweNaam = prompt("Voer een nieuwe naam in:");
voegNaamToe(familieleden, nieuweNaam);
console.log("Array na het toevoegen van de nieuwe naam:", familieleden);

let familieledenString = familieleden.join(",");
console.log("Array is geconverteerd naar een String:", familieledenString);

