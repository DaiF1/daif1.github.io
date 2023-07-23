import './style.css'

// Timeout between scroll. Time of css ease animation
const TIMEOUT = 1500;

const cardsContainer = document.querySelector("#cards-container");
const helloCard = document.querySelector("#hello-card");
const aboutCard = document.querySelector("#about-card");
const projectsCard = document.querySelector("#projects-card");

function pageSetup() {
    projectsCard.style.display = "none";

    // Setup zoom origin
    var house = helloCard.querySelector(".house-container");
    var houseBounds = house.getBoundingClientRect();

    var originX = houseBounds.x + (window.innerWidth * 5.2 / 100);
    var originY = houseBounds.y + (window.innerWidth * 5 / 100);
    var origin = `${originX}px ${originY}px`;
    cardsContainer.style.transformOrigin = origin;

    // Setup about page position and scale
    var aboutX = originX - aboutCard.clientWidth / 1.935;
    var aboutY = originY - aboutCard.clientHeight / 1.97;

    var aboutScale = house.clientWidth / aboutCard.clientWidth;

    aboutCard.style.transformOrigin = "50% 50%";
    aboutCard.style.transform = `translate(${aboutX}px, ${aboutY}px) scale(${aboutScale})`;

    // Setup projects page position and scale
    var aboutText = aboutCard.querySelector(".about-desc");
    var textBounds = aboutText.getBoundingClientRect();

    var projectsX = aboutX + (aboutCard.clientWidth * aboutScale * 0.07);
    var projectsY = aboutY - (aboutCard.clientHeight * aboutScale * 0.17);
    var projectsScale = aboutScale * 0.6;

    projectsCard.style.transformOrigin = "50% 50%";
    projectsCard.style.transform = `translate(${projectsX}px, ${projectsY}px) scale(${projectsScale})`;
}

// Scroll Utils
var index = 0;
var scrollFlag = true;

function showHello() {
    helloCard.style.display = "grid";

    cardsContainer.style.transform = `scale(1)`;

    var house = helloCard.querySelector(".house-container");
    house.style.transformOrigin = "70% 50%";

    var dinoHello = helloCard.querySelector("#hello-dino");
    var house = helloCard.querySelector(".house-container");
    var houseDoor = house.querySelector(".left-side");
    dinoHello.style.left = "0vw";

    var dinoAbout = aboutCard.querySelector("#about-dino");
    dinoAbout.style.marginLeft = "-30vw";
    dinoAbout.style.marginRight = "30vw";
    var aboutText = aboutCard.querySelector(".about-desc");

    // Elements appearance
    setTimeout(() => {
        dinoHello.style.opacity = 1;
        dinoHello.style.transform = "scaleX(1)";
        dinoHello.style.left = "8vw";

        house.style.transform = "scale(1)";
        house.style.transition = "transform 1s ease";

        aboutText.style.marginLeft = "60vw";
        aboutText.style.marginRight = "-60vw";
    }, TIMEOUT / 3)

    // Elements disappearance
    scrollFlag = false;
    setTimeout(() => {
        projectsCard.style.display = "none";
        scrollFlag = true;
    }, TIMEOUT);
}

function showAbout() {
    projectsCard.style.display = "block";
    aboutCard.style.display = "grid";

    var transform = `scale(15)`;
    cardsContainer.style.transform = transform;

    var dinoAbout = aboutCard.querySelector("#about-dino");
    var aboutText = aboutCard.querySelector(".about-desc");

    var house = helloCard.querySelector(".house-container");
    house.style.transformOrigin = "80% 50%";

    var dinoHello = helloCard.querySelector("#hello-dino");
    dinoHello.style.transform = "scaleX(-1)";
    dinoHello.style.left = "-1vw";

    var title = projectsCard.querySelector("h1");
    title.style.marginTop = "-3em";
    title.style.marginBottom = "3em";

    house.style.transform = "scale(3.5)";
    house.style.transition = "transform 1.5s ease-in";

    // Elements appearance
    setTimeout(() => {
        dinoAbout.style.marginLeft = 0;
        dinoAbout.style.marginRight = 0;
        aboutText.style.marginLeft = 0;
        aboutText.style.marginRight = 0;
    }, TIMEOUT / 3);

    // Elements disappearance
    scrollFlag = false;
    setTimeout(() => {
        dinoHello.style.opacity = 0;
        helloCard.style.display = "none";
        projectsCard.style.overflow = "hidden";
        scrollFlag = true;
    }, TIMEOUT);

}

function showProjects() {
    projectsCard.style.display = "block"; 
    cardsContainer.style.transform = `scale(24) translate(0, 14px)`;

    projectsCard.style.overflow = "visible";
    var title = projectsCard.querySelector("h1");

    var dinoAbout = aboutCard.querySelector("#about-dino");
    dinoAbout.style.marginLeft = "-30vw";
    dinoAbout.style.marginRight = "30vw";
    var aboutText = aboutCard.querySelector(".about-desc");
    aboutText.style.marginLeft = "60vw";
    aboutText.style.marginRight = "-60vw";

    // Elements appearance
    setTimeout(() => {
        title.style.marginTop = 0;
        title.style.marginBottom = 0;
    }, TIMEOUT / 3);

    // Elements disappearance
    scrollFlag = false;
    setTimeout(() => {
        aboutCard.style.display = "none";
        scrollFlag = true;
    }, TIMEOUT);
}

// Scroll event
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

    if (index === 2)
        showProjects();
    else if (index === 1)
        showAbout();
    else
        showHello();
});

window.addEventListener('load', function() {
    pageSetup();
})
