function exitAnimation() {
    let panel = document.getElementById("panel");
    panel.style.animation = "screenclose 1s forwards";

    setTimeout(() => {
        document.location = "./index2.html";
    }, 1000);
}
