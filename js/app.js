const ham = document.querySelector(".menu-button")

ham.addEventListener("click", toggleHamburger)

function toggleHamburger() {
  ham.classList.toggle("menu-button--active")
}