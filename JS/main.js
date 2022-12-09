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
  informationpan.classList.toggle("scale-0");
  informationpan.classList.toggle("inform-animate");
  tile.classList.toggle("tile-animate-none");
});

const equosistab = document.querySelector(".main-website");
const tile = document.getElementById("tile");

equosistab.addEventListener("click", () => {
  informationpan.classList.toggle("scale-0");
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

var elements = document.getElementsByClassName("child");
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    // remove class from sibling

    var el = elements[0];
    while (el) {
      if (el.tagName === "DIV") {
        //remove class
        el.classList.remove("tab-highlight");
      }
      // pass to the new sibling
      el = el.nextSibling;
    }

    this.classList.add("tab-highlight");
  };
}

const tab1 = document.getElementById("tab1");
const tab2 = document.getElementById("tab2");
const tab3 = document.getElementById("tab3");
const rightside = document.getElementById("right-side");
const equosisspace = document.getElementById("equosis-space");
const gamespace = document.getElementById("game-space");

tab1.addEventListener("click", () => {
  equosisspace.classList.remove("opacity-0");
  gamespace.classList.add("opacity-0");
});
tab2.addEventListener("click", () => {
  equosisspace.classList.add("opacity-0");
  gamespace.classList.remove("opacity-0");
});
