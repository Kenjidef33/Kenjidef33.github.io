const addToHistory = (prefix, query) => {
    let pageTitle;
    let url;
    let buttonColor;
    switch (prefix) {
        case '/g':
            pageTitle = 'Google';
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            break;
        case '/y':
            pageTitle = 'YouTube';
            url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
            break;
        case '/t':
            pageTitle = 'Twitter';
            url = `https://twitter.com/hashtag/${encodeURIComponent(query)}`;
            break;
        case '/i':
            pageTitle = 'Instagram';
            url = `https://www.instagram.com/explore/tags/${encodeURIComponent(query)}`;
            break;
        case '/s':
            pageTitle = 'Spotify';
            url = `https://open.spotify.com/search/${encodeURIComponent(query)}`;
            break;
        case '/a':
            pageTitle = 'Amazon';
            url = `https://www.amazon.com/s?k=${encodeURIComponent(query)}`;
            break;
        default:
            alert('Onbekende prefix voor commando!');
            return;
    }

    const historyItem = {
        title: pageTitle,
        text: query,
        url: url
    };

    const history = JSON.parse(localStorage.getItem('history')) || [];
    history.push(historyItem);
    localStorage.setItem('history', JSON.stringify(history));

    refreshHistory(history);

    document.getElementById('searchButton').style.backgroundColor = buttonColor;
    document.getElementById('searchButton').style.color = buttonTextColor;

    document.getElementById('searchInput').value = '';
};

const refreshHistory = (history) => {
    const historyContainer = document.getElementById('history');
    historyContainer.innerHTML = '';
    history.forEach((item) => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-3');

        let themeClass;
        let titleColor;
        let backgroundColor;
        let textColor;
        let buttonColor;
        let buttonTextColor = '#ffffff';
        switch (item.title.toLowerCase()) {
            case 'google':
                themeClass = 'google';
                titleColor = '#EDF2F4';
                backgroundColor = '#4285f4';
                textColor = '#ffffff';
                buttonColor = '#fbbc05';
                break;
            case 'youtube':
                themeClass = 'youtube';
                titleColor = '#EDF2F4';
                backgroundColor = '#ff0000';
                textColor = '#ffffff';
                buttonColor = '#000000';
                break;
            case 'twitter':
                themeClass = 'twitter';
                titleColor = '#EDF2F4';
                backgroundColor = '#000000';
                textColor = '#ffffff';
                buttonColor = '#4285f4';
                break;
            case 'instagram':
                themeClass = 'instagram';
                titleColor = '#EDF2F4';
                backgroundColor = '#bc2a8d';
                textColor = '#ffffff';
                buttonColor = '#f46f30';
                break;
            case 'spotify':
                themeClass = 'spotify';
                titleColor = '#EDF2F4';
                backgroundColor = '#1db954';
                textColor = '#ffffff';
                buttonColor = '#000000';
                break;
            case 'amazon':
                themeClass = 'amazon';
                titleColor = '#EDF2F4';
                backgroundColor = '#FFA500';
                textColor = '#ffffff';
                buttonColor = '#cee3f8';
                break;
            default:
                themeClass = '';
        }

        card.innerHTML = `
            <div class="card ${themeClass}" style="background-color: ${backgroundColor};">
                <div class="card-body">
                    <h5 class="card-title" style="color: ${titleColor};">${item.title}</h5>
                    <p class="card-text" style="color: ${textColor};">${item.text}</p> <!-- Tekstkleur toegevoegd -->
                    <a href="${item.url}" target="_blank" class="btn btn-light go-button" style="background-color: ${buttonColor}; color: ${buttonTextColor};">Go!</a>
                </div>
            </div>
        `;
        historyContainer.appendChild(card);
    });
};

window.onload = () => {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    refreshHistory(history);
};

document.getElementById('searchButton').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value.trim();
    if (searchInput.length === 0 || !searchInput.startsWith('/')) {
        alert('Ongeldig commando!');
        return;
    }

    const parts = searchInput.split(' ');
    const prefix = parts[0];
    const query = parts.slice(1).join(' ');

    let url;
    switch (prefix) {
        case '/g':
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            break;
        case '/y':
            url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
            break;
        case '/t':
            url = `https://twitter.com/hashtag/${encodeURIComponent(query)}`;
            break;
        case '/i':
            url = `https://www.instagram.com/explore/tags/${encodeURIComponent(query)}`;
            break;
        case '/s':
            url = `https://open.spotify.com/search/${encodeURIComponent(query)}`;
            break;
        case '/a':
            url = `https://www.amazon.com/s?k=${encodeURIComponent(query)}`;
            break;
        default:
            alert('Onbekende prefix voor commando!');
            return;
    }

    window.open(url, '_blank');

    addToHistory(prefix, query);
});