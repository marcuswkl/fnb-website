function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
		//Get the button
		var mybutton = document.getElementById("backtoTop");

		// When the user scrolls down 20px from the top of the document, show the button
		window.onscroll = function() {scrollFunction()};

		function scrollFunction() 
		{
		  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
		  {
				mybutton.style.display = "block";
		  } 
		  else 
		  {
				mybutton.style.display = "none";
		  }
		}

		// When the user clicks on the button, scroll to the top of the document
		function topFunction() 
		{
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
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

function set()
{
	document.getElementById("content").innerHTML = 
	`
			<h1 style="font-variant: small-caps; font-size:3em;"><em><strong>Menu (Set)</strong></em></h1>

		<div class="w3-content" style="width:400px">
		  <img class="mySlides" src="seafood_set.jpg" style="width:100%;height:300px;display:none">
		  <img class="mySlides" src="vegetable_platter.png" style="width:100%;height:300px">
		  <img class="mySlides" src="meat_platter.jpg" style="width:100%; height:300px;display:none">

		  <div class="w3-row-padding w3-section"width="auto">
			<div class="w3-col s4">
			  <img class="demo w3-opacity w3-hover-opacity-off" src="seafood_set.jpg" style="width:100px;height:80px;cursor:pointer" onclick="currentDiv(1)">
			</div>
			<div class="w3-col s4">
			  <img class="demo w3-opacity w3-hover-opacity-off" src="vegetable_platter.png" style="width:100px;height:80px;cursor:pointer" onclick="currentDiv(2)">
			</div>
			<div class="w3-col s4">
			  <img class="demo w3-opacity w3-hover-opacity-off" src="meat_platter.jpg" style="width:100px;height:80px;cursor:pointer" onclick="currentDiv(3)">
			</div>
		  </div>
		</div>

		<br><br>
		<div class="sub" id="section2">
				<h2>
				<strong><u>Set</u></strong>
			</h2>
		<br><br>	
		<br><br>
			<p>Enjoy your meal with hassle-free and delicious fresh from the farm steamboat dish, inclusive of: </p>
		</div>
		<br><br>
		  <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
		  <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
			<figure>

			<div class="row">
				<div class="column">		
				<img src="seafood_set.jpg" alt="seafood_set" width="250px" height="200px">
				<div class="fadedbox">
				<div class="title text"> <br> 1. Lobster (200g)
					<br>2. Fish (800g)
					<br>3. Squid (400g)
					<br>4. Prawn (300g)
					<br>5. Lala or other fresh seafood
					<br><br><em>RM500<em> 
					</div>
			  </div>


			</div>
				<div class="column">
				<img src="vegetable_platter.png" alt="vege_platter" width="250px" height="200px">
				<div class="fadedbox">
				<div class="title text">  1. Broccoli (300g) + Mushroom (100g)<br> 
					2. Cabbage (300g) + Mushroom (100g)
					<br>3. Other vege (300g) + Mushroom (100g)
					<br><br><em>RM50<em> 
					
					</div>
			  </div>
			</div>
				
				<div class="column">
				<img src="meat_platter.jpg" alt="meat_platter"width="250px" height="200px">
				<div class="fadedbox">
					<div class="title text"> 1. Pork (300g)<br>2. Fish (300g)<br> 
					3. Chicken (300g)
					<br>4. Beef (300g)
					<br>5. Mix of pork, chicken, fish<br> and beef (300g)
					<br><br><em>RM300<em>
			  </div>
			</div>
			
		</div>

		</figure>

		<div class="seafood1">
			<h3>
			Seafood Set
			</h3>
		</div>

		<div class="vegetable1">
			<h3>
			Vegetable Platter
			</h3>
		</div>

		<div class="meat1">
			<h3>
			 Meat Platter
			</h3>
		</div>
		<br><br><br><br><br><br><br><br>

	`
}

function dish()
{
	document.getElementById("content").innerHTML = 
	`

	<h1 style="font-variant: small-caps; font-size:3em;"><em><strong>Menu (Dishes)</strong></em></h1>

<div class="w3-content" style="width:400px">
  <img class="mySlides" src="crabstick.jpg" style="width:100%;height:300px;display:none">
  <img class="mySlides" src="fishball.jpg" style="width:100%;height:300px">
  <img class="mySlides" src="meatball.jpg" style="width:100%; height:300px;display:none">
  <img class="mySlides" src="ringroll.jpg" style="width:100%; height:300px;display:none">
  <img class="mySlides" src="seafood_tofu.jpeg" style="width:100%; height:300px;display:none">

  <div class="w3-row-padding w3-section">
    <div class="w3-col s4">
      <img class="demo w3-opacity w3-hover-opacity-off" src="crabstick.jpg" style="width:100px;height:80px;cursor:pointer" onclick="currentDiv(1)">
    </div>
    <div class="w3-col s4">
      <img class="demo w3-opacity w3-hover-opacity-off" src="fishball.jpg" style="width:100px;height:80px;cursor:pointer" onclick="currentDiv(2)">
    </div>
    <div class="w3-col s4">
      <img class="demo w3-opacity w3-hover-opacity-off" src="meatball.jpg" style="width:100px;height:80px;cursor:pointer" onclick="currentDiv(3)">
    </div>
	    <div class="w3-col s4"style="margin-top:10px">
      <img class="demo w3-opacity w3-hover-opacity-off" src="ringroll.jpg" style="width:100px;height:80px;cursor:pointer" onclick="currentDiv(4)">
    </div>
	    <div class="w3-col s4"style="margin-top:10px">
      <img class="demo w3-opacity w3-hover-opacity-off" src="seafood_tofu.jpeg" style="width:100px;height:80px;cursor:pointer" onclick="currentDiv(5)">
    </div>
	
  </div>
</div>

<br><br>
<div class="sub" id="section2">
		<h2>
		<strong><u>Dishes</u></strong>
	</h2>
<br><br>	
<br><br>
	<p>Enjoy your meal with hassle-free and delicious fresh from the farm steamboat set, inclusive of: </p>
</div>
<br><br>
  <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
  <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
	<figure>

	<div class="row">
		<div class="column">		
		<img src="crabstick.jpg" alt="crabstick" width="250px" height="200px">
		<div class="fadedbox">
        <div class="title text"> <br> <br><br>crabstick (5 pieces)
			<br><br><em>RM50<em> 
			</div>
      </div>


	</div>
		<div class="column">
		<img src="fishball.jpg" alt="fishball" width="250px" height="200px">
		<div class="fadedbox">
        <div class="title text">  <br><br><br>fishball (5 pieces)
			<br><br><em>RM30<em> 
			
			</div>
      </div>
	</div>
		
		<div class="column">
		<img src="meatball.jpg" alt="meatball" width="250px" height="200px">
		<div class="fadedbox">
        <div class="title text">  <br><br><br>meatball (5 pieces)
			<br><br><em>RM35<em> 
			
			</div>
      </div>
	</div>
	
		<div class="column"style="margin-top:20px">
		<img src="ringroll.jpg" alt="ringroll" width="250px" height="200px">
		<div class="fadedbox">
        <div class="title text"> <br><br><br>ringroll (5 pieces)
			<br><br><em>RM20<em> 
			
			</div>
      </div>
	</div>
		<div class="column"style="margin-top:20px">
		<img src="seafood_tofu.jpeg" alt="seafood tofu"width="250px" height="200px" >
		<div class="fadedbox">
			<div class="title text"> <br><br><br>seafood tofu (10 pieces)
			<br><br><em>RM50<em>
      </div>
	</div>
	
</div>


</div>
<br><br><br><br><br><br><br><br>
	`	
}

function beverage()
{
	document.getElementById("content").innerHTML = 
	`
	
	`
}
