//Import for topnav with form
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {navBar(),taglineAnim()};

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
function topNav()
{
    document.body.insertAdjacentHTML('afterbegin',
    `    
        <style>
            #topcontainer{
                overflow: hidden;
                background-color: rgba(41, 41, 41, 0.3);
                position: fixed;
                height: 350px;
                width: 100%;
                top:0;
                z-index: 5;
                transition: 0.4s;
            }
        
            #topcontainer #logo {
                position: absolute;
                padding-top: 30px;
                max-width: 300px;
                transition: 0.4s;
            }
        
            #topnavbar {
                display: flex;
                transition: 0.4s;
                padding: 70px 10px;
                max-width: 65vw;
                overflow: hidden;
                float: right;
                margin-right: 20px;
            }
        
            #topnavbar a{
                font-family: 'Montserrat', Arial, sans-serif;
                float: right;
                display: block;
                padding: 30px 30px;
        
                text-align: center;
                text-decoration: none;
                font-size: 22px;
                text-shadow: rgba(150, 150, 150, 80%) 1.5px 1.5px;
                line-height: 25px;
                color:  rgb(255, 255, 255);
        
                border-radius: 40px;
                border: none;
                cursor: url("../images/index/poopcursor.png"),auto ;
            }
        
            #topnavbar a:hover{
                background-color: rgba(206, 206, 206, 50%);
                color:  rgb(255, 255, 255);
            }
        
            #topnavbar a:active{
                background-color: rgba(150, 150, 150, 50%);
                color: rgb(255, 255, 255);
            }
        
            #topnavbar a#menu_icon {
                display: none;
            }
            
            @media screen and (max-width: 900px) {
                #topnavbar a{display: none;}
                #topnavbar a#menu_icon {
                    float: right;
                    display: block;
                }
            }
        
            @media screen and (max-width: 900px) {
                .topnav.responsive {position: relative;}
                .topnav.responsive a#menu_icon {
                    size: 40px;
                    border-radius: 0px;
                    position: absolute;
                    right: 0;
                    top: 0;
                }
        
                .topnav.responsive a {
                    float: none;
                    display: block;
                    text-align: left;
                }
            }
        
            
            #form_div {   
                display: none; 
                position: fixed;
                z-index: 100; 
                padding-top: 100px; 
                left: 0;
                top: 0;
                margin: auto;
                width: 100vw; 
                height: 100vh; 
                font-size: 20px;
                background-color: rgba(32, 32, 32, 0.60);
        
            }
        
            #form_joinUs {
                overflow: auto;
                position: relative;
                background-color: rgba(83, 53, 13, 0.90);
                margin: auto;
                padding: 20px;
                max-width: 40vw;
                max-height: 70vh;
                min-height: 50vh;
                width: 40vw;
                height: 70vh;
                border-radius: 50px;    
                font-family: 'Tomorrow', 'Roboto';
                font-size: 18px;
                color: white;}
        
            #form_joinUs h3 {
                text-decoration: underline;
                font-family: 'Tomorrow', 'Roboto';
                font-size: 28px;
                margin-top: -15px;
            }
        
            #form_joinUs #submit {
                position: absolute;
                background-color: rgb(144, 248, 83);
                padding: 18px;
                border-radius: 15px;
                font-size: 20px;
                bottom: 20px;
                right: 20px;
                border: none;
                cursor: url("../images/index/poopcursor.png"),auto ;
            }
        
            #form_joinUs #submit:hover {
                background-color: rgb(181, 255, 138);
                cursor: url("../images/index/poopcursor.png"),auto ;
            }
        
            #form_joinUs #remember1{
                position: absolute;
                bottom: 90px;
                right: 20px;
                cursor: url("../images/index/poopcursor.png"),auto ;
            }
            #form_joinUs #remember1 #remember2 {
                right: 0px;
                cursor: url("../images/index/poopcursor.png"),auto ;
            }
        
            #form_joinUs #form_table td{
                border: none;
                text-align: left;
                padding: 0px 20px 20px 0px;
            }
        
            #form_table input {
                width: 15vw;
                max-width: 20vw;
                padding: 5px;
                cursor: url("../images/index/poopcursor.png"),auto ;
            }
        
            .radiobut, #form_div label {
                cursor: url("../images/index/poopcursor.png"),auto;
            }
        
            #back{
                color: rgb(190, 190, 190);
                float: right;
                margin-right: 20px;
                font-size: 40px;
                font-weight: bold;
            }
        
            #back:hover, #back:focus {
                color: white;
                text-decoration: none;
                font-weight: bold;
                cursor: url("../images/index/poopcursor.png"),auto ;
            }
        </style>

        <div id ="topcontainer" class="topnav"> 
            <img id="logo" src="../images/index/MTL Logo.PNG" alt="logo">
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
                    <label id="remember1"><input id="remember2" type="checkbox" name="remember"> Remember me</label>
                    <input id="submit" type="submit" value="Submit">
                </form>
        </div>
    `);
}
