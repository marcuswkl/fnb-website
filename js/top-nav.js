//Import for topnav with form
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {taglineAnim(); navBar()};

function navBar() {
    //For nav bar
    if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110)
    {
        document.getElementById("topcontainer").style.height = "130px";
        document.getElementById("topnavbar").style.padding = "15px 10px";
        document.getElementById("logo").style.padding = "10px";
    } 
    else 
    {
        document.getElementById("topcontainer").style.height = "200px";
        document.getElementById("topnavbar").style.padding = "30px 10px";
        document.getElementById("logo").style.padding = "30px";
    }
}

//For mobility menu bar
function menu(){
    var top = document.getElementById("topcontainer");
    if (top.className === "topnav")
    {
        top.className += " responsive";
    } 
    else 
    {
        top.className = "topnav";
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
    form.style.display = "block";
    //When user clicks link AGAIN, open form again
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

let body = document.getElementsByTagName("BODY")[0];
body.innerHTML = `

    <div id ="topcontainer" class="topnav"> 
        <img id="logo" src="images/index/MTL Logo.PNG" alt="logo">
        <nav id="topnavbar">
            <a href="#contact">Contact</a>
            <a href="#faq">FAQ</a>
            <a id="joinUs" onclick="popUpForm()">Join Us</a>
            <a href="#reservations">Reservations</a>
            <a href="#menu">Menu</a>
            <a href="#about_us">About Us</a>
            <a id="menu_icon" onclick="menu()"><img src="images/index/menu.png" alt="menu_button" sizes="32px 32px"></a>
        </nav>
    </div>
        
        <div id="form_div">
            <form id="form_joinUs">
                <span id="back">&KHcy;</span>
                <br>
                <h3>Join our membership for the crappiest rewards :D</h3>
                <table id="form_table">
                    <tr>
                        <td><label for="form_email"><b>Email:</b></label><br>
                            <input type="text" placeholder="Enter Email" id="form_email" autocomplete="off" required></td>
                        <td><label for="form_psw"><b>Password:</b></label><br>
                            <input type="password" placeholder="Enter Password" id="form_pswd" autocomplete="off" required></td>
                    </tr>
                    <tr>
                        <td>
                            <label for="form_bdate"><b>Birthday:</b></label><br>
                            <input type="date" id="form_bdate" required>
                        </td>
                        <td><label for="form_psw"><b>Confirm Password:</b></label><br>
                            <input type="password" placeholder="Enter Password" id="form_pswd" autocomplete="off" required></td>
                    </tr>
                    <tr>
                        <p>Gender:</p>
                        <input type="radio" class="radiobut" id="form_male" name="gender" value="male">
                        <label for="form_male">Male</label>
                        <input type="radio" class="radiobut" id="form_female" name="gender" value="female">
                        <label for="form_female" style="padding-right:10px;">Female</label>
                        <input type="radio" class="radiobut" id="form_other" name="gender" value="other">
                        <label for="form_other" style="padding-right:10px;">Other</label>
                    </tr>
            </table>
                <label id="remember1"><input id="remember2" type="checkbox" checked="checked" name="remember"> Remember me</label>
                <input id="submit" type="submit" value="Submit">
            </form>
    </div>
`;
