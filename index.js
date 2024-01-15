console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submition complete');
}

function compliments(){
	alert("you are awesome!")
}
let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector("#image");
img.addEventListener("mouseover", compliments);