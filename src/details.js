// Setup Siema slider
import Siema from "siema";
const mySiema = new Siema({
  loop: true,
});
document.querySelector(".prev").addEventListener("click", () => mySiema.prev());
document.querySelector(".next").addEventListener("click", () => mySiema.next());
