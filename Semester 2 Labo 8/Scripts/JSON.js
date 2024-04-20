let student1 = {}; // een leeg object
student1.voornaam="Jan";
student1.geboorteDatum=new Date("1993-12-31");
student1.adres={};
student1.adres.gemeente="8500";
student1.gemeente="Kortrijk";

let student1_json = JSON.stringify(student1);

console.log(student1_json);