const postersProchainement = document.querySelector("#posters-prochainement");
const postersalAffiche = document.querySelector("#posters-alaffiche");
const films = {
    prochainement: [
        {
            name: "film 1",
            picture: "assets/monopoly.jpg"
        },
        {
            name: "film 2",
            picture: "assets/ET.png"
        },
        {
            name: "film 3",
            picture: "assets/titanic.jpg"
        }
    ],
    alAffiche: [
        {
            name: "film 4",
            picture: "lalala1.url"
        },
        {
            name: "film 5",
            picture: "lalal12"
        },
        {
            name: "film 6",
            picture: "blabla1"
        }
    ]
}


function createPoster(parent, title, imgUrl) {
    const poster = document.createElement("div");
    poster.classList.add("poster");
    parent.appendChild(poster);

    const posterHeader = document.createElement("div");
    posterHeader.classList.add("poster-header");
    poster.appendChild(posterHeader);

    const posterImg = document.createElement("img");
    posterImg.style.backgroundImage= `url(${imgUrl})`;
    posterImg.classList.add("poster-img");
    posterHeader.appendChild(posterImg);

    const posterBody = document.createElement("div");
    posterBody.classList.add("poster-body");
    poster.appendChild(posterBody);

    const posterTitle = document.createElement("h2");
    posterTitle.classList.add("poster-title");
    posterTitle.innerHTML = `${title}`;
    posterBody.appendChild(posterTitle);
}

for (let i =0; i < films.prochainement.length; i++){
    const name = films.prochainement[i]["name"];
    const picture = films.prochainement[i]["picture"];
    createPoster(postersProchainement, name, picture);
}

for (let i =0; i < films.alAffiche.length; i++){
    const name = films.alAffiche[i]["name"];
    const picture = films.alAffiche[i]["picture"];
    createPoster(postersalAffiche, name, picture);
}