document.addEventListener("DOMContentLoaded", (() => {
    //var source = "https://fine.sunproxy.net/file/NmdmRkJ6cXVIUnFJaEdRSlh0Z2tSTElRZnJUdis3L2VrVzEydzVHYnBZVlBGbmdhN0kwN1hNUThWNFBhME1OSHdwVU5PMFpFK0ZhQk5QSnRIRG4xdHU0eXVwTXY1ZktDbDlrSlYvQnR5WWc9/Bee_Gees_-_Stayin_Alive_2007_Remastered_Saturday_Night_Fever_Version_(ColdMP3.com).mp3"
    var source = "./media/song.mp3"
    var audio = document.createElement("audio");

    audio.autoplay = true;
    audio.src = source;

    var btnReady = document.getElementById('btn-ready');

    btnReady.onclick = (() => {
        audio.onplaying = (() => {
            var wrapperBtnReady = document.getElementById('wrapper-btn-ready');
            var gifWalker = document.getElementById('gif-walker');

            wrapperBtnReady.style.display = "none";
            gifWalker.style.display = "block";
            gifWalker.style.position = 0;
        })
        audio.load()
    });
}));
