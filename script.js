const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
const content = document.querySelector(".content");
const circle = document.querySelector(".circle");
const body = document.querySelector("body");

open.addEventListener("click", () => {
    addShowNav();
});

close.addEventListener("click", () => {
    removeShowNav();
});

container.addEventListener("click", () => {
    removeShowNav();
});

addShowNav = () => {
    container.classList.add("show-nav");
    circle.classList.add("show-nav");
    body.classList.add("nav-open")
}

removeShowNav = () => {
    container.classList.remove("show-nav");
    circle.classList.remove("show-nav");
    body.classList.remove("nav-open")
}