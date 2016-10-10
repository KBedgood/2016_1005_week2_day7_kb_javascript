var subTotal = 0;
var merchandise = "";
var blueCartButton = document.getElementById("buyBlue");
var costBox = document.getElementById("cost");
var withTax = document.getElementById("total");
var cartContents = document.getElementById("cart");
var today = document.getElementById("demo");

var cartGraphic = document.getElementById("cG");
cartGraphic.onclick = function (){

}

var cart = [];

var blueShirt = {
    color: "blue",
    price: 20,
    name: "Save My Trees",
    inCart: false,
    date: "",
}

var pinkShirt = {
    color: "pink",
    price: 25,
    name: "Nature Lover",
    inCart: false,
    date: "",
}

var orangeShirt = {
    color: "orange",
    price: 30,
    name: "Forest Walk",
    inCart: false,
    date: "",
}

function updateCart() {
    cartContents.innerHTML = "";
    merchandise = "";

    cart.forEach(function(shirt) {
        var shirtDate = moment(shirt.date).format("MMMM Do YYYY, h:mm: a");
        merchandise += `
	  <div class="item">
	  <span class="shirtName">${shirt.name}</span>
	  <span class="shirtPrice">$ ${shirt.price.toFixed(2)}</span>
	  <span class="dateStamp">${shirtDate}</span>
	   </div>
	  `;
    });
    cartContents.innerHTML = merchandise;
    var total = subTotal * .065 + subTotal;
    costBox.innerHTML = subTotal.toFixed(2);
    withTax.innerHTML = total.toFixed(2);
}



blueCartButton.addEventListener("click", function() {

    if (blueShirt.inCart === false) {
        subTotal = subTotal + blueShirt.price;
        blueShirt.inCart = true;
        blueCartButton.className = "active icon icon5";
        blueShirt.date = Date();
        cart.push(blueShirt);
        updateCart();

    } else {
        subTotal = subTotal - blueShirt.price;
        blueShirt.inCart = false;
        blueCartButton.className = "icon icon5";
        var location = cart.indexOf(blueShirt);
        cart.splice(location, 1);
        updateCart();
    }
});




var pinkCartButton = document.getElementById("buyPink");
var costBox = document.getElementById("cost");
var isPinkInCart = false

pinkCartButton.addEventListener("click", function() {

    if (isPinkInCart === false) {
        subTotal = subTotal + 25;
        isPinkInCart = true;
        pinkCartButton.className = "active icon icon5";
        pinkShirt.date = Date();
        cart.push(pinkShirt);
        updateCart();
    } else {
        subTotal = subTotal - 25;
        isPinkInCart = false;
        pinkCartButton.className = "icon icon5";
        cart.splice(location, 1);
        updateCart();
    }
});



var orangeCartButton = document.getElementById("buyOrange");
var costBox = document.getElementById("cost");
var isOrangeInCart = false

orangeCartButton.addEventListener("click", function() {

    if (isOrangeInCart === false) {
        subTotal = subTotal + 30;
        isOrangeInCart = true;
        orangeCartButton.className = "active icon icon5";
        orangeShirt.date = Date();
        cart.push(orangeShirt);
        updateCart();
    } else {
        subTotal = subTotal - 30;
        isOrangeInCart = false;
        orangeCartButton.className = "icon icon5"
        cart.splice(location, 1);
        updateCart();
    }
});


