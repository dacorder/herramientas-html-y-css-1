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
