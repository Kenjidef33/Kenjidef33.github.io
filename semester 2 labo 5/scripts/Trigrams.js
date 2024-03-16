const setup = () => {
    document.getElementById("trigrams").addEventListener("click", trigrams)
}

const trigrams = () => {
    let trigrams = [];
    let word = "onoorbaar";
    for (let i = 0; i < word.length - 2; i++) {
        console.log(word.substring(i, i + 3));
    }
    return trigrams;
}

window.addEventListener("load", setup);