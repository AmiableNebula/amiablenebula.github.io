var myName = "Sarah Ramsey-McNeil";
var classDescription = "CS 190";
var theDate = "August 19, 2019";
var currentSpecial = 1;
var customerType = "direct";

function getBreaks() {
  var n = 0;
  do {
    n = prompt ("Enter a number from 1-5: ");
  } while (n < 1 || n > 5);

  var str = "";
  for (var i = 0; i < n; i++) {
    str = str.concat ("<hr>");
  }

  document.getElementById ("hr").innerHTML = str;
}

function getCards() {
  var n = 0;
  do {
    n = prompt ("Enter a number from 2-7: ");
  } while (n < 2 || n > 7);

  var str = "";
  for (var i = 1; i <= n; i++) {
   if (i == n) {
    str = str.concat ("<span id=card" + i + ">Card #" + i + "</span>");
  } else
    str = str.concat ("<span id=card" + i + ">Card #" + i + "</span> | ");
  }

  document.getElementById ("cards").innerHTML = str;
}

function getName() {
  var name = prompt ("Enter your name: ");

  if (name.length < 5) {
    alert ("You have a short name");
  } else if (name.length < 10) {
    alert ("You have a medium-length name");
  } else {
    alert ("You have a long name");
  }

  document.getElementById ("name").innerHTML = "Your name is " + name;
}

function getAge() {
  var age = prompt ("Enter your age: ");

  if (age < 18) {
    alert ("You're still a kid");
  } else if (age < 50) {
    alert ("You're an adult");
  } else {
    alert ("You're a senior citizen");
  }

  document.getElementById ("age").innerHTML = "Your age is " + age;
}

function displayType() {
  if (customerType == "direct") {
    alert ("Buy from this website! My children need shoes!");
  } else if (customerType == "advertising") {
    alert ("Support our advertisers! Click on ads so I can make money!");
  } else if (customerType == "subscription") {
    alert ("Renew your subscription today! My children need medicine!");
  }
}

function changeType() {
  if (customerType == "direct") {
    customerType = "advertising";
  } else if (customerType == "advertising") {
    customerType = "subscription";
  } else if (customerType == "subscription") {
    customerType = "direct";
  }
}

function displaySpecial() {
  if (currentSpecial == 1) {
    alert ("The current special is #1");
  } else if (currentSpecial == 2) {
    alert ("The current special is #2");
  } else if (currentSpecial == 3) {
    alert ("The current special is #3");
  }

  currentSpecial += 1;
  if (currentSpecial > 3) {
    currentSpecial = 1;
  }
}

function displayInfo() {
  alert ("My name: " + myName + "\nClass description: " +
          classDescription + "\nStart date: " + theDate);
}

function confirmLink (link) {
  if (confirm ("Go to " + link + "?")) {
    location = link;
  }
}
