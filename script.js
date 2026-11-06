
/* =====================================
   GET HTML ELEMENTS
===================================== */

const welcomeScreen = document.getElementById("welcomeScreen");
const letterScreen = document.getElementById("letterScreen");
const goodbyeScreen = document.getElementById("goodbyeScreen");

const floatingLayer = document.getElementById("floatingLayer");


/* =====================================
   BUTTONS
===================================== */

const openLetterButton = document.getElementById("openLetterButton");
const moreLoveButton = document.getElementById("moreLoveButton");
const goodbyeButton = document.getElementById("goodbyeButton");

const backButton = document.getElementById("backButton");
const replayButton = document.getElementById("replayButton");
const homeButton = document.getElementById("homeButton");


/* =====================================
   PAGE TRANSITIONS
===================================== */

function changePage(currentPage, nextPage) {

    currentPage.classList.remove("active");
    currentPage.setAttribute("aria-hidden", "true");

    nextPage.classList.add("active");
    nextPage.setAttribute("aria-hidden", "false");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================
   PAGE 1 -> PAGE 2
===================================== */

function showLetter() {

    changePage(welcomeScreen, letterScreen);

    showerOfLove(34);

}


/* =====================================
   PAGE 2 -> PAGE 3
===================================== */

function showGoodbye() {

    changePage(letterScreen, goodbyeScreen);

    showerOfLove(48);

}


/* =====================================
   BACK TO PAGE 1
===================================== */

function showWelcome() {

    if (letterScreen.classList.contains("active")) {

        changePage(letterScreen, welcomeScreen);

    } else if (goodbyeScreen.classList.contains("active")) {

        changePage(goodbyeScreen, welcomeScreen);

    }

}


/* =====================================
   CREATE FLOATING HEARTS
===================================== */

function createLoveParticle() {

    const particle = document.createElement("span");

    const symbols = [
        "♡",
        "♥",
        "✦",
        "✧"
    ];

    const colors = [
        "#f39ab5",
        "#f7c6d5",
        "#e8b83e",
        "#f4d36f",
        "#fff0a6"
    ];

    particle.className = "love-particle";

    particle.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.setProperty(
        "--x",
        `${Math.random() * 100}%`
    );

    particle.style.setProperty(
        "--size",
        `${14 + Math.random() * 23}px`
    );

    particle.style.setProperty(
        "--duration",
        `${4 + Math.random() * 4}s`
    );

    particle.style.setProperty(
        "--drift",
        `${-70 + Math.random() * 140}px`
    );

    particle.style.setProperty(
        "--particle-color",
        colors[Math.floor(Math.random() * colors.length)]
    );

    floatingLayer.appendChild(particle);

    particle.addEventListener(
        "animationend",
        () => {
            particle.remove();
        },
        { once: true }
    );

}


/* =====================================
   LOVE SHOWER EFFECT
===================================== */

function showerOfLove(amount = 18) {

    for (let i = 0; i < amount; i++) {

        window.setTimeout(
            createLoveParticle,
            i * 75
        );

    }

}


/* =====================================
   BUTTON EVENTS
===================================== */

// Open love letter
openLetterButton.addEventListener(
    "click",
    showLetter
);


// Send more love
moreLoveButton.addEventListener(
    "click",
    () => showerOfLove(42)
);


// Open final goodbye page
goodbyeButton.addEventListener(
    "click",
    showGoodbye
);


// Back to welcome page
backButton.addEventListener(
    "click",
    showWelcome
);


// Read letter again
replayButton.addEventListener(
    "click",
    showLetter
);


// Back home from goodbye page
homeButton.addEventListener(
    "click",
    showWelcome
);


/* =====================================
   CLICK LETTER TO CREATE HEARTS
===================================== */

letterScreen.addEventListener(
    "click",
    (event) => {

        if (event.target.closest("button")) {
            return;
        }

        showerOfLove(5);

    }
);


/* =====================================
   CLICK GOODBYE PAGE TO CREATE HEARTS
===================================== */

goodbyeScreen.addEventListener(
    "click",
    (event) => {

        if (event.target.closest("button")) {
            return;
        }

        showerOfLove(8);

    }
);
