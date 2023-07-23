import './style.css'

const cardsContainer = document.querySelector("#cards-container");
const helloCard = document.querySelector("#hello-card");
const aboutCard = document.querySelector("#about-card");
const projectsCard = document.querySelector("#projects-card");

projectsCard.style.display = "none";
//aboutCard.style.display = "none";

var house = helloCard.querySelector(".house-container");
var houseBounds = house.getBoundingClientRect();

var originX = houseBounds.x + (window.innerWidth * 5.2 / 100);
var originY = houseBounds.y + (window.innerWidth * 5 / 100);

var aboutX = originX - aboutCard.clientWidth / 1.93;
var aboutY = originY - aboutCard.clientHeight / 1.97;

var aboutScale = house.clientWidth / aboutCard.clientWidth;

aboutCard.style.transformOrigin = "50% 50%";
aboutCard.style.transform = `translate(${aboutX}px, ${aboutY}px) scale(${aboutScale})`;

var aboutText = aboutCard.querySelector(".about-desc");
var textBounds = aboutText.getBoundingClientRect();

var projectsX = aboutX;
var projectsY = aboutY;
var projectsScale = aboutScale * 0.8;

projectsCard.style.transformOrigin = "50% 50%";
projectsCard.style.transform = `translate(${projectsX}px, ${projectsY}px) scale(${projectsScale})`;


var scroll = 0;

addEventListener("wheel", (e) => {
    scroll += e.deltaY;

    if (scroll < 0)
        scroll = 0;
    else if (scroll > 30000)
        scroll = 30000;

    if (scroll >= 20000) {
        projectsCard.style.display = "block";
        aboutCard.style.display = "none";
    }
    else if (scroll >= 14000) {
        projectsCard.style.display = "block";
        aboutCard.style.display = "grid";
        helloCard.style.display = "none";
    }
    else {
        projectsCard.style.display = "none";
        helloCard.style.display = "grid";
    }

    if (scroll < 20000) {
        var origin = `${originX}px ${originY}px`;
        cardsContainer.style.transformOrigin = origin;
        var transform = `scale(${1 + scroll / 1000})`
        if (scroll >= 14000)
            transform += `translate(0, ${(scroll - 14000) / 1000}px)`

        cardsContainer.style.transform = transform;
    }

    if (scroll < 14000) {
        // Hello card Animation
        var dinoHello = helloCard.querySelector("#hello-dino");
        var houseDoor = house.querySelector(".left-side");
        dinoHello.style.left = `${-scroll / 850 + 8}vw`;

        var dinoRight = dinoHello.getBoundingClientRect().right;
        var houseRight = houseDoor.getBoundingClientRect().right;
        if (houseRight < dinoRight)
            dinoHello.style.opacity = 1;
        else
            dinoHello.style.opacity = 0;
    }
});
