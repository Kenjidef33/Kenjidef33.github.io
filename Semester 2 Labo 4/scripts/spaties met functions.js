
const maakMetSpaties = (inputText) => {
    let result = "";

    for (let i = 0; i < inputText.length; i++) {

        result += inputText[i] + " ";
    }
    return result;
}

function displayText() {
    let inputText = document.getElementById("inputText").value;

    let spacedText = maakMetSpaties(inputText);

    console.log(spacedText);
}
