const selectElement = document.getElementById('Gemeente');

let gemeenten = [];

while (true) {
    let gemeente = prompt("Voer een gemeente in (of typ 'stop' om te stoppen): ").trim();
    if (gemeente.toLowerCase() === "stop") {
        break;
    }
    gemeenten.push(gemeente);
}

gemeenten.sort(function(a, b) {
    return a.localeCompare(b);
});

// Populate select with sorted gemeenten
gemeenten.forEach(function(gemeente) {
    const option = document.createElement('option');
    option.text = gemeente;
    option.value = gemeente;
    selectElement.add(option);
});

