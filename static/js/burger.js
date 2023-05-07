const navBurger = document.querySelector(".burger");
const navLinks = document.querySelector(".burger-menu");

function navActiveToggler() {
    navLinks.classList.toggle("burger-menu__active");
}

navBurger.addEventListener("click", navActiveToggler);