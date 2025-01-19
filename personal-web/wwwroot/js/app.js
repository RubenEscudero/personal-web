//Burger menu
const menu = document.querySelector("navbar-burger");

function toggleMenu() {
    if (menu.classList.contains("is-active")) {
        menu.classList.remove("is-active");
    } else {
        menu.classList.add("is-active");
    }
}

menu.addEventListener("click", toggleMenu);
