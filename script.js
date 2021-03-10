// //getting my image and changing the source
// const myImg = document.querySelector(".my-img");
// myImg.src = "https://cdn.pixabay.com/photo/2021/01/30/12/19/couple-5963678_1280.png";

//changing the h1

const headline = document.querySelector(".headline");
headline.innerHTML = "Welcome everyone!"

let user = window.prompt("Please enter your name");

headline.innerHTML = `Welcome, ${user}`;

//changing an array of pictures
const picArray = [
    "https://placedog.net/500/280",
    "https://placedog.net/500/205",
    "https://placedog.net/500/230",
    "https://placedog.net/500/284",
    "https://placedog.net/500/301"
];

const myImages = document.querySelectorAll("img");

for (i = 0; i < picArray.length; i++) {
    myImages[i].src = picArray[i];
}

//adding an img to bannerBox
const newBanner = document.createElement("img");
newBanner.src = "https://cdn.pixabay.com/photo/2015/09/01/09/32/alphabet-916673__480.jpg";


const bannerBox = document.querySelector(".bannerBox");
bannerBox.appendChild(newBanner);