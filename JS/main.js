const navclosed = document.querySelector("#closed");
const navopened = document.querySelector("#opened");
const hamburger = document.querySelector(".hamburger");
const navlist = document.querySelector("#nav-list");

hamburger.addEventListener("click", () => {
  navopened.classList.toggle("hide");
  navclosed.classList.toggle("hide");
  navlist.classList.toggle("nav-toggle");
});

const designh2 = document.getElementById("design_h2");
const downarrow = document.getElementById("drop-down");
const container = document.querySelector(".container3");

downarrow.addEventListener("click", () => {
  container.classList.toggle("animate-height-con");
  downarrow.classList.toggle("drop-down-turn");
  designh2.classList.toggle("h2-text-animate");
  designh2.classList.toggle("content-design-change");
});

gsap.from("#title", {
  scrollTrigger: {
    scrub: true,
  },
  y: 500,
});
