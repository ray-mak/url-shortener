const hamburger = document.querySelector(".hamburger");
const infoContainer = document.querySelector(".info-container");

hamburger.addEventListener("click", () => {
    infoContainer.classList.toggle("active");
})

document.addEventListener("click", e => {
    const isHamburger = e.target.closest(".hamburger");
    if (!isHamburger && e.target.closest(".info-container") == null){
        infoContainer.classList.remove("active");
    }
})