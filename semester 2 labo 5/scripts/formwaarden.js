const setup = () => {
    const button = document.getElementById("toonResultaat");
    button.addEventListener("click", () => {
        const result = {};

        result.isRoker = document.querySelector('input[name="isRoker"]').checked;

        result.nederlands = document.getElementById("nederlands").checked;
        result.frans = document.getElementById("frans").checked;
        result.engels = document.getElementById("engels").checked;

        result.favorieteBuurland = document.getElementById("favorieteBuurland").value;

        result.bestelling = [];
        const options = document.getElementById("bestelling").options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                result.bestelling.push(options[i].value);
            }
        }

        console.log("is roker: " + (result.isRoker ? "ja" : "nee"));
        console.log("moedertaal is " + (result.nederlands ? "nl" : "") + (result.frans ? ", fr" : "") + (result.engels ? ", en" : ""));
        console.log("favoriete buurland is " + result.favorieteBuurland);
        console.log("bestelling is " + (result.bestelling.length > 0 ? result.bestelling.join(', ') : ''));
    });
};

setup();