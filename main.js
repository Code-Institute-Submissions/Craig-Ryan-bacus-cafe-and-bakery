const navBtn = document.querySelector(".nav-btn");

const navItems = document.querySelector(".navbar")

// Toggle
navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("open");
    navItems.classList.toggle("open");
})