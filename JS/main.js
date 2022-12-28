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

let tile = document.querySelectorAll("#tile");

function tilemax() {
  informationpan.classList.toggle("scale-0");
  informationpan.classList.toggle("inform-animate");
}
// tile.addEventListener("click", () => {
//   informationpan.classList.toggle("scale-0");
//   informationpan.classList.toggle("inform-animate");
// });

gsap.from("#title", {
  scrollTrigger: {
    scrub: true,
  },
  y: 800,
});

var elements = document.getElementsByClassName("child");
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    // remove class from sibling

    var el = elements[0];
    while (el) {
      if (el.tagName === "DIV") {
        el.classList.remove("tab-highlight");
      }
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

gsap.registerPlugin(Flip);

// const links = document.querySelectorAll(".tab h1");
// const activetab = document.querySelector("tab-highlight");

// links.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     gsap.to(links, { color: "#00000" });

//     if (document.activeElement === e.target) {
//       gsap.to(link, { color: "#000000" });
//     }

//     link.appendChild(activetab)
//   });
// });
