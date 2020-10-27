const menuToggle = document.querySelector("#menu-toggle");
const activeElements = document.querySelectorAll(".active-element");

const toggledMenu = menuToggle.addEventListener("click", () => {
    for(let i = 0; i < activeElements.length; i++) {
        activeElements[i].classList.toggle("active");
    }
});