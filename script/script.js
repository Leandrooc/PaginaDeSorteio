
function changeOver(){
    let p = document.getElementById("but");
    p.style.opacity = "0.8"
}

function changeOut(){
    let p = document.getElementById("but");
    p.style.opacity = "1"

}

let inputs = document.getElementById("number");



function lucky() {
    setTimeout(function() {

    let numero = inputs.value;

    let ns = Math.round(Math.random() * numero) 
    document.getElementById("d").innerHTML = ns  }, 4000);


}


let song = document.getElementById("music")

function plays(){
     song.play();
}

