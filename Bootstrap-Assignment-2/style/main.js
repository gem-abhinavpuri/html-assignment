(function playvideo() {
    const videoPlayer = document.getElementById("videoPlayer");
    const playPauseButton = document.getElementById("playPauseButton");
    const screen1 = document.getElementById("video-overlay");
    const screen2 = document.getElementById("second-overlay");

    screen1.addEventListener("click", function () {
        if (videoPlayer.paused) {
            videoPlayer.play();
            playPauseButton.style = "visibility: hidden;"
            screen2.style = "visibility: hidden;"

        }
        else {
            videoPlayer.pause();
            playPauseButton.style = "visibility: visible;"
            screen2.style = "visibility: visible;"
        }
    });
})();
