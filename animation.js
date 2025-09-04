import {animate} from "motion"

window.addEventListener("DOMContentLoaded", () => {
  const titre = document.querySelector(".pseudo");
  animate(titre, { x: [ -100, 0 ], opacity: [ 0, 1 ] }, { duration: 1 });
});