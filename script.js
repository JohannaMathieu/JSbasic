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

//getting the animals and deleting the cats
const animalImg = document.querySelectorAll(".animals > img");

for (i = 0; i < animalImg.length; i++) {
    if (animalImg[i].className == "img-cat") {
        animalImg[i].remove();
    };
};

//adding another box to bannerBox and giving it a class
const box = document.createElement("div");
box.classList.add("box");
bannerBox.appendChild(box);

box.onmousedown = function () {
    box.style.width = "200px";
    box.style.backgroundColor = "red";
};

box.addEventListener("mouseup", function () {
    box.style.width = "50px";
    box.style.backgroundColor = "blue";
});

//create a todo list with user input
const form = document.querySelector("form");
const task = document.querySelector("#task");
const todoList = document.querySelector(".todoList");
let todo;
let todoText;

form.onsubmit = function () {
    event.preventDefault();
    todoText = task.value;
    todo = document.createElement("li");
    todo.innerHTML = todoText;
    todoList.appendChild(todo);
    task.value = "";
};