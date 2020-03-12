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

