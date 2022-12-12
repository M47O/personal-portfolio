const hamburger = document.querySelector("#hamburger")
const hamburgerLines = document.querySelectorAll("#hamburger>div")
const menu = document.querySelector("#menu")

hamburger.addEventListener("click", function () {
    menu.classList.toggle("hidden")
    hamburgerLines.forEach(e => e.classList.toggle("bg-black"))
    hamburgerLines.forEach(e => e.classList.toggle("bg-white"))
})

const ava = document.querySelector("#ava")
const hireme = document.querySelector("#hireme")

hireme.addEventListener("mouseover", () => {
    ava.src = "./img/ava-hireme.png"
})

hireme.addEventListener("mouseout", () => {
    ava.src = "./img/ava-neutral.png"
})

const nav = document.querySelector("#nav")

nav.addEventListener("mouseover", () => {
    ava.src = "./img/ava-lookup.png"
})

nav.addEventListener("mouseout", () => {
    ava.src = "./img/ava-neutral.png"
})
