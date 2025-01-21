/*
	Final project for Comp 2681 
    
    Javascript for Plantitude 
    Author: Dylan Phillips 
    Date: Dec 18, 2023  

    Filename: plantitude.js
*/

// Set the date we're counting down to
var countDownDate = new Date("July 1, 2024 16:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "It's BBQ Time";
  }
}, 1000);

/* System clock */ 
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}

 /* Validates Form on Reserve Page */
function validateForm() {
    // Get form inputs
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
    var dateTime = document.getElementById("dateTime").value;

    // Check if any field is empty
    if (fName === "" || lName === "" || email === "" || dateTime === "") {
        alert("All fields are required");
        return false;
    }

    // Check if email is valid using regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email address");
        return false;
    }

    // If all validations pass, return true to submit the form
    return true;
}

/* Valdiating Form on wedding page */
function validateForm() {
    // Get form inputs
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (fName === "" || lName === "" || email === "" || phone === "") {
        alert("All fields are required");
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email address");
        return false;
    }

    var phonePattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;
    if (!phonePattern.test(phone)) {
        alert("Invalid phone number. Please use the format (xxx) xxx-xxxx");
        return false;
    }

    return true;
}
  