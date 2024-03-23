const setup = () => {


    const listItems = document.querySelectorAll('li');
    listItems.forEach(function(item) {
        item.className = 'listItem';
        item.style.color = 'red';
    });

    const imgElement = document.createElement('img');
    imgElement.src = 'Afbeeldingen/img.png';

    document.body.appendChild(imgElement);
}

setup();
