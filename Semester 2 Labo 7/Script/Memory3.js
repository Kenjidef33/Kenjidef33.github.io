const matchSound = new Audio('Audio/397353__plasterbrain__tada-fanfare-g.flac');

let isBusy = false;
let flippedCards = [];

const SOUNDS = [
    'Audio/253496__iykqic0__pringle-4-ascending.wav',
    'Audio/351214__gokhanbiyik__beep_tail_01.wav',
    'Audio/681930__josefpres__guitar-tones-001-string-b-09-tone-gis4.wav',
    'Audio/500932__sawuare__wine-glass.wav',
    'Audio/542467__franciscozola136__tabajo-en-clase-loop-3.wav',
    'Audio/615337__rookster__paper_flip_01.wav'
];
const BACK_SOUND = 'Audio/Achtergrondgeluid.mp3';

const shuffle = array => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

const createCards = () => {
    const memoryBoard = document.getElementById('memoryBoard');
    const shuffledSounds = shuffle([...SOUNDS.slice(0, AANTAL_KAARTEN), ...SOUNDS.slice(0, AANTAL_KAARTEN)]); // Gebruik slechts het benodigde aantal geluiden

    for (let i = 0; i < shuffledSounds.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.sound = shuffledSounds[i];

        // Voeg het cijfer toe aan de kaart
        const number = document.createElement('div');
        number.classList.add('number');
        number.textContent = i + 1;
        card.appendChild(number);

        memoryBoard.appendChild(card);
        card.addEventListener('click', handleCardClick);
    }
};

const handleCardClick = function() {
    if (isBusy || this.classList.contains('flipped') || flippedCards.length === 2) return; // Controleer of het spel bezig is, of de kaart al omgedraaid is, of er al twee kaarten zijn omgedraaid

    // Voer de rest van de kliklogica uit
    const clickedCard = this;
    clickedCard.classList.add('flipped');
    flippedCards.push(clickedCard);

    const clickedSound = new Audio(clickedCard.dataset.sound);
    clickedSound.play().then(() => {}).catch(error => {
        console.error('Er is een fout opgetreden bij het afspelen van het geluid:', error);
    }); // Speel het geluid van de kaart af

    if (flippedCards.length === 2) {
        setTimeout(() => {
            const [firstCard, secondCard] = flippedCards;
            if (firstCard.dataset.sound === secondCard.dataset.sound) {
                firstCard.style.visibility = 'hidden';
                secondCard.style.visibility = 'hidden';
                checkGameEnd();
                matchSound.play();
            } else {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
            }
            flippedCards = [];
            isBusy = false;
        }, 1000);
    }
};

const checkGameEnd = () => {
    if (document.querySelectorAll('.card:not([style*="visibility: hidden"])').length === 0) {
        alert('Gefeliciteerd! Je hebt alle geluiden gevonden!');
        resetGame();
    }
};

const resetGame = () => {
    const memoryBoard = document.getElementById('memoryBoard');
    memoryBoard.innerHTML = '';
    createCards();
};

const AANTAL_HORIZONTAAL = 4;
const AANTAL_VERTICAAL = 3;
const AANTAL_KAARTEN = 12; // Verander het aantal kaarten naar 12

window.onload = () => {
    createCards();
};
