
function chooseMovie(){
    let leFilm = document.getElementById("film").value;
    document.getElementById("affiche").innerHTML = "<img src='./" + leFilm + "'/>"
}
const Lepopup = document.getElementById("lepopup");
const popup = document.getElementById('popupParent');
const btnClose = document.getElementById('btnclose');

btnClose.addEventListener('click',closePopup);

function closePopup(){
    popup.style.display = "none";
}

    function bbb(event){
        console.log("hello")
        event.preventDefault();alert('votre reservation a bien était pris en compte')

    }
   




