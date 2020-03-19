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
        background-color: rgba(41, 41, 41, 0.6);
        position: fixed;
        height: 18vh;
        width: 100%;
        top:0;
        z-index: 5;
        transition: 0.4s;
    }

    #topcontainer #logo {
        position: absolute;
        padding: 30px;
        max-width: 300px;
        transition: 0.4s;
    }

    #topnavbar {
        overflow:hidden;
        display: flex;
        transition: 0.4s;
        padding: 30px 10px;
        max-width: 65vw;
        overflow: hidden;
        float: right;
        margin-right: 20px;
    }

    #topnavbar .navBarA{
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
        cursor: url("images/index/poopcursor.png"),auto ;
    }

    #topnavbar a:hover{
        background-color: rgba(206, 206, 206, 50%);
        color:  rgb(255, 255, 255);
    }

    #topnavbar a:active{
        background-color: rgba(150, 150, 150, 50%);
        color: rgb(255, 255, 255);
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
        max-height: 50vh;
        width: 40vw;
        height: 50vh;
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
        position: relative;
        bottom: 5%;
        right: 0%;
        float:right;
        background-color: rgb(144, 248, 83);
        padding: 18px;
        border-radius: 15px;
        font-size: 20px;
        border: none;
        cursor: url("images/index/poopcursor.png"),auto ;
    }

    #form_joinUs #submit:hover {
        background-color: rgb(181, 255, 138);
        cursor: url("images/index/poopcursor.png"),auto ;
    }

    #form_joinUs #remember1{
        float:right;
        position: relative;
        bottom: 0px;
        right: 2%;
        cursor: url("images/index/poopcursor.png"),auto ;
    }
    #form_joinUs #remember1 #remember2 {
        right: 0px;
        cursor: url("images/index/poopcursor.png"),auto ;
    }
    
    #form_joinUs #form_table{
        table-layout: fixed;
        width: 100%;
        border-collapse: collapse;
    }

    #form_joinUs #form_table td{
        border: none;
        text-align: left;
        padding: 20px;
    }

    #form_joinUs #form_table td#noStyle{
        text-align: left;
    }

    #form_table input:not(.radiobut){
        border: none;
        width: 15vw;
        max-width: 20vw;
        padding: 5%;
        border-radius: 15px;
        color: white;
        background-color: rgb(150, 91, 23);
        cursor: url("images/index/poopcursor.png"),auto ;
    }

    .radiobut, #form_div label {
        cursor: url("images/index/poopcursor.png"),auto;
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
        cursor: url("images/index/poopcursor.png"),auto ;
    }
</style>

<div id ="topcontainer" class="topnav"> 
<a href="index.html"><img id="logo" src="images/index/MTL Logo.PNG" style="width:130px; height:130px;"></a>
<nav id="topnavbar">
    <a class="navBarA" href="common/FAQ.html">FAQ</a>
    <a class="navBarA" id="joinUs" onclick="popUpForm()">Join Us</a>
    <a class="navBarA" href="common/reservations.html">Reservations</a>
    <a class="navBarA" href="common/menu/menu.html">Menu</a>
    <a class="navBarA" href="common/about-us.html">About Us</a>
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
                <td id="noStyle"><label>Gender:</label><br>
                <input type="radio" class="radiobut" id="form_male" name="gender" value="male">
                <label for="form_male">Male</label><br>
                <input type="radio" class="radiobut" id="form_female" name="gender" value="female">
                <label for="form_female">Female</label><br>
                <input type="radio" class="radiobut" id="form_other" name="gender" value="other">
                <label for="form_other">Other</label>
                </td>
            </tr>
    </table>
        <input id="submit" type="submit" value="Submit">
        <label id="remember1"><input id="remember2" type="checkbox" name="remember">Remember me</label>
    </form>
</div>

`);

document.body.insertAdjacentHTML("beforeend",
    `  
    <style>
        .footer{
            margin-top: auto;
            position: relative;
            background-color: rgba(46, 46, 46, 0.8);
            border: none;
            overflow-x: hidden;
        }
    
        .footer .footer_table{
            width: 100%;
            border-collapse: collapse;
    
            font-family: Tomorrow, Roboto;
            font-size: 1em;
        }
    
        .footer .footer_table a{
            text-decoration: none;
            text-decoration: underline;
            color: white;
            padding-left: 30px;
        }
    
        .footer .footer_table p{
            text-decoration: none;
            color: white;
            display: inline-block;
            padding: 0px 50px 0px 15px;
        }

        .footer .footer_table td{
            margin-top: auto;
        }
    
        .footer #table2, tr, td{
            padding-left: 10px;
            table-layout: fixed;
            border: none;
            border-collapse: collapse;
        }
        
        .footer #table2 #row1{
            width: 40%;
        }

        .footer #listFooter{
            position: relative;
            top: 12px;
            left: 20px;
        }

        .footer ul{
            position: relative;
            top: -20px;
            list-style-type: none;
            padding: 10px 0px 10px 0px;
            border-left: 5px solid rgb(207, 21, 21);
        }

        .footer li:not(:last-child){
            padding: 0px 0px 10px 0px;
        }
        
    </style>

    <div class="footer">
        <table class="footer_table">
            <tr>
                <td>
                    <div id="listFooter">
                        <p style="text-decoration:underline;">Navigation</p><br>
                        <ul>
                            <li> <a href="common/FAQ.html">FAQ</a>  <br> </li>
                            <li> <a id="joinUs" onclick="popUpForm()">Join Us</a> <br> </li>
                            <li> <a href="common/reservations.html">Reservations</a> <br> </li>
                            <li> <a href="common/menu/menu.html">Menu</a> <br> </li>
                            <li> <a href="common/about-us.html">About Us</a> <br> </li>
                        </ul>
                    </div>
                </td>
                <td>
                    <p style="text-decoration:underline;">Contact Us</p>
                    <table id="table2">
                        <tr>
                            <td id="row1"><img src="images/index/facebook.png" style="width:30px;height:30px;"><p>Ma Tong Lao FB</p></td>
                            <td><img src="images/index/phone.png" style="width:30px;height:30px;"><p>1-300-666-696</p></td>
                        </tr>
                        <tr>
                            <td id="row1"><img src="images/index/instagram.png" style="width:30px;height:30px;"><p>@Official_MTL</p></td>
                            <td><img src="images/index/email.png" style="width:30px;height:30px;"><p>mtl@gmail.com.my</p></td>
                        </tr>
                        <tr>
                            <td id="row1"><img src="images/index/twitter.png" style="width:30px;height:30px;"><p>@MTL_Tweet</p></td>
                            <td><img src="images/index/placeholder.png" style="width:30px;height:30px;"><p> Sunway Velocity, Lingkaran SV, <br>Maluri, 55100 Kuala Lumpur</p></td>
                        </tr>
                    </table>
                   
                </td>
                <td>
                    <p>Copyright © 2020 Ma Tong Lao Sdn. Bhd.</p><br>
                    <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0" target="_blank">Terms</a>
                    <a href="https://youtu.be/Fkk9DI-8el4?t=33" target="_blank">Privacy Policy </a>
                </td>
            </tr>
        </table>
    </div>
    `);
}