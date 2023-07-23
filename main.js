import './style.css'

const cardsContainer = document.querySelector("#cards-container");
const helloCard = document.querySelector("#hello-card");
const aboutCard = document.querySelector("#about-card");
const projectsCard = document.querySelector("#projects-card");

projectsCard.style.display = "none";

// Setup zoom origin
var house = helloCard.querySelector(".house-container");
var houseBounds = house.getBoundingClientRect();

var originX = houseBounds.x + (window.innerWidth * 5.2 / 100);
var originY = houseBounds.y + (window.innerWidth * 5 / 100);
var origin = `${originX}px ${originY}px`;
cardsContainer.style.transformOrigin = origin;

// Setup about page position and scale
var aboutX = originX - aboutCard.clientWidth / 1.93;
var aboutY = originY - aboutCard.clientHeight / 1.97;

var aboutScale = house.clientWidth / aboutCard.clientWidth;

aboutCard.style.transformOrigin = "50% 50%";
aboutCard.style.transform = `translate(${aboutX}px, ${aboutY}px) scale(${aboutScale})`;

// Setup projects page position and scale
var aboutText = aboutCard.querySelector(".about-desc");
var textBounds = aboutText.getBoundingClientRect();

var projectsX = aboutX;
var projectsY = aboutY;
var projectsScale = aboutScale * 0.8;

projectsCard.style.transformOrigin = "50% 50%";
projectsCard.style.transform = `translate(${projectsX}px, ${projectsY}px) scale(${projectsScale})`;

// Scroll event
var index = 0;
var scrollFlag = true;

addEventListener("wheel", (e) => {
    if (!scrollFlag)
        return;

    if (e.deltaY > 0)
        index += 1;
    else
        index -= 1;

    if (index < 0) {
        index = 0;
        return;
    }
    else if (index > 2) {
        index = 2;
        return;
    }

    if (index === 2) {
        projectsCard.style.display = "block"; 
        cardsContainer.style.transform = `scale(20) translate(0, 14px)`;

        scrollFlag = false;
        setTimeout(() => {
            aboutCard.style.display = "none";
            scrollFlag = true;
        }, 1500);
    }
    else if (index === 1) {
        projectsCard.style.display = "block";
        aboutCard.style.display = "grid";

        var transform = `scale(15)`;
        cardsContainer.style.transform = transform;

        var dinoHello = helloCard.querySelector("#hello-dino");
        dinoHello.style.transform = "scaleX(-1)";
        dinoHello.style.left = "-1vw";

        scrollFlag = false;
        setTimeout(() => {
            dinoHello.style.opacity = 0;
            helloCard.style.display = "none";
            scrollFlag = true;
        }, 1500);
    }
    else {
        projectsCard.style.display = "none";
        helloCard.style.display = "grid";

        cardsContainer.style.transform = `scale(1)`;
        
        var dinoHello = helloCard.querySelector("#hello-dino");
        var houseDoor = house.querySelector(".left-side");
        dinoHello.style.left = "0vw";

        setTimeout(() => {
            dinoHello.style.opacity = 1;
            dinoHello.style.transform = "scaleX(1)";
            dinoHello.style.left = "8vw";
        }, 500)

        scrollFlag = false;
        setTimeout(() => {
            scrollFlag = true;
        }, 1500);
    }
});
