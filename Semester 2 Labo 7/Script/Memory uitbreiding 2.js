const flipSound = new Audio('Audio/319896__theriavirra__drumsticks-lutner-2bn-hickory-no1.wav');
const matchSound = new Audio('Audio/397353__plasterbrain__tada-fanfare-g.flac');

let isBusy = false;
let flippedCards = [];

const IMAGES = [
    'Afbeeldingen/Kaart1.png',
    'Afbeeldingen/Kaart2.png',
    'Afbeeldingen/Kaart3.png',
    'Afbeeldingen/Kaart4.png',
    'Afbeeldingen/Kaart5.png',
    'Afbeeldingen/Kaart6.png'
];
const BACK_IMAGE = 'Afbeeldingen/Achterkant.png';

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
    const totalCards = 6 * 3; // 6 verschillende afbeeldingen x 3 keer
    const duplicatedImages = [];

    // Voeg elke afbeelding drie keer toe
    IMAGES.forEach(image => {
        duplicatedImages.push(image);
        duplicatedImages.push(image);
        duplicatedImages.push(image);
    });

    const shuffledImages = shuffle(duplicatedImages);

    for (let i = 0; i < totalCards; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.img = shuffledImages[i];
        card.style.backgroundImage = `url(${BACK_IMAGE})`;
        memoryBoard.appendChild(card);
        card.addEventListener('click', handleCardClick);
    }
};

const handleCardClick = function() {
    if (isBusy || this.classList.contains('flipped') || flippedCards.length === 3) return; // Alleen doorgaan als niet bezig, kaart nog niet omgedraaid, en minder dan 3 kaarten omgedraaid

    // Voer de rest van de kliklogica uit
    const clickedCard = this;
    clickedCard.style.backgroundImage = `url(${clickedCard.dataset.img})`; // Draai kaart om
    clickedCard.classList.add('flipped');
    flippedCards.push(clickedCard); // Voeg de omgedraaide kaart toe aan de array

    flipSound.play().then(() => {}).catch(error => {
        console.error('Er is een fout opgetreden bij het afspelen van het geluid:', error);
    }); // Speel de flipSound af

    if (flippedCards.length === 3) {
        setTimeout(() => {
            if (isMatchingSet(flippedCards)) {
                flippedCards.forEach(card => {
                    card.style.visibility = 'hidden';
                });
                checkGameEnd();
                matchSound.play();
            } else {
                flippedCards.forEach(card => {
                    card.style.backgroundImage = `url(${BACK_IMAGE})`;
                    card.classList.remove('flipped');
                });
            }
            flippedCards = [];
            isBusy = false;
        }, 1000);
    }
};

const isMatchingSet = cards => {
    const firstImg = cards[0].dataset.img;
    const secondImg = cards[1].dataset.img;
    const thirdImg = cards[2].dataset.img;

    // Controleren of alle drie de afbeeldingen gelijk zijn (in een set)
    return firstImg === secondImg && secondImg === thirdImg;
};

const checkGameEnd = () => {
    if (document.querySelectorAll('.card:not([style*="visibility: hidden"])').length === 0) {
        alert('Gefeliciteerd! Je hebt alle sets van drie kaarten gevonden!');
        resetGame();
    }
};

const resetGame = () => {
    const memoryBoard = document.getElementById('memoryBoard');
    memoryBoard.innerHTML = '';
    createCards();
};

window.onload = () => {
    createCards();
};
