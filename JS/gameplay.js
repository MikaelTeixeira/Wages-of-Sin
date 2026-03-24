const trailer = document.getElementById("game-trailer");
const playButton = document.getElementById("trailer-play-button");
const trailerBox = document.getElementById("game-trailer-div");

if (trailer && playButton && trailerBox) {
    const syncButtonState = () => {
        playButton.classList.toggle("is-hidden", !trailer.paused);
        trailerBox.classList.toggle("is-playing", !trailer.paused);
    };

    playButton.addEventListener("click", async () => {
        try {
            trailer.controls = true;
            await trailer.play();
            syncButtonState();
        } catch (error) {
            console.error("Unable to play trailer:", error);
        }
    });

    trailer.addEventListener("play", syncButtonState);
    trailer.addEventListener("pause", syncButtonState);
    trailer.addEventListener("ended", syncButtonState);

    syncButtonState();
}
