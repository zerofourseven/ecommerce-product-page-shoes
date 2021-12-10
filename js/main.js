
/* Switches sidenav from expanded to non-expanded state. */
function openSideNav() {
  document.getElementById("sidenav").style.width = "25rem";
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

var cartItems = 0;

/* code for amount in cart */
function addToCart() {
  cartItems += parseInt(document.getElementById("item-amount").innerHTML);
  checkCart();
  //console.log(cartItems);
}

function emptyCart() {
  cartItems = 0;
  checkCart();
  //console.log(cartItems);
}

/* code for shopping cart display */
function toggleCartCard() {
  if (document.getElementById("cart-card").style.display == "block"){
    document.getElementById("cart-card").style.display = "none";
  }
  else {
    document.getElementById("cart-card").style.display = "block";
  }
}


//for updating the cart 
function checkCart() {
  if(cartItems > 0) {
    document.getElementById("cart-card__items--empty").style.display = "none";
    document.getElementById("cart-card__items").style.display = "grid";
    document.getElementById("cart-card__item-pricing").innerHTML = 
      "$125.00 x " + cartItems + " <b>$" + 125 * cartItems + ".00</b>";
      document.getElementById("nav__cart-badge").innerHTML = cartItems;
      document.getElementById("nav__cart-badge").style.display = "block"
  }
  else {
    // 'Your cart is empty.'
    document.getElementById("cart-card__items--empty").style.display = "block";
    document.getElementById("cart-card__items").style.display = "none";
    document.getElementById("nav__cart-badge").innerHTML = cartItems;
    document.getElementById("nav__cart-badge").style.display = "none"
  }
}

//run update on initial page load
checkCart();
//close on initial page load
document.getElementById("cart-card").style.display = "none";



/* for image galleries */
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

/* unneeded code for lightbox image gallery */
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
  if (window.innerWidth >= 1200){
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