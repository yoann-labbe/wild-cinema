
function chooseMovie(){
    let leFilm = document.getElementById("film").value;
    document.getElementById("affiche").innerHTML = "<img src='./" + leFilm + "'/>"
}


/*function chooseMovie(){
    let leFilm = document.getElementById("film").value;

    if(leFilm == ("01-Titanic.").value){
        document.getElementById("affiche").innerHTML = "<img src=/Users/marcdesideri/Documents/megarama/>"
    }
   else{
       alert("veuillez selectioner un film");
   }*/
