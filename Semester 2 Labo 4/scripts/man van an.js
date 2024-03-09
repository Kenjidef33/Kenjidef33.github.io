const tekst = "De man van An geeft geen hand aan ambetante verwanten";
const zoektekst = "an";
let count = 0;
let index = tekst.indexOf(zoektekst);

while (index !== -1) {
    count++;
    index = tekst.indexOf(zoektekst, index + 1);
}

console.log(`Het aantal keren dat "an" voorkomt (met indexOf): ${count}`);


count = 0;
index = tekst.lastIndexOf(zoektekst);

while (index !== -1) {
    count++;
    index = tekst.lastIndexOf(zoektekst, index - 1);
}

console.log(`Het aantal keren dat "an" voorkomt (met lastIndexOf): ${count}`);
