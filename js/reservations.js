var submitButton = document.querySelector("submit");

function clickSubmit() {
    alert("Your reservation has been submitted! Please wait for our confirmation email.");
}

submitButton.addEventListener("click", clickSubmit);