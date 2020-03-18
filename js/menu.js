function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {

  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");

  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }

  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-opacity-off";
  
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {

  var i;
  var x = document.getElementsByClassName("mySlides");

  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  }

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  x[slideIndex - 1].style.display = "block";

}

//Get the button
var mybutton = document.getElementById("backtoTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
}

function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  }
  
  else {
    mybutton.style.display = "none";
  }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var myIndex = 0;
carousel();

function carousel() {

  var i;
  var x = document.getElementsByClassName("mySlides");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  myIndex++;

  if (myIndex > x.length) {
    myIndex = 1;
  }

  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4000);
  
}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  navBar();
}

function navBar() {
  //For nav bar
  if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110)
  {
      document.getElementById("topcontainer").style.height = "130px";
      document.getElementById("topnavbar").style.padding = "15px 10px";
      document.getElementById("logo").style.padding = "10px";
      document.getElementById("logo").style.height = "110px";
      document.getElementById("logo").style.width = "110px";
  } 
  else 
  {
      document.getElementById("topcontainer").style.height = "170px";
      document.getElementById("topnavbar").style.padding = "30px 10px";
      document.getElementById("logo").style.padding = "25px";
      document.getElementById("logo").style.height = "130px";
      document.getElementById("logo").style.width = "130px";
  }
}