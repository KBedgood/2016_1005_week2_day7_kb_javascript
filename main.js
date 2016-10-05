var subTotal = 0;

var blueCartButton = document.getElementById("buyBlue");
var costBox = document.getElementById("cost");
var isBlueInCart = false

blueCartButton.addEventListener("click", function(){

	if (isBlueInCart === false){
		subTotal = subTotal + 20;
		costBox.innerHTML = subTotal;
		isBlueInCart = true;
	}
	else {
		subTotal = subTotal - 20;
		costBox.innerHTML = subTotal;
		isBlueInCart = false;
	}
});



var pinkCartButton = document.getElementById("buyPink");
var costBox = document.getElementById("cost");
var isPinkInCart = false

pinkCartButton.addEventListener("click", function(){

	if (isPinkInCart === false){
		subTotal = subTotal + 25;
		costBox.innerHTML = subTotal;
		isPinkInCart = true;
	}
	else {
		subTotal = subTotal - 25;
		costBox.innerHTML = subTotal;
		isPinkInCart = false;
	}
});



var orangeCartButton = document.getElementById("buyOrange");
var costBox = document.getElementById("cost");
var isOrangeInCart = false

orangeCartButton.addEventListener("click", function(){

	if (isOrangeInCart === false){
		subTotal = subTotal + 30;
		costBox.innerHTML = subTotal;
		isOrangeInCart = true;
	}
	else {
		subTotal = subTotal - 30;
		costBox.innerHTML = subTotal;
		isOrangeInCart = false;
	}
});