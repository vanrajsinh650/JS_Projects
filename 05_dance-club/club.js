const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;

const startChanging = function () {
    if (!intervalId) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColor();
        }, 50);
    }
};

const stopChanging = function () {
    clearInterval(intervalId);
    intervalId = null;
};

const video1 = document.getElementById("dancevideo1");
const video2 = document.getElementById("dancevideo2");
const video3 = document.getElementById("dancevideo3");
const videocontainer = document.getElementById("video-container");
const music = document.getElementById("danceaudio");


function startshow() {
    videocontainer.style.display = "flex";
    video1.play();
    video2.play();
    video3.play();
    music.volume = 0.7;
    music.play().catch(e => console.log("autoplay blocked"));
}

function stopshow() {
    video1.pause();
    video1.currentTime = 0;
    video2.pause();
    video2.currentTime = 0;
    video3.pause();
    video3.currentTime = 0;
    music.pause();
    music.currentTime = 0;
    videocontainer.style.display = "none";
}

document.querySelector('#start').addEventListener('click', startChanging);
document.querySelector('#stop').addEventListener('click', stopChanging);
