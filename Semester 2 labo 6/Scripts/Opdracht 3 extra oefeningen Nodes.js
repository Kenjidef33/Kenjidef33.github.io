const appendParagraph = () => {

    let paragraph = document.createElement("p");
    paragraph.textContent = "Dit is een automatisch gemaakt paragraaf";

    let divElement = document.getElementById("myDIV");

// Append the paragraph element to the <div>
    divElement.appendChild(paragraph);

};

