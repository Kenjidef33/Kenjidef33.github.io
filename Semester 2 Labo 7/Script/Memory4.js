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
    const totalCards = 3 * 4; // 3 rijen van 4 kaarten

    // Bereken de breedte en hoogte van het speelveld
    const boardWidth = memoryBoard.offsetWidth;
    const boardHeight = memoryBoard.offsetHeight;

    // Bereken de optimale breedte en hoogte van elke kaart op basis van het aantal kaarten en de beschikbare ruimte
    const optimalCardWidth = Math.floor(boardWidth / 4); // 4 kaarten per rij
    const optimalCardHeight = Math.floor(boardHeight / 3); // 3 rijen

    // Bereken de aspectverhouding van de afbeeldingen
    const aspectRatio = IMAGES[0].naturalWidth / IMAGES[0].naturalHeight; // Neem aan dat alle afbeeldingen dezelfde aspectverhouding hebben

    // Bereken de daadwerkelijke breedte en hoogte van elke kaart op basis van de optimale grootte en de aspectverhouding van de afbeeldingen
    let cardWidth, cardHeight;

    if (optimalCardWidth / optimalCardHeight > aspectRatio) {
        // De optimale breedte is te groot, pas de hoogte aan
        cardHeight = optimalCardHeight;
        cardWidth = Math.floor(optimalCardHeight * aspectRatio);
    } else {
        // De optimale hoogte is te groot, pas de breedte aan
        cardWidth = optimalCardWidth;
        cardHeight = Math.floor(optimalCardWidth / aspectRatio);
    }

    // Voeg kaarten toe aan het speelveld
    for (let i = 0; i < totalCards; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = cardWidth + 'px';
        card.style.height = cardHeight + 'px';
        card.dataset.img = IMAGES[i % IMAGES.length]; // Herhaal de afbeeldingen indien nodig
        card.style.backgroundImage = `url(${BACK_IMAGE})`;
        memoryBoard.appendChild(card);
        card.addEventListener('click', handleCardClick);
    }
};

const handleCardClick = function() {
    if (isBusy || this.classList.contains('flipped') || flippedCards.length === 2) return; // Controleer of het spel bezig is, of de kaart al omgedraaid is, of er al twee kaarten zijn omgedraaid

    // Voer de rest van de kliklogica uit
    const clickedCard = this;
    clickedCard.style.backgroundImage = `url(${clickedCard.dataset.img})`; // Draai kaart om
    clickedCard.classList.add('flipped');
    flippedCards.push(clickedCard); // Voeg de omgedraaide kaart toe aan de array

    flipSound.play().then(() => {}).catch(error => {
        console.error('Er is een fout opgetreden bij het afspelen van het geluid:', error);
    }); // Speel de flipSound af

    if (flippedCards.length === 2) {
        setTimeout(() => {
            const [firstCard, secondCard] = flippedCards;
            if (firstCard.dataset.img === secondCard.dataset.img) {
                firstCard.style.visibility = 'hidden';
                secondCard.style.visibility = 'hidden';
                checkGameEnd();
                matchSound.play();
            } else {
                firstCard.style.backgroundImage = `url(${BACK_IMAGE})`;
                secondCard.style.backgroundImage = `url(${BACK_IMAGE})`;
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
        alert('Gefeliciteerd! Je hebt alle kaarten gevonden!');
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