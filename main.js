var subTotal = 0;

var blueCartButton = document.getElementById("buyBlue");
var costBox = document.getElementById("cost");
var isBlueInCart = false
var withTax = document.getElementById("total");


function updateCart (){
	var total = subTotal * .065 + subTotal;
	costBox.innerHTML = subTotal;
	withTax.innerHTML = total;
}

blueCartButton.addEventListener("click", function(){

	if (isBlueInCart === false){
		subTotal = subTotal + 20;
		updateCart();
		isBlueInCart = true;
		blueCartButton.className = "active icon icon5";

	}
	else {
		subTotal = subTotal - 20;
		updateCart();
		isBlueInCart = false;
		blueCartButton.className = "icon icon5";
	}
});



var pinkCartButton = document.getElementById("buyPink");
var costBox = document.getElementById("cost");
var isPinkInCart = false

pinkCartButton.addEventListener("click", function(){

	if (isPinkInCart === false){
		subTotal = subTotal + 25;
		updateCart();
		isPinkInCart = true;
	}
	else {
		subTotal = subTotal - 25;
		updateCart();
		isPinkInCart = false;
	}
});



var orangeCartButton = document.getElementById("buyOrange");
var costBox = document.getElementById("cost");
var isOrangeInCart = false

orangeCartButton.addEventListener("click", function(){

	if (isOrangeInCart === false){
		subTotal = subTotal + 30;
		updateCart();
		isOrangeInCart = true;
	}
	else {
		subTotal = subTotal - 30;
		updateCart();
		isOrangeInCart = false;
	}
});

