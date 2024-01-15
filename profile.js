function color(){
    alert("purple is the choice");
}
let favColor = document.querySelector('#color');
favColor.addEventListener("click", color);

function place(){
    alert("Spain is a beautiful place");
}
let favPlace = document.querySelector('#place');
favPlace.addEventListener("click", place);

function ritual(){
    alert("Undecided");
}
let favRitual = document.querySelector('#ritual');
favRitual.addEventListener('click', ritual);