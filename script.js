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

const navContainer = document.querySelector(".desktop-nav");
const firstOnglet = document.querySelector(".first");
const secondOnglet = document.querySelector(".second");
const thirdOnglet = document.querySelector(".third");
const fourthOnglet = document.querySelector(".fourth");

function openNavBackground() {
  navContainer.style.background = `rgba(255, 255, 255, 1)`;
}

function closeNavBackground() {
  navContainer.style.background = `rgba(255, 255, 255, .7)`;
}

firstOnglet.addEventListener("mouseenter", openNavBackground);
firstOnglet.addEventListener("mouseleave", closeNavBackground);
secondOnglet.addEventListener("mouseenter", openNavBackground);
secondOnglet.addEventListener("mouseleave", closeNavBackground);
thirdOnglet.addEventListener("mouseenter", openNavBackground);
thirdOnglet.addEventListener("mouseleave", closeNavBackground);
fourthOnglet.addEventListener("mouseenter", openNavBackground);
fourthOnglet.addEventListener("mouseleave", closeNavBackground);
