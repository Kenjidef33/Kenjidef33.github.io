let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX: "images/",
    IMAGE_PATH_SUFFIX: ".png",
    MOVE_DELAY: 3000,
    score: 0,
    timeoutId: 0,
    bombAdded: false
};

const setup = () => {
    if (global.bombAdded) {
        return;
    }

    let div = document.getElementById("playField");
    const img = document.createElement("img");
    const images = [
        "images/0.png",
        "images/1.png",
        "images/2.png",
        "images/3.png",
        "images/4.png"
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
    img.id = "object";
    img.style.position = "absolute";
    img.addEventListener("click", clickImage);
    div.appendChild(img);

    if (img.src.endsWith("0.png")) {
        global.bombAdded = true;
    }

    global.timeoutId = setTimeout(changeImageAutomatically, 3000);
};

const clickImage = () => {
    const img = document.getElementById("object");

    // Krijg de bron van de huidige afbeelding
    const currentSrc = img.src;

    if (currentSrc.endsWith("images/0.png")) {
        endGame();
        return;
    }

    global.score += 1;
    updateScore();

    clearTimeout(global.timeoutId);
    global.timeoutId = setTimeout(changeImageAutomatically, 3000);

    const images = [
        "images/0.png",
        "images/1.png",
        "images/2.png",
        "images/3.png",
        "images/4.png"
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
    moveImage();
};

const changeImageAutomatically = () => {
    const img = document.getElementById("object");
    const images = [
        "images/0.png",
        "images/1.png",
        "images/2.png",
        "images/3.png",
        "images/4.png"
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    img.src = images[randomIndex];
    moveImage();

    clearTimeout(global.timeoutId);
    global.timeoutId = setTimeout(changeImageAutomatically, 3000);
};

const moveImage = () => {
    const img = document.getElementById("object");
    const playField = document.getElementById("playField");

    const maxX = playField.clientWidth - global.IMAGE_SIZE;
    const maxY = playField.clientHeight - global.IMAGE_SIZE;
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    img.style.left = newX + "px";
    img.style.top = newY + "px";
};

const updateScore = () => {
    document.getElementById("score").innerText = "Score: " + global.score;
};

const endGame = () => {
    clearTimeout(global.timeoutId);
    alert("Game Over! Je hebt op de bom geklikt. Je score is: " + global.score);
};

document.getElementById("startButton").addEventListener("click", setup);