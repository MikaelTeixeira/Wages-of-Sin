const trailer = document.getElementById("game-trailer");
const trailerBox = document.getElementById("game-trailer-div");
const playButton = document.getElementById("trailer-play-button");

if (trailer && trailerBox && playButton) {
    const showOverlay = () => {
        playButton.classList.remove("is-hidden");
        trailerBox.classList.remove("is-playing");
        trailer.controls = false;
    };

    const hideOverlay = () => {
        playButton.classList.add("is-hidden");
        trailerBox.classList.add("is-playing");
        trailer.controls = true;
    };

    playButton.addEventListener("click", () => {
        hideOverlay();
        trailer.play();
    });

    trailer.addEventListener("pause", showOverlay);

    trailer.addEventListener("ended", () => {
        showOverlay();
        trailer.currentTime = 0;
    });

    trailer.addEventListener("play", hideOverlay);
}
