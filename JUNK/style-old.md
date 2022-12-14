/_ FONTS _/
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Raleway:wght@300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;700;900&display=swap");

- {
  overflow-x: hidden;
  padding: 0;
  margin: 0;
  }

section,
div,
h1,
h2,
h3 {
overflow: hidden;
}

/_ NAVBAR _/
.navbar {
height: 54px;

position: sticky;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #111111;

height: auto;
color: #fff;
overflow-y: hidden;
}

.nav-list {
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 764px;

position: relative;
width: 82%;
height: 70px;

animation: navlist-translateY 0.5s ease-in-out backwards;
}

@keyframes navlist-translateY {
0% {
transform: translateY(-100%);
overflow-y: hidden;
filter: blur(5px);
}
100% {
transform: translateY(0);
overflow-y: hidden;
filter: blur(0px);
}
}

.nav-list h1 {
position: absolute;
width: 128px;
height: 70px;
left: 0px;

font-family: "Pacifico";
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 70px;
display: flex;
align-items: center;
text-align: center;

background: linear-gradient(
114.3deg,
#35def5 -34.82%,
rgba(73, 110, 167, 0.5) 224.97%
);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;

/_ Inside auto layout _/

flex: none;
order: 0;
flex-grow: 0;
}

.nav-list li {
width: 95%;
height: 24px;

/_ Inside auto layout _/

flex: none;
order: 1;
flex-grow: 0;
}
.nav-list li a {
text-decoration: none;
position: absolute;
width: 76px;
height: 24px;
top: 23px;

font-family: "Inter";
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;

color: #ffffff;
cursor: pointer;
transition: 0.3s all ease;
}

.nav-item {
padding: 0;
margin: 0;
width: auto;
}

.nav-list li a:hover {
color: rgb(218, 200, 200);
}

.nav-list li:nth-child(2) a {
right: 321px;
/_ top: 44px; _/
}
.nav-list li:nth-child(3) a {
right: 227px;
/_ top: 44px; _/
}

.nav-list li:nth-child(4) a {
/_ width: 77px;
height: 24px; _/
right: 113px;
/_ top: 44px; _/
}
.nav-list li:nth-child(5) a {
right: 0px;
/_ top: 44px; _/
}

#search {
width: 232px;
height: 54px;
right: 142px;
bottom: 2px;

background: rgba(255, 255, 255, 0.7);
border-radius: 20px;
}

.rightNav {
width: 400px;
padding-left: 800px;
margin-top: 29px;
justify-content: center;
align-items: center;
}

.rightNav input {
position: absolute;
}

.rightNav img {
position: absolute;
width: 54px;
height: 54px;
right: 66px;
bottom: 3px;
}

/_ HOME _/
.home {
position: relative;
height: 100vh;

background: #111111;
}
.construct-warn {
position: fixed;
width: 100%;
height: 20px;
background-color: #000000;
bottom: 0;
overflow: hidden;
justify-content: center;
align-items: center;
}
.construct-warn h1 {
/_ position: absolute; _/
color: white;
font-family: "Raleway";
font-style: normal;
font-weight: 500;
font-size: 15px;
margin-left: 20px;
width: auto;
justify-self: center;
align-self: center;
bottom: 2px;
}
.construct-warn i {
position: absolute;
color: white;
right: 5px;
}
#main-logo_blur {
position: absolute;
width: 352.02px;
height: 271.36px;
left: 97px;
top: 173px;

filter: blur(4px);
}
#main-logo_normal {
position: absolute;
width: 351.93px;
height: 271.2px;
left: 240px;
top: 269px;
}
#home-sidebar {
position: absolute;
width: 416.21px;
height: 522.29px;
left: -70px;
top: calc(50% - 522.29px / 2 - 34.66px);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#title {
position: absolute;
width: 201px;
height: 61px;
left: 165px;
bottom: 900px;

font-family: "Inter";
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 61px;
/_ identical to box height _/

display: flex;
align-items: center;
text-align: center;

color: #ffffff;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
filter: blur(3.5px);
animation: name-blur-animate 2s forwards;
}

#hiring-tag {
position: fixed;
width: 116px;
height: 24px;
left: 12px;
bottom: 9.6px;

font-family: "Inter";
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;

color: white;
}

#hiring-tag span {
animation: hiring-blink 0.7s infinite ease;
}

@keyframes hiring-blink {
0% {
opacity: 1;
}
50% {
opacity: 0;
}
100% {
opacity: 1;
}
}

@keyframes name-blur-animate {
0% {
filter: blur(3.5px);
}
100% {
filter: blur(0);
}
}

#curve-1 {
position: absolute;
width: 438.54px;
height: 413.34px;
right: 70.37px;
top: calc(50% - 413.34px / 2 - 18.13px);
animation: curve_transform 0.5s ease;
}

@keyframes curve_transform {
0% {
transform: translateX(100%);
opacity: 0;
}
50% {
opacity: 1;
}
100% {
transform: translateX(0);
}
}

#coding-icon {
position: absolute;
width: 339px;
height: 213px;
right: 146px;
top: calc(50% - 213px / 2 - 0.3px);
animation: coding-icon-opacity 1s ease;
}

@keyframes coding-icon-opacity {
0% {
transform: translateY(20%);
opacity: 0;
}
100% {
transform: translateY(0);
opacity: 1;
}
}

#coding-icon circle {
animation: coding-icon_icon-pop 1s ease infinite;
cursor: pointer;
}

@keyframes coding-icon_icon-pop {
0% {
transform: scale(1);
}
50% {
transform: scale(1.05);
}
100% {
transform: scale(1);
}
}

.hamburger {
opacity: 0;
}

/_ ABOUT _/
.about {
background-color: #111111;

height: 1329px;
}
#about-h1-1 {
position: relative;
height: 61px;
left: calc(50% - 192px / 2);
top: calc(50% - 61px / 2 - 391px);

font-family: "Inter";
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 61px;
/_ identical to box height _/

display: flex;
align-items: center;
text-align: center;

color: #ffffff;
}
#about-h1-1 span {
color: #e24f4f;
margin: 10px;
}
.about h1:nth-child(2) {
position: relative;
/_ width: 230px; _/
height: 115px;
left: calc(50% - 223px / 2 - 0.5px);
top: calc(50% - 115px / 2 - 303px);

font-family: "Pacifico";
font-style: normal;
font-weight: 400;
font-size: 70px;
line-height: 123px;
display: flex;
align-items: center;
text-align: center;

background: linear-gradient(
114.3deg,
#35def5 -34.82%,
rgba(73, 110, 167, 0.5) 224.97%
);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
}
.about h2:nth-child(3) {
position: relative;
width: 313px;
height: 50px;
left: 159px;
top: calc(50% - 50px / 2 - 198.5px);

font-family: "Inter";
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;

color: #ffffff;
}
.container {
position: absolute;
width: 294px;
height: 446px;
left: calc(50% - 294px / 2 - 489px);
margin-top: calc(50% - 446px / 2 + 148.5px);

background: linear-gradient(
252.3deg,
#1e1e1e -9.76%,
rgba(30, 30, 30, 0) 116.72%
);
border-radius: 40px;
}
.container2 {
position: absolute;
width: 294px;
height: 446px;
left: calc(50% - 294px / 2);
margin-top: calc(50% - 446px / 2 + 148.5px);

background: linear-gradient(
168.97deg,
#1e1e1e 8.16%,
rgba(30, 30, 30, 0) 117.22%
);
border-radius: 40px;
}
.container3 {
position: absolute;
width: 294px;
height: 446px;
left: calc(50% - 294px / 2 + 489px);
margin-top: calc(50% - 446px / 2 + 148.5px);

background: linear-gradient(
112.26deg,
#1e1e1e -9.57%,
rgba(30, 30, 30, 0) 109.1%
);
border-radius: 40px;
overflow: hidden;
}

.container3_normal {
animation: container3_normal 1s 1 ease-in-out;
}

@keyframes container3_normal {
0% {
height: 600px;
}
100% {
height: 455px;
}
}

.animate-height-con {
animation: animate-container-height 1s ease forwards !important;
}

@keyframes animate-container-height {
0% {
height: 455px;
}
100% {
height: 600px;
}
}

#drop-down {
cursor: pointer;
position: absolute;
left: 43.54%;
right: 43.54%;
top: 89.23%;
bottom: 6.59%;
transition: all 1.2s ease;
}

.dropdown-highlight {
animation: dropdown-highlight 1s infinite ease;
}

@keyframes dropdown-highlight {
0% {
transform: translateY(0);
}
50% {
transform: translateY(30%);
}
75% {
transform: translateY(0);
}
100% {
transform: translateY(0);
}
}

.drop-down_normal {
animation: drop-down_normal_animate 1s 1 ease;
}

@keyframes drop-down_normal_animate {
0% {
rotate: 180deg;
}
100% {
rotate: 0;
}
}

.drop-down-turn {
animation: drop-down-turn 1.3s 1 ease forwards;
}

@keyframes drop-down-turn {
0% {
rotate: 0;
}
100% {
rotate: 180deg;
}
}

#web-dev,
#game-dev,
#design-dev {
position: absolute;
height: 36px;
left: calc(50% - 285px / 2 - 0.5px);
top: calc(50% - 36px / 2 + 18.5px);

font-family: "Inter";
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 36px;
display: flex;
align-items: center;
text-align: center;

color: #ffffff;
}

.container h2,
.container2 h2,
.container3 h2 {
position: absolute;
width: 237px;
height: 126px;
left: calc(50% - 237px / 2 - 0.5px);
top: calc(50% - 126px / 2 + 109.5px);

font-family: "Inter";
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
align-items: center;

color: #ffffff;
}

.h2-text-animate {
animation: container-h2-text 1.2s 1 ease;
}

@keyframes container-h2-text {
0% {
transform: translateX(0%);
}
50% {
transform: translateX(50%);
}
100% {
transform: translateX(0%);
}
}

.container3 h3 {
margin-top: 460px;
font-family: "Inter";
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
align-items: center;

color: #ffffff;
}

.container3 h3 p {
font-weight: 400 !important;
}

.container img,
.container2 img,
.container3 img {
position: absolute;
width: 178px;
height: 178px;
left: 58px;
top: 50px;
}

.container button,
.container2 button,
.container3 button {
position: absolute;
width: 225px;
height: 34px;
left: calc(50% - 225px / 2 - 0.5px);
bottom: 16px;

background: linear-gradient(
99.27deg,
#d33434 7.18%,
rgba(211, 52, 52, 0) 108.64%
);
border-radius: 20px 20px 40px 40px;
cursor: pointer;
border-color: #1e1e1e;

align-items: center;
justify-content: center;
text-align: center;
}

.container button h3,
.container2 button h3,
.container3 button h3 {
position: absolute;
height: 24px;
left: calc(50% - 127px / 2);
top: calc(50% - 24px / 2);

font-family: "Inter";
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;

color: #ffffff;

transition: all 0.3s ease;
}

.container button h3:hover,
.container2 button h3:hover {
color: #bbbbbb;
}

/_ ABOUT _/
.projects {
height: 713.6px;

padding-top: 50px;

background: #111111;
}
.projects h1 {
position: relative;
width: 480px;
left: calc(50% - 480px / 2);
top: 53px;

font-family: "Raleway";
font-style: normal;
font-weight: 800;
font-size: 48px;
line-height: 56px;
display: flex;
align-items: center;
text-align: center;

background: linear-gradient(
90.81deg,
#494949 -25.53%,
rgba(255, 255, 255, 0) 119.87%
);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
}
.projects h2 {
position: relative;
top: 170px;
font-family: "Raleway";
font-weight: 100;
font-style: italic;
font-size: 15px;
color: #fff;
}
.projects h3 {
position: relative;
width: 366px;
height: 35px;
left: calc(50% - 366px / 2);
top: calc(50% - 35px / 2 - 47.3px);

font-family: "Raleway";
font-style: normal;
font-weight: 500;
font-size: 30px;
line-height: 35px;
display: flex;
align-items: center;
text-align: center;

color: #ffffff;
}
.main-website {
position: relative;
left: 96px;
cursor: pointer;
}
.main-website:hover,
.games:hover {
scale: 105%;
transition: 0.4s ease-in;
}
.games {
position: relative;
left: 300px;

cursor: pointer;
}

#tile {
width: 243px;
height: 276px;
top: 161px;
}

@keyframes tile-highlight {
0% {
scale: 1;
}
50% {
scale: 1.05;
}
100% {
scale: 1;
}
}
.tile-animate-none {
animation: none !important;
}

#information {
position: fixed;
right: 78px;
top: calc(50% - 569px / 2 - 0.3px);

border: 4px solid rgba(83, 83, 83, 0.5);
backdrop-filter: blur(15px);
/_ Note: backdrop-filter has minimal browser support _/

border-radius: 50px;
overflow-y: hidden;
}

.inform-animate {
animation: information-animate 1.2s cubic-bezier(0, 1.55, 0.88, 0.18) forwards;
}

@keyframes information-animate {
0% {
height: 0;
width: 0;
}
100% {
width: 979px;
height: 569px;
}
}

.scale-0 {
cursor: auto;
animation: scale-animate 2s 1 cubic-bezier(0.81, -0.13, 0.43, 0.97) forwards;
}

@keyframes scale-animate {
0% {
width: 979px;
height: 569px;
}
100% {
height: 0;
width: 0;
opacity: 0;
}
}

.right-side {
position: absolute;
width: 608px;
height: 569px;
right: 0px;
top: calc(50% - 569px / 2);

background: rgba(30, 30, 30, 0.6);
backdrop-filter: blur(5px);
/_ Note: backdrop-filter has minimal browser support _/

border-radius: 0px 50px 50px 0px;
}
.left-side {
position: absolute;
width: 371px;
height: 569px;
right: 608px;
top: calc(50% - 569px / 2);

background: #000000;
opacity: 0.5;
border-radius: 50px 0px 0px 50px;
}
#close-btn {
position: absolute;
width: 29px;
height: 29px;
left: 55px;
top: 48px;
cursor: pointer;
}
#minimize-btn {
position: absolute;
width: 29px;
height: 29px;
left: 106px;
top: 48px;
cursor: pointer;
}
#maximize-btn {
position: absolute;
width: 29px;
height: 29px;
left: 157px;
top: 48px;
}

.right-side img:nth-child(1) {
position: absolute;
width: 173px;
height: 44px;
left: calc(50% - 173px / 2 - 194.5px);
top: calc(50% - 44px / 2 + 238.5px);

background: linear-gradient(94.2deg, #53bbec 7.54%, #a5c4ff 96.5%);
border-radius: 20px;

cursor: pointer;
transition: 0.4s ease;
}

.right-side img:nth-child(1):hover {
scale: 1.2;
}

.tab {
width: 309px;
height: 45px;
left: 30px;
position: relative;
top: 116px;
margin: 10px;
overflow-y: hidden;
cursor: pointer;
}
.tab-highlight {
width: 309px;
height: 45px;
left: 30px;
position: relative;
top: 116px;
margin: 10px;
overflow-y: hidden;
cursor: pointer;
background: rgba(171, 171, 171, 0.5);
border-radius: 10px;
animation: tab-highlight-change 1s cubic-bezier(0, 0.59, 0.88, 0.31);
}

@keyframes tab-highlight-change {
0% {
width: 309px;
}
50% {
width: 320px;
}
100% {
width: 309px;
}
}

.tab h1 {
position: absolute;
width: 97px;
height: 30px;
left: 21px;
top: 8px;

font-family: "Inter";
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 30px;
display: flex;
align-items: center;
text-align: center;

color: #000000;
stroke: 2px solid #000000;
}

.equosis-space h1 {
position: absolute;
height: 42px;
left: 42px;
top: 85px;

font-family: "Inter";
font-style: normal;
font-weight: 900;
font-size: 35px;
line-height: 42px;
display: flex;
align-items: center;
text-align: center;

color: #ffffff;
}

.equosis-space img:nth-child(2) {
position: absolute;
width: 243px;
height: 276px;
right: 45px;
top: calc(50% - 276px / 2 + 0.5px);

background: rgba(40, 40, 40, 0.5);
border-radius: 40px;
}

.equosis-space img:nth-child(3) {
position: absolute;
width: 266px;
left: calc(50% - 266px / 2 - 128px);
top: calc(50% - 148px / 2 + 0.5px);
}

.opacity-0 {
opacity: 0;
transition: all 0.3s ease;
}

.game-space h1 {
position: absolute;
width: 370px;
height: 42px;
left: 43px;
top: 87px;

font-family: "Inter";
font-style: normal;
font-weight: 900;
font-size: 35px;
line-height: 42px;
display: flex;
align-items: center;
text-align: center;

color: #ffffff;
}
.game-space h2 {
position: absolute;
width: 266px;
height: 148px;
left: calc(50% - 266px / 2 - 128px);
top: calc(50% - 148px / 2 + 0.5px);

font-family: "Inter";
font-style: normal;
font-weight: 400;
font-size: 35px;
line-height: 42px;
display: flex;
align-items: center;

color: #ffffff;
}

/_ CONTACT _/
.contact {
height: 1095px;

background: #111111;
align-items: center;
justify-content: center;
text-align: center;
display: flex;
flex-direction: column;
}
#query-form {
cursor: pointer;
position: relative;
padding: 22px 46px;
font-size: 28px;
text-transform: uppercase;
color: #ffffff;
background: rgba(255, 255, 255, 0.1);
border: 3px solid rgba(255, 255, 255, 0.2);
border-radius: 18px;
transition: all 0.4s ease;
overflow: hidden;
top: 0px;
}

#query-form:hover {
z-index: 1;
border-color: transparent;
background: linear-gradient(
90deg,
#f9d923,
#00a19d,
#0c87b7,
#cb49ff,
#ff6666,
#f9d923
);
background-size: 400%;
box-shadow: 0 0 15px rgb(2, 4, 24);
animation: glow 12s linear forwards;
}

@keyframes glow {
from {
background-position: 0%;
}

to {
background-position: 400%;
}
}

#query-form::before {
content: "";
position: absolute;
top: -1px;
right: -1px;
bottom: -1px;
left: -1px;
background: inherit;
filter: blur(36px);
opacity: 0;
transition: 0.4s ease-out;
}

#query-form:hover::before {
opacity: 1;
z-index: -1;
}

/_ RESPONSIVENESS _/

@media only screen and (max-width: 400px) {
#title {
position: absolute;
width: 201px;
height: 61px;
left: calc(50% - 201px / 2 + 0.5px);
top: calc(50% - 61px / 2 - 231.5px);

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 61px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;

}
#curve-1 {
opacity: 0;
width: 0;
height: 0;
}
#coding-icon {
opacity: 0;
animation: none;
}
#main-logo_normal {
position: absolute;
width: 351.93px;
height: 271.2px;
left: 174px;
top: 255px;
}
#main-logo_blur {
position: absolute;
width: 352.02px;
height: 271.36px;
left: 31px;
top: 159px;
}

.hide {
opacity: 0;
}

#closed {
position: absolute;
}

#opened {
position: absolute;
}

.hamburger {
position: absolute;
width: 47px;
height: 47px;
right: 15px;
top: 14px;
opacity: 1;
cursor: pointer;
}
.nav-list {
opacity: 0;
}

.nav-toggle {
position: relative;
width: 328px;
height: 380px;
left: calc(50% - 328px / 2);
top: 64px;

    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 20px;
    opacity: 1;

}

.nav-list li {
list-style: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 15px 106px;
gap: 10px;

    position: absolute;
    width: 327px;
    height: 379px;
    /* left: calc(50% - 327px / 2); */
    top: 64px;

    background: rgba(0, 0, 0, 0.5);
    /* backdrop-filter: blur(5px); */
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 20px;

}
.nav-list li a {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px;
gap: 46px;

    width: 115px;
    height: 349px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    color: #fff;

}

/_ ABOUT _/
.container {
position: relative;
width: 294px;
height: 455px;
left: calc(50% - 294px / 2);
top: calc(50% - 455px / 2 - 475px);

    background: linear-gradient(
      252.3deg,
      #1e1e1e -9.76%,
      rgba(30, 30, 30, 0) 116.72%
    );
    border-radius: 40px;

}
.container2 {
position: relative;
width: 294px;
height: 455px;
left: calc(50% - 294px / 2);
top: calc(50% - 455px / 2);

    background: linear-gradient(
      168.97deg,
      #1e1e1e 8.16%,
      rgba(30, 30, 30, 0) 117.22%
    );
    border-radius: 40px;

}
.container3 {
position: absolute;
width: 294px;
height: 455px;
left: calc(50% - 294px / 2);
top: calc(50% - 455px / 2 + 516px);

    background: linear-gradient(360deg, #1e1e1e 0%, rgba(30, 30, 30, 0) 100%);
    border-radius: 40px;

}
}
