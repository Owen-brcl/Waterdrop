const nav = document.querySelector(".slider-nav");
const navOpen = document.querySelector(".menu-burger-container");
const navClose = document.querySelector(".close-slider-nav");

let isNavActive = false;

function toggleNav() {
  isNavActive = !isNavActive;

  nav.style.left = `${isNavActive ? "0" : "-100%"}`;
}

navClose.addEventListener("click", toggleNav);
navOpen.addEventListener("click", toggleNav);
