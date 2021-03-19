const postersalAffiche = document.querySelector("#posters-prochainement");
const postersProchainement = document.querySelector("#posters-alaffiche");
const films = {
    alAffiche: [
        {
            name: "PULL REQUEST FOR A DREAM",
            picture: "assets/lefilm3.png",
            description: "«Jared est un addicte à Git. Lors de ses projets, il ne peut s'empêcher de push  après avoir tapé 3 lignes de codes, il va tomber dans une spirale infernale de pull request»"
        },
        {
            name: "PROJET 3",
            picture: "assets/lefilm5.png",
            description: "«Elle vient tout juste de rejoindre la Wild, tout se passait si bien, pourtant une idée lui hante déjà l'esprit. Et si le client était chiant ? Et si elle ne rendait jamais le projet ? Un thriller à vous donner des cauchemars.»" 
        },
        {
            name: "THE CODE FATHER ",
            picture: "assets/lefilm6.png",
            description: "«Bordeaux rive droite, 2021. Une guerre de clan oppose depuis des années les plus grandes mafias de la région. Les PHP et les JavaScript. L'arrivée de nouveaux Wilders peut-elle tout changer ?»"
        }
    ],
    prochainement: [
        {
            name: "BACK TO THE MAIN BRANCH",
            picture: "assets/lefilm4.png",
            description: "«Un groupe d'étudiant en plein projet technique se retrouve piégé par le temps dans une branche dev pleine de commits approximatifs. Vont ils rendre leurs projets sur la main branche à temps ?»"
        },
        {
            name: "JAVASCRIPT PARK",
            picture: "assets/lefilm2.png",
            description: "«Quentin B, instructeur de la puissante compagnie nommée WildCodeSchool, parvient à inculquer les bases de JavaScript à de nouveaux Wilders et, étonné de leurs prouesses, décide d'ouvrir un parc d'attraction sur la place des Quinconces.»"
        },
        {
            name: "UN ELEPHANT SUR LES BRAS",
            picture: "assets/lefilm1.png",
            description: "«Charmés par le discours de leur instructeur, ce groupe de Wilder ont emprunté la voie du PHP. C'était sans réaliser dans quel aventure ils allaients embarquer. Une comédie touchante à découvrir en famille !»"
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

    const linkToReserve = document.createElement("a");
    linkToReserve.href = "reserve.html";
    posterHeader.appendChild(linkToReserve);

    const posterImg = document.createElement("img");
    posterImg.src = `${imgUrl}`;
    posterImg.classList.add("poster-img");
    linkToReserve.appendChild(posterImg);

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

for (let i =0; i < films.alAffiche.length; i++){
    const name = films.alAffiche[i]["name"];
    const picture = films.alAffiche[i]["picture"];
    const description = films.alAffiche[i]["description"];
    createPoster(postersalAffiche, name, picture, description);
}

for (let i =0; i < films.prochainement.length; i++){
    const name = films.prochainement[i]["name"];
    const picture = films.prochainement[i]["picture"];
    const description = films.prochainement[i]["description"];
    createPoster(postersProchainement, name, picture, description);
}