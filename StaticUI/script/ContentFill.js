const filmsList = JSON.parse(localStorage.getItem("filmsList"));

window.addEventListener('DOMContentLoaded', fillContent());

function fillContent() {
    const current = document.getElementById("current");
    const classic = document.getElementById("classic");
    let count = 0;
    for (let key in filmsList) {
        if (count > 2) {
            createFilmCart(filmsList, key, classic);
        } else {
            createFilmCart(filmsList, key, current);
        }

        count++;
    }
}

function createFilmCart(obj, key, cardGroup) {
    console.log(filmsList);


    const card = document.createElement("DIV");
    card.classList.add("card");
    console.log(cardGroup);
    cardGroup.append(card);

    const img = document.createElement("IMG");
    img.src = obj[key]["img"];
    img.classList.add("card-img-top");
    card.append(img);

    const cardBody = document.createElement("DIV");
    cardBody.classList.add("card-body");
    card.append(cardBody);

    const title = document.createElement("H5");
    title.classList.add("card-title");
    
    title.textContent = obj[key]["title"];
    cardBody.append(title);

    const description = document.createElement("P");
    description.classList.add("card-text");
    description.textContent = obj[key]["description"];
    cardBody.append(description);

    const buyButton = document.createElement("A");
    buyButton.classList.add("btn");
    buyButton.classList.add("btn-success");
    buyButton.href = "BuyPage.html";
    buyButton.role = "button";
    buyButton.textContent = "Buy ticket";
    cardBody.append(buyButton);

    const orderButton = document.createElement("A");
    orderButton.classList.add("btn");
    orderButton.classList.add("btn-warning");
    orderButton.href = "BuyPage.html";
    orderButton.role = "button";
    orderButton.textContent = "Book a ticket";
    cardBody.append(orderButton);

    const cardFooter = document.createElement("DIV");
    cardFooter.classList.add("card-footer");
    card.append(cardFooter);

    const textInFooter = document.createElement("SMALL");
    textInFooter.classList.add("text-muted");
    textInFooter.textContent = "Last ticket was sold 05.11";
    cardFooter.append(textInFooter);
}