function toonSubstring() {
    // Haal ingevoerde waarden op
    let inputString = document.getElementById("inputString").value;
    let startIndex = parseInt(document.getElementById("startIndex").value);
    let endIndex = parseInt(document.getElementById("endIndex").value);

    if (startIndex >= 0 && startIndex < endIndex && endIndex <= inputString.length) {

        let substring = inputString.substring(startIndex, endIndex);

        document.getElementById("output").textContent = substring;
    } else {

        document.getElementById("output").textContent = "Ongeldige invoer!";
    }
}
