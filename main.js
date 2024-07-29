import './style.css'

// Timeout between scroll. Time of css ease animation
const TIMEOUT = 1500;

const cardsContainer = document.querySelector("#cards-container");
const helloCard = document.querySelector("#hello-card");
const aboutCard = document.querySelector("#about-card");
const projectsCard = document.querySelector("#projects-card");

let currentProject = 0;
let projectWall = document.getElementById("project-wall");
let firstProject = projectWall.querySelector(".project");
let projectNumber = projectWall.children.length - 2;

function pageSetup() {
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
    var projectsScale = aboutScale * 0.3;
    var projectsX = aboutX + (projectsCard.clientWidth * 0.15) * projectsScale;
    var projectsY = aboutY - (window.innerHeight / 100);

    projectsCard.style.transformOrigin = "50% 50%";
    projectsCard.style.transform = `translate(${projectsX}px, ${projectsY}px) scale(${projectsScale})`;

    // Setup project navigation arrows
    
    let arrowLeft = document.getElementById("project-arrow-left");
    let arrowRight = document.getElementById("project-arrow-right");

    arrowLeft.addEventListener("click", () => {
        currentProject--;
        // Center of screen - half size of project - index offset - project border
        firstProject.style.marginLeft = `calc(50vw - 250pt - ${currentProject * 1000}pt - ${currentProject * 40}px)`;

        if (currentProject === 0) {
            arrowLeft.style.opacity = 0;
            arrowLeft.disabled = true;
        }

        arrowRight.disabled = false;
        arrowRight.style.opacity = 100;
    });

    arrowRight.addEventListener("click", () => {
        currentProject++;
        // Center of screen - half size of project - index offset - project border
        firstProject.style.marginLeft = `calc(50vw - 250pt - ${currentProject * 1000}pt - ${currentProject * 40}px)`;

        if (currentProject === projectNumber - 1) {
            arrowRight.style.opacity = 0;
            arrowRight.disabled = true;
        }

        arrowLeft.disabled = false;
        arrowLeft.style.opacity = 100;
    });
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

    setTimeout(() => {
        projectsCard.style.display = "none";
    }, 1.5 * TIMEOUT / 3);

    // Elements disappearance
    scrollFlag = false;
    setTimeout(() => {
        scrollFlag = true;
    }, TIMEOUT);
}

function showAbout() {
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
    title.style.marginTop = "-120vh";
    title.style.marginBottom = "120vh";

    let projects = projectsCard.querySelectorAll(".project");
    for (let proj of projects) {
        let text = proj.querySelectorAll("p");
        for (let t of text) {
            t.style.opacity = 0;
        }
    }

    let arrowLeft = document.getElementById("project-arrow-left");
    let arrowRight = document.getElementById("project-arrow-right");
    arrowLeft.style.opacity = 0;
    arrowRight.style.opacity = 0;

    house.style.transform = "scale(3.5)";
    house.style.transition = "transform 1.5s ease-in";

    // Elements appearance
    setTimeout(() => {
        dinoAbout.style.marginLeft = 0;
        dinoAbout.style.marginRight = 0;
        aboutText.style.marginLeft = 0;
        aboutText.style.marginRight = 0;
        projectsCard.style.display = "flex";
    }, TIMEOUT / 3);

    // Elements disappearance
    scrollFlag = false;
    setTimeout(() => {
        dinoHello.style.opacity = 0;
        helloCard.style.display = "none";
        title.style.opacity = 0;
        scrollFlag = true;
    }, TIMEOUT);

}

function showProjects() {
    cardsContainer.style.transform = `translate(${projectsCard.clientWidth * 0.41}px, ${window.innerHeight / 1.23}px) scale(48)`;

    var title = projectsCard.querySelector("h1");
    title.style.opacity = 100;

    let projects = projectsCard.querySelectorAll(".project");
    for (let proj of projects) {
        let text = proj.querySelectorAll("p");
        for (let t of text) {
            t.style.opacity = 100;
        }
    }

    let arrowLeft = document.getElementById("project-arrow-left");
    let arrowRight = document.getElementById("project-arrow-right");
    arrowLeft.style.opacity = currentProject > 0 ? 100 : 0;
    arrowRight.style.opacity = currentProject < projectNumber - 1 ? 100 : 0;
    arrowLeft.disabled = currentProject === 0;
    arrowRight.disabled = currentProject === projectNumber - 1;

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

// Runned on scroll event
function processScroll(delta) {
    if (delta > 0)
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
}

// Computer scroll
addEventListener("wheel", (e) => {
    if (!scrollFlag)
        return;
    processScroll(e.deltaY);
});

// Mobile scroll
const threshold = 150; // Min distance of swipe
var startTime;
var startX;
var startY;

addEventListener("touchstart", function(e) {
    var ts = e.changedTouches[0];
    startX = ts.pageX;
    startY = ts.pageY;
    startTime = new Date().getTime();
});

addEventListener("touchend", function(e) {
    var tend = e.changedTouches[0];
    var distX = tend.pageX - startX;
    var distY = tend.pageY - startY;
    var elapsedTime = new Date().getTime() - startTime;
    console.log(elapsedTime)

    var verticalSwipe = Math.abs(distY) >= threshold &&
        Math.abs(distX) <= 2 * threshold / 3;

    if (verticalSwipe)
        processScroll(-distY);
});

// Resize event
//window.addEventListener('resize', function () {
//    var currHelloStyle = helloCard.style.display;
//    var currAboutStyle = aboutCard.style.display;
//    var currProjectsStyle = projectsCard.style.display;
//
//    helloCard.style.display = "grid";
//    aboutCard.style.display = "grid";
//    projectsCard.style.display = "flex";
//
//    pageSetup();
//
//    helloCard.style.display = currHelloStyle;
//    aboutCard.style.display = currAboutStyle;
//    projectsCard.style.display = currProjectsStyle;
//})

// Window setup
window.addEventListener('load', function() {
    pageSetup();
    projectsCard.style.display = "none";
})
