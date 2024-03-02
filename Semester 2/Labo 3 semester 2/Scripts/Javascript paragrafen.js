document.addEventListener('DOMContentLoaded', function() {
    var paragrafen = document.querySelectorAll('p:not(.belangrijk)');
    for (var i = 0; i < paragrafen.length; i++) {
        paragrafen[i].style.color = 'red';
    }
});