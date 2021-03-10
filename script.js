//getting my image and changing the source
const myImg = document.querySelector(".my-img");
myImg.src = "https://cdn.pixabay.com/photo/2021/01/30/12/19/couple-5963678_1280.png";

//changing the h1

const headline = document.querySelector(".headline");
headline.innerHTML = "Welcome everyone!"

let user = window.prompt("Please enter your name");

headline.innerHTML = `Welcome, ${user}`;