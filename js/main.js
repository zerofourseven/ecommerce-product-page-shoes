
/* Switches sidenav from expanded to non-expanded state. */
function openSideNav() {
  document.getElementById("sidenav").style.width = "30rem";
  document.getElementById("shadow--sidenav").style.visibility = "visible";
 document.getElementById("shadow--sidenav").style.opacity = "1";
  
}

function closeSideNav() {
  document.getElementById("sidenav").style.width = "0";
 document.getElementById("shadow--sidenav").style.visibility = "hidden";
 document.getElementById("shadow--sidenav").style.opacity = "0";
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

/* code for shopping cart display */
function toggleCartCard() {
  if (document.getElementById("cart-card").style.display == "block"){
    document.getElementById("cart-card").style.display = "none";
  }
  else {
    document.getElementById("cart-card").style.display = "block";
  }
}

var cartItems = 0;
//for filling cart if items are present
function checkCart() {
  if(cartItems > 0) {
    //display certain elements
  }
  else {
    //hide certain elements, and fill 'cart-card__items' with 'Your cart is empty.'
  }
}



/* for mobile image gallery */
let slideIndex = 1;
showSlides(slideIndex);


function changeSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides(slideIndex = n);
}

/* Allows slides to be changed */
function showSlides(n){
  let slides = document.getElementsByClassName("slideshow__image");
  let slidesLightbox = document.getElementsByClassName("slideshow__image--lightbox");
  let thumbnails = document.getElementsByClassName("slideshow__thumbnail");
  let thumbnailsLightbox = document.getElementsByClassName("slideshow__thumbnail--lightbox ");

  if (n > slides.length) slideIndex = 1;
  if(n < 1) slideIndex = slides.length;
  for(let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
    slidesLightbox[i].style.display = "none";
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    thumbnailsLightbox[i].className = thumbnailsLightbox[i].className.replace(" active", "");
  }

  //display that image
  slides[slideIndex - 1].style.display = "block";
  slidesLightbox[slideIndex - 1].style.display = "block";
  //highlight thumbnail for desktop view
  thumbnails[slideIndex - 1].className += " active";
  thumbnailsLightbox[slideIndex - 1].className += " active";
}

/* code for lightbox image gallery */
/*const mediaQuery = window.matchMedia('(min-width: 1440px)');

function handleSizeChange(e) {
  if(e.matches) {
    document.getElementById("shadow").style.visibility = "visible";
 document.getElementById("shadow").style.opacity = "1";
  }
  else {
    
  }
}
//register event listener
mediaQuery.addListener(handleSizeChange);
//the initial check
handleSizeChange(mediaQuery)*/

/*var lightboxQuery = window.matchMedia('(min-width: 1440px)');

lightboxQuery.onchange = (e) => {
  if(e.matches){ //if screen is > 1440px, show lightbox when openlightbox is clicked
    document.getElementById("slideshow__image-container").onclick = openLightbox;
  }
  else {
    document.getElementById("slideshow__image-container").onclick = function() {};
  }

}*/


function openLightbox(){
  //only want lightbox if in desktop mode.
  if (window.innerWidth >= 1440){
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("shadow--slideshow").style.visibility = "visible";
    document.getElementById("shadow--slideshow").style.opacity = "1";
  }
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  document.getElementById("shadow--slideshow").style.visibility = "hidden";
  document.getElementById("shadow--slideshow").style.opacity = "0";
}

//close by default
closeLightbox();