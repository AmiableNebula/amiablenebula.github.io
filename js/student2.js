var companyName = "Sarah's CDs";
var companyAddress = "1 Sarah Ln.";
var companyPhoneNumber = "1 (420) 555-6969";
var numProducts = 3;
var product1 = {name: "Pinkerton", id: "0000", desc: "Weezer's second album", img: "Pinkerton.jpg"};
var product2 = {name: "The Purple Heart", id: "0001", desc: "Left at London's first album", img: "The Purple Heart.jpg"};
var product3 = {name: "Lemon Boy", id: "0002", desc: "Cavetown's third album", img: "Lemon Boy.jpg"};
var product4 = null;
var product5 = null;
var cardArray;
var openCards;
var currentPopup = 0;
var replyString;

// Gets and sets product data from remote server (provided function)
function getProduct (jsonObject) {
	var server = "https://college1.com/getproduct.php";
	var jsonString = JSON.stringify (jsonObject);
	var request = new XMLHttpRequest();
	request.open ("GET", server + "?jsonString=" + jsonString, true);
	request.send();

	request.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			replyString =  this.responseText;
			if (product4 == null) {
				product4 = JSON.parse (replyString);
			} else if (product5 == null) {
				product5 = JSON.parse (replyString);
			} else {
				console.log ("Error, no object available");
			}
		}
	};
}

// Checks that all of the input form's fields are filled
function checkInputForm() {
	var str = "";
	if (document.inputForm.firstname.value <= 0) {
		str += "Please enter first name\n";
	}
	if (document.inputForm.lastname.value <= 0) {
		str += "Please enter last name\n";
	}
	if (document.inputForm.address.value <= 0) {
		str += "Please enter address\n";
	}
	if (document.inputForm.city.value <= 0) {
		str += "Please enter city\n";
	}
	if (document.inputForm.zip.value <= 0) {
		str += "Please enter ZIP\n";
	}
	if (document.inputForm.email.value <= 0) {
		str += "Please enter email address\n";
	}

	if (str != "") {
		alert (str);
	}
}

// Generate input form
function makeInputForm() {
	var str = "<form onSubmit='return checkInputForm()' name='inputForm' ";
	str += "action='https://college1.com/classes/javascript/survey.php'><table width=100% border=1>";
	str += "<tr><td>First name: <input type='text' name='firstname'></td>";
	str += "<td>Last name: <input type='text' name='lastname'></td></tr>";
	str += "<tr><td colspan=2>Address: <input type='text' name='address' size=50></td></tr>";
	str += "<tr><td>City: <input type='text' name='city'></td>";
	str += "<td>State: <input type='text' name='state' size=3> ";
	str += "ZIP: <input type='text' name='zip' size=6></td>";
	str += "<tr><td colspan=2>Email address: <input type='text' name='email' size=50>";
	str += "</td></tr><tr><td><input type='submit' value='Submit'></td>";
	str += "<td><input type='reset'></td></tr></table></form>";

	return str;
}

// Generate popup window
function makePopup() {
	var str = "";
	if (currentPopup == 0) {
		str = "<h1>Buy Pinkerton today!</h1>";
	} else if (currentPopup == 1) {
		str = "<h1>Buy The Purple Heart today!</h1>";
	} else if (currentPopup == 2) {
		str = "<h1>Buy Lemon Boy today!</h1>";
	}
	str += "<p><button onClick='close();'>Close popup</button></p>";

	if (currentPopup < 2) {
		currentPopup++;
	} else {
		currentPopup = 0;
	}

	var popup = open ("", "popup", "width=400, height=300");
	popup.document.writeln (str);
	popup.document.close();
}

// Flips over the next card
function hitCard() {
	cardArray [openCards] = Math.round (Math.random() * 51);
	openCards++;
	document.getElementById ("details").innerHTML = showCards();
}

// Updates the display with the current card data
function showCards() {
	var str = "";
	for (var i = 0; i < cardArray.length; i++) {
		str += "<img src='https://college1.com/images/cards/gbCard" + cardArray [i] + ".gif'></img>";
	}

	if (openCards < 5) {
		str += "<br><button onClick='hitCard()'>Hit next card</button>";
	}

	str += "<p></p>"
	return str;
}

// Generate 5 random cards (2 facing up, 3 facing down)
function genCards() {
	cardArray = new Array (5);
	for (var i = 0; i < cardArray.length; i++) {
		if (i < 2) {
			cardArray [i] = Math.round (Math.random() * 51);
		} else {
			cardArray [i] = 52;
		}
	}

	openCards = 2;
}

// Generate PayPal "Add to Cart" button
function makePurchaseButton() {
	var str = "<form target='paypal' action='https://paypal.com/cgi-bin/webscr' method='post'>";
	str += "<input type='image' src='https://paypalobjects.com/en_US/i/btn/btn_cart_LG.gif'></form>";

	return str;
}

// Generate table of product details
function makeProductDetails (product) {
	var str = "<table style='width: 100%' border=1 cellpadding=10><tr>";
	str += "<td rowspan=3 style='width: 30%; text-align: center; vertical-align: middle'>";
	str += "<span id='productImage'><img style='width: 110px; height: 110px;' src='" + product.img + "'></img></span></td>";
	str += "<td id= 'productName'>" + product.name + "</td>";
	str += "<td style='text-align: right' id='productID'>" + product.id + "</td></tr>";
	str += "<tr><td style='text-align: center' colspan=2>";
	str += "<span id='purchaseButton'></span></td></tr>";
	str += "<tr><td colspan=2 id='productDescription'>" + product.desc + "</td></tr></table><p></p>";
	return str;
}

// Generate list of buttons
function makeButtonList (size) {
  var str = "<p></p>";
  var product = null;
  for (var i = 1; i <= size; i++) {
    str += "<button onClick='document.getElementById (\"details\").innerHTML = ";
    str += "makeProductDetails (product" + i + "); document.getElementById (\"purchaseButton\").innerHTML = makePurchaseButton();'>"
    str += "Product #" + i + "</button> | ";
  }

  str += "<button onClick='genCards(); document.getElementById (\"details\").innerHTML = showCards();'";
  str += ">(Bonus: Play Card Game)</button> | ";
  str += "<button onClick='makePopup();'>(Bonus: Show Popup)</button> | ";
  str += "<button onClick='document.getElementById (\"details\").innerHTML = makeInputForm();'>(Bonus: Show Input Form)</button>";
  str += "<p></p>";

  return str;
}

// Generate header
function makeHeader() {
  var str = "<table style='width: 100%'>";
  str += "<tr style='background-color: lightgreen'><td>";
  str += "<h1>Sarah's CDs</h1>";
  str += "</td></tr></table>";

  return str;
}

// Generate footer
function makeFooter (name, address, phoneNumber) {
  var str = "<table style='width: 100%'>";
  str += "<tr style='background-color: lightgreen'><td>";
  str += "<p><b>Copyright 2019 Sarah</b></p>";
  str += "<p>" + name + " | " + address + " | " + phoneNumber + "</p>";
  str += "<p>Browser: " + navigator.appName + " " + navigator.appVersion + " " + navigator.platform + "</p>";
  str += "</td></tr></table>";

  return str;
}