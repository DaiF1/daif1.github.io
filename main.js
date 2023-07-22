import './style.css'

const helloCard = document.querySelector("#hello-card");
const aboutCard = document.querySelector("#about-card");
const projectsCard = document.querySelector("#projects-card");

projectsCard.style.display = "none";
aboutCard.style.display = "none";

var scroll = 0;

addEventListener("wheel", (e) => {
    scroll += e.deltaY;

    if (scroll < 0)
        scroll = 0;
    else if (scroll > 48000)
        scroll = 48000;

    if (scroll >= 32000) {
        projectsCard.style.display = "block";
        aboutCard.style.display = "none";
    }
    else if (scroll >= 16000) {
        projectsCard.style.display = "none";
        aboutCard.style.display = "grid";
        helloCard.style.display = "none";
    }
    else {
        aboutCard.style.display = "none";
        helloCard.style.display = "grid";
    }



    // Hello card Animation
    var house = helloCard.querySelector(".house-container");

    helloCard.style.transformOrigin =
        `${house.offsetLeft + (window.innerWidth * 5.2 / 100)}px ${house.offsetTop + (window.innerWidth * 5 / 100)}px`
    helloCard.style.transform = `scale(${1 + scroll / 1000})`

    var dinoHello = helloCard.querySelector("#hello-dino");
    var houseDoor = house.querySelector(".left-side");
    dinoHello.style.left = `${-scroll / 850 + 8}vw`;

    var dinoRight = dinoHello.getBoundingClientRect().right;
    var houseRight = houseDoor.getBoundingClientRect().right;
    if (houseRight < dinoRight)
        dinoHello.style.opacity = 1;
    else
        dinoHello.style.opacity = 0;
});
