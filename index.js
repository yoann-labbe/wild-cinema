const postersProchainement = document.querySelector("#posters-prochainement");
const postersalAffiche = document.querySelector("#posters-alaffiche");
const films = {
    prochainement: [
        {
            name: "film 1",
            picture: "assets/affiche1.jpg",
            description: "blablabla"
        },
        {
            name: "film 2",
            picture: "assets/affiche2.jpg",
            description: "blablabla"
        },
        {
            name: "film 3",
            picture: "assets/affiche3.jpg",
            description: "blablabla"
        }
    ],
    alAffiche: [
        {
            name: "film 4",
            picture: "assets/ET.png",
            description: "blablabla"
        },
        {
            name: "film 5",
            picture: "assets/monopoly.jpg",
            description: "blablabla"
        },
        {
            name: "film 6",
            picture: "assets/titanic.jpg",
            description: "blablabla"
        },
    ]
}


function createPoster(parent, title, imgUrl, description) {
    const poster = document.createElement("div");
    poster.classList.add("poster");
    parent.appendChild(poster);

    const posterHeader = document.createElement("div");
    posterHeader.classList.add("poster-header");
    poster.appendChild(posterHeader);

    const posterImg = document.createElement("img");
    posterImg.src = `${imgUrl}`;
    posterImg.classList.add("poster-img");
    posterHeader.appendChild(posterImg);

    const posterBody = document.createElement("div");
    posterBody.classList.add("poster-body");
    poster.appendChild(posterBody);

    const posterTitle = document.createElement("h2");
    posterTitle.classList.add("poster-title");
    posterTitle.innerHTML = `${title}`;
    posterBody.appendChild(posterTitle);

    const posterDescription = document.createElement("p");
    posterDescription.classList.add("poster-description");
    posterDescription.innerHTML = `${description}`;
    posterBody.appendChild(posterDescription);
}

for (let i =0; i < films.prochainement.length; i++){
    const name = films.prochainement[i]["name"];
    const picture = films.prochainement[i]["picture"];
    const description = films.prochainement[i]["description"];
    createPoster(postersProchainement, name, picture, description);
}

for (let i =0; i < films.alAffiche.length; i++){
    const name = films.alAffiche[i]["name"];
    const picture = films.alAffiche[i]["picture"];
    const description = films.alAffiche[i]["description"];
    createPoster(postersalAffiche, name, picture, description);
}