const closebtn = document.querySelector("#close-btn");
const informationpan = document.getElementById("information");

closebtn.addEventListener("click", () => {
  informationpan.classList.toggle("opacity-0");
  informationpan.classList.toggle("inform-animate");
  tile.classList.toggle("tile-animate-none");
});

// const equosistab = document.querySelector(".main-website");
// const tile = document.getElementById("tile");

// equosistab.addEventListener("click", () => {
//   informationpan.classList.toggle("opacity-0");
//   informationpan.classList.toggle("inform-animate");
//   tile.classList.toggle("tile-animate-none");
// });
