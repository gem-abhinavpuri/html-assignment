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

function tab1() {
    const text = document.getElementById("text-area");
    const tabstatus1 = document.getElementById("tab1");
    const tabstatus2 = document.getElementById("tab2");
    const tabstatus3 = document.getElementById("tab3");

    text.innerHTML = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williams burg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui inure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";
    tabstatus1.classList.add("active");
    tabstatus2.classList.remove("active");
    tabstatus3.classList.remove("active");
}


function tab2() {
    const text = document.getElementById("text-area");
    const tabstatus1 = document.getElementById("tab1");
    const tabstatus2 = document.getElementById("tab2");
    const tabstatus3 = document.getElementById("tab3");

    text.innerHTML = "Hey you are now on second tab.";
    tabstatus1.classList.remove("active");
    tabstatus2.classList.add("active");
    tabstatus3.classList.remove("active");
}

function tab3() {
    const text = document.getElementById("text-area");
    const tabstatus1 = document.getElementById("tab1");
    const tabstatus2 = document.getElementById("tab2");
    const tabstatus3 = document.getElementById("tab3");

    text.innerHTML = "Hey you are now on Third tab.";
    tabstatus1.classList.remove("active");
    tabstatus2.classList.remove("active");
    tabstatus3.classList.add("active");

}