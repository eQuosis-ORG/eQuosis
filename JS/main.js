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
  container.classList.toggle("container3_normal");
  downarrow.classList.toggle("drop-down-turn");
  designh2.classList.toggle("h2-text-animate");
  designh2.classList.toggle("content-design-change");
  downarrow.classList.toggle("dropdown-highlight");
  downarrow.classList.toggle("drop-down_normal");
});

const closebtn = document.querySelector("#close-btn");
const informationpan = document.getElementById("information");

closebtn.addEventListener("click", () => {
  informationpan.classList.toggle("opacity-0");
  informationpan.classList.toggle("inform-animate");
  tile.classList.toggle("tile-animate-none");
});

const equosistab = document.querySelector(".main-website");
const tile = document.getElementById("tile");

equosistab.addEventListener("click", () => {
  informationpan.classList.toggle("opacity-0");
  informationpan.classList.toggle("inform-animate");
  tile.classList.toggle("tile-animate-none");
});

gsap.from("#title", {
  scrollTrigger: {
    scrub: true,
  },
  y: 500,
});

function sendEmail() {
  Email.send({
    secureToken: "268ea5ea-c4b4-495e-b6aa-85d7246978ae",
    To: "equosiscoders@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Email from Contact Form",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Query: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message sent"));
}
