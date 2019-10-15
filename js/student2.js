var companyName = "Sarah's Homegrown CDs";
var companyAddress = "1234 Fake St.";
var companyPhoneNumber = "1 (000) 867-5309";

var numProducts = 3;
var product1 = {name: "HP 4426", id: "4426", desc: "Newest and best HP laptop"};
var product2 = {name: "Apple iPad 88123", id: "88123", desc: "Apple tablet"};
var product3 = {name: "Dell Dimension 2400", id: "2400X", desc: "2.4GHz Dell PC"};

function makeProductDetails (product) {
	var str = "<table style='width: 100%' border=1 cellpadding=10><tr>";
	str += "<td rowspan=3 style='width: 30%; text-align: center; vertical-align: middle'>";
	str += "<span id='productImage'>Product image</span></td>";
	str += "<td id= 'productName'>" + product.name + "</td>";
	str += "<td style='text-align: right' id='productID'>" + product.id + "</td></tr>";
	str += "<tr><td style='text-align: center' colspan=2>";
	str += "<span id='shoppingBar'>Shopping cart</span></td></tr>";
	str += "<tr><td colspan=2 id='productDescription'>" + product.desc + "</td></tr></table>";

	document.getElementById ("main").innerHTML = str;
}

function makeProductList (size) {
  var str = "";
  var product = null;
  for (i = 1; i <= size; i++) {
    switch (i) {
      case 1:
        product = product1;
        break;
      case 2:
        product = product2;
        break;
      case 3:
        product = product3;
        break;
    }

    str += "<p><button onClick='makeProductDetails (product)'>Product #" + i + "</button></p>"
  }

  return str;
}

function makeHeader() {
  var str = "<table style='width: 100%'>";
  str += "<tr style='background-color: lightgreen'><td>";
  str += "<h1>Sarah's Homegrown CDs - Products</h1>";
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
