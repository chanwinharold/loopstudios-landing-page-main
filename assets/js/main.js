const btnMenuHamburger = document.querySelector('.navbar__menu-hamburger')
const btnMenuClose = document.querySelector(".navbar__menu-close")
const navbar = document.querySelector(".main-container__navbar")


btnMenuHamburger.addEventListener("click", () => {
    navbar.classList.add('on-screen')
})
btnMenuClose.addEventListener("click", () => {
    navbar.classList.remove('on-screen')
})