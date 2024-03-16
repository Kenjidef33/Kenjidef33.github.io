const deEnHet = () => {
    let text = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let words = text.split(" "); //Opsplitsen in woorden

    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === "de" || words[i].toLowerCase() === "de,") {
            if (words[i][0] === 'D') {
                words[i] = "Het";
            } else {
                words[i] = "het";
            }
        }
    }

    let result = words.join(" ");

    console.log(result);
}
deEnHet();

