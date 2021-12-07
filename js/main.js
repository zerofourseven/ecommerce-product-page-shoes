
/* Switches sidenav from expanded to non-expanded state. */
function openSideNav() {
  document.getElementById("sidenav").style.width = "30rem";
  document.getElementById("shadow").style.visibility = "visible";
 document.getElementById("shadow").style.opacity = "1";
  
}

function closeSideNav() {
  document.getElementById("sidenav").style.width = "0";
 document.getElementById("shadow").style.visibility = "hidden";
 document.getElementById("shadow").style.opacity = "0";
}


/* For the shopping cart amount button */
function addAmount(){
  if(document.getElementById("item-amount").innerHTML < 99)
    document.getElementById("item-amount").innerHTML++; 
}

function subAmount() {
  if(document.getElementById("item-amount").innerHTML > 0)
    document.getElementById("item-amount").innerHTML--; 
}


/* TODO code for shopping cart amount badge */

/* TODO code for shopping cart display */

/* for mobile image gallery */
let slideIndex = 1;
showSlides(slideIndex);


function changeSlides(n) {
  showSlides(slideIndex += n);
}

/* Allows slides to be changed */
function showSlides(n){
  let slides = document.getElementsByClassName("slideshow__image");

  if (n > slides.length) slideIndex = 1;
  if(n < 1) slideIndex = slides.length;
  for(let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";


}

/* TODO code for lightbox image gallery */
