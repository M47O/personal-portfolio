const hamburger = document.querySelector("#hamburger")
const hamburgerLines = document.querySelectorAll("#hamburger>div")
const menu = document.querySelector("#menu")
const menuLinks = document.querySelectorAll(".menuLink")
const body = document.querySelector("body")
const moon = document.querySelector("#moon")
let darkMode = localStorage.getItem("dark")

//Dark Mode:
const enableDarkMode = () => {
    body.classList.add("dark")
    localStorage.setItem("dark", "enabled")
}
const disableDarkMode = () => {
    body.classList.remove("dark")
    localStorage.setItem("dark", "disabled")
}

if (darkMode == "enabled") {
    enableDarkMode()
}

moon.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark")
    if (darkMode == "enabled") {
        disableDarkMode()
    } else {
        enableDarkMode()
    }
})

hamburger.addEventListener("click", function () {
    menu.classList.toggle("hidden")
    hamburgerLines.forEach(e => e.classList.toggle("bg-black"))
    hamburgerLines.forEach(e => e.classList.toggle("bg-white"))
})

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.toggle("hidden")
        hamburgerLines.forEach(e => e.classList.toggle("bg-black"))
        hamburgerLines.forEach(e => e.classList.toggle("bg-white"))
    })
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
