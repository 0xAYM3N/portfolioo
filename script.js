let menuIcon = document.querySelector(".menu i");
let links = document.querySelector(".navbar .links");

menuIcon.onclick = function () {
    links.classList.toggle("show");
};

