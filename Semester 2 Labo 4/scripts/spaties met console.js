function displayText() {
    let inputText = document.getElementById("inputText").value;

   let spacedText = "";

    for (let i = 0; i < inputText.length; i++) {
        spacedText += inputText[i] + " ";
    }

    console.log(spacedText);
}