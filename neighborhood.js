Request = ["Gen", "Sushi", "Udon", "Italian street food"];
const randomRequest = array[Math.floor(math.random()*Request.length)];

function requestRestaurant(){
    alert(`your restaurant recommendation: ${randomRequest}`);
}
let request = document.querySelector("#rec");
request.addEventListener("click", requestRestaurant)