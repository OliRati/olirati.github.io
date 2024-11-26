function exitAnimation() {
    let panel = document.getElementById("panel");
    panel.style.animation = "screenclose 1s forwards";

    setTimeout(() => {
        document.location = "./index2.html";
    }, 1000);
}

// wWit for all images on a page to load before starting animation
document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll("img");
    let totalImages = images.length;
    let imagesLoaded = 0;

    images.forEach(function (img) {
        if (img.complete) {
            incrementCounter();
        } else {
            img.addEventListener("load", incrementCounter);
            img.addEventListener("error", incrementCounter); // In case of an error, still increment the counter
        }
    });

    function incrementCounter() {
        imagesLoaded++;
        
        const progress = document.getElementById("progress");
        progress.innerText += ".";

        if (imagesLoaded === totalImages) {
            allImagesLoaded();
        }
    }

    function allImagesLoaded() {
        // All images have been loaded

        // Make animation visible
        let loading = document.getElementById("loading");
        loading.style.display = "none";
        let playing = document.getElementById("playing");
        playing.style.display = "block";

        // Start animation sequence
        playing.style.animationPlayState = "running";
    }
});
