document.addEventListener("DOMContentLoaded", (() => {
    var source = "./assets/walking_sound.mp3"
    var audio = document.createElement("audio");

    audio.autoplay = true;
    audio.loop = true;
    audio.src = source;
    audio.volume = 0.25;

    var btnReady = document.getElementById('btn-ready');

    btnReady.onclick = (() => {
        audio.onplaying = (() => {
            var wrapperBtnReady = document.getElementById('wrapper-btn-ready');
            var gifWalker = document.getElementById('gif-walker');

            wrapperBtnReady.style.display = "none";
            gifWalker.style.display = "flex";
            gifWalker.style.position = 0;
        })
        audio.load()
    });
}));
