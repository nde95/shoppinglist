var button = document.getElementById("enter");
var shoppingList = document.getElementById("shoppinglist");
var ul = document.querySelector("ul")
var input = document.getElementById("userinput")

button.addEventListener("click", function() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
})