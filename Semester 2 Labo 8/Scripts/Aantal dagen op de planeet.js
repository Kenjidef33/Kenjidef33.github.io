const setup = () => {
    let verjaardag = new Date("2002-07-09");
    let huidigeDatum = new Date();
    let verschilInMilliseconden = huidigeDatum - verjaardag;
    let verschilInDagen = Math.floor(verschilInMilliseconden / (1000 * 60 * 60 * 24));
    console.log("Aantal dagen tussen je verjaardag en vandaag: " + verschilInDagen + " dagen");
};

window.addEventListener('DOMContentLoaded', () => {
    setup();
});
