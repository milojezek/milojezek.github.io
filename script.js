// Navigation: Hamburger selections
const burger = document.querySelector("#hamburger-menu");
const ul = document.querySelector("nav ul");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
navLinks.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
);