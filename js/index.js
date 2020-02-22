// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    //For nav bar
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90)
    {
        document.getElementById("topnavbar").style.padding = "0px 10px";
        document.getElementById("logo").style.fontSize = "25px";
    } 
    else 
    {
        document.getElementById("topnavbar").style.padding = "80px 10px";
        document.getElementById("logo").style.fontSize = "35px";
    }

    //For Tagline anim
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
    {
        document.getElementById("header1").style.transform = "translate(-900px, 0px)";
        document.getElementById("header2").style.transform = "translate(-900px, 0px)";
        document.getElementsByClassName("headerBG").style.transform = "translate(-900px, 0px)";

    } 
    else 
    {
        document.getElementById("header1").style.transform = "translate(0px, 0px)";
        document.getElementById("header2").style.transform = "translate(0px, 0px)";
        document.getElementsByClassName("headerBG").style.transform = "translate(0px, 0px)";

    }
} 