// Setup Feather icons
import feather from "feather-icons";
feather.replace();

// Mark as active the current page in the navbar
const links = document.querySelectorAll("nav ul a");
links.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// Open and close the mobile menu
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("open");
});

// Setup Siema slider
import Siema from "siema";
const mySiema = new Siema({
  loop: true,
});
document.querySelector(".prev").addEventListener("click", () => mySiema.prev());
document.querySelector(".next").addEventListener("click", () => mySiema.next());
