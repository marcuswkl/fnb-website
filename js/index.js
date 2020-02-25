// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {taglineAnim(); navBar()};

function navBar() {
    //For nav bar
    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110)
    {
        document.getElementById("topnavbar").style.padding = "0px 10px";
        document.getElementById("logo").style.padding = "0px";
    } 
    else 
    {
        document.getElementById("topnavbar").style.padding = "70px 10px";
        document.getElementById("logo").style.padding = "70px";
    }
}


function popUpForm()
{   
    //For pop-up form (join us)
    //Form
    var form = document.getElementById("form_div");
    //Link that opens the form 
    var button = document.getElementById("joinUs");
    //Back button
    var back = document.getElementById("back");
    //When user clicks link, open form
    button.onclick = function()
    {
        form.style.display = "block";
    }
    //When user clicks back, close form
    back.onclick = function()
    {
        form.style.display = "none";
    }
    // When the user clicks anywhere outside of the form, close it
    window.onclick = function(event) 
    {
        if (event.target == form) 
        {
            form.style.display = "none";
        }
    }
}

function taglineAnim()
{
    //For Tagline anim
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550)
    {
        document.getElementById("header1").style.transform = "translate(-900px, 0px)";
        document.getElementById("header2").style.transform = "translate(-900px, 0px)";
    } 
    else 
    {
        document.getElementById("header1").style.transform = "translate(0px, 0px)";
        document.getElementById("header2").style.transform = "translate(0px, 0px)";
    }
}

//For slideshow gallery
var slideNum = 1;

//Next/Prev
function plusSlides(n)
{
    showSlides(slideNum += n);
}

// Thumbnail image controls
function currentSlide(n) 
{
    showSlides(slideNum = n);
}

function showSlides(n) 
{
    var i;
    var slides = document.getElementsByClassName("gallery");
    var thumbnail = document.getElementsByClassName("peek");
    if (n > slides.length) 
    {
        slideNum = 1;
    }
    if (n < 1) 
    {
        slideNum = slides.length;
    }
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < thumbnail.length; i++) 
    {
        thumbnail[i].className = thumbnail[i].className.replace(" active", "");
    }
     
    slides[slideNum-1].style.display = "block";
    thumbnail[slideNum-1].className += " active";
    document.getElementById("caption").innerHTML = thumbnail[slideNum-1].alt;
} 