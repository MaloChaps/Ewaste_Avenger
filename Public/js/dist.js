// scroll reveal anime
const sr = ScrollReveal();
sr.reveal('#navRubrique', {
delay: 200,
duration: 1300,
distance: "100px",
origin: "bottom"
});

sr.reveal('#intro_logo', {
delay: 200,
duration: 1300,
distance: "100px",
origin: "bottom"
});

sr.reveal('#arme_logo', {
delay: 300,
duration: 1300,
distance: "100px",
origin: "bottom"
});

sr.reveal('.button-introduction', {
delay: 300,
duration: 1300,
distance: "100px",
origin: "bottom"
});

sr.reveal('#intro_title', {
delay: 300,
duration: 1300,
distance: "100px",
origin: "bottom"
});			


var navOpen = document.getElementById("navOpen");
var burgerNav = document.getElementById("burgerIcon");

function clickOpenMenu(){
   navOpen.classList.toggle("navOpen");
   burgerNav.classList.toggle("burgerClose");

   if (burgerNav.innerHTML === "Menu") {
      burgerNav.innerHTML = "Close";
  } else {
   burgerNav.innerHTML = "Menu";
  }
}


