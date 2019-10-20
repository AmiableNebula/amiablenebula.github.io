var companyName = "Sarah's CDs";
var companyAddress = "1 Sarah Ln.";
var companyPhoneNumber = "1 (420) 555-6969";

var numProducts = 3;
var product1 = {name: "Placeholder #1", id: "0000", desc: "The first palceholder", 
	img: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"};
var product2 = {name: "Placeholder #2", id: "0001", desc: "The second placeholder", 
	img: "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"};
var product3 = {name: "Placeholder #3", id: "0002", desc: "The third placeholder", 
	img: "https://homepages.cae.wisc.edu/~ece533/images/baboon.png"};

function makeCardGame() {

}

function makePurchaseButton() {
	var str = "";
	str += "<form target='paypal' action='https://paypal.com/cgi-bin/webscr' method='post'>";
	str += "<input type='hidden' name='business' value='sarahramseymcneil@gmail.com'>";
	str += "<input type='hidden' name='cmd' value='_cart'><input type='hidden' name='add' value='1'>"
	str += "<input type='hidden' name='item_name' value='Test'><input type='hidden' name='amount' value='3.99'>";
	str += "<input type='hidden' name='currency_code' value='USD'>";
	str += "<input type='image' name='submit' src='https://paypalobjects.com/en_US/i/btn/btn_cart_LG.gif' alt='Add to cart'></form>";

	return str;
}

function makeProductDetails (product) {
	var str = "<table style='width: 100%' border=1 cellpadding=10><tr>";
	str += "<td rowspan=3 style='width: 30%; text-align: center; vertical-align: middle'>";
	str += "<span id='productImage'><img style='width: 100px; height: 100px;' src='" + product.img + "'></img></span></td>";
	str += "<td id= 'productName'>" + product.name + "</td>";
	str += "<td style='text-align: right' id='productID'>" + product.id + "</td></tr>";
	str += "<tr><td style='text-align: center' colspan=2>";
	str += "<span id='purchaseButton'></span></td></tr>";
	str += "<tr><td colspan=2 id='productDescription'>" + product.desc + "</td></tr></table><p></p>";
	return str;
}

function makeProductList (size) {
  var str = "<p></p>";
  var product = null;
  for (var i = 1; i <= size; i++) {
    str += "<button onClick=\"document.getElementById ('details').innerHTML = ";
    str += "makeProductDetails (product" + i + "); document.getElementById ('purchaseButton').innerHTML = makePurchaseButton();\">"
    str += "Product #" + i + "</button>";
  }

  str += "<button onClick=\"document.getElementById ('details').innerHTML = ";
  str += "makeCardGame();\">(Bonus: Play Card Game)</button><p></p>";

  return str;
}

function makeHeader() {
  var str = "<table style='width: 100%'>";
  str += "<tr style='background-color: lightgreen'><td>";
  str += "<h1>Sarah's CDs</h1>";
  str += "</td></tr></table>";

  return str;
}

function makeFooter (name, address, phoneNumber) {
  var str = "<table style='width: 100%'>";
  str += "<tr style='background-color: lightgreen'><td>";
  str += "<p><b>Copyright 2019 Sarah</b></p>";
  str += "<p>" + name + " | " + address + " | " + phoneNumber + "</p>";
  str += "<p>Browser: " + navigator.appName + " " + navigator.appVersion + " " + navigator.platform + "</p>";
  str += "</td></tr></table>";

  return str;
}
