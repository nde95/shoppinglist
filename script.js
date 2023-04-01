var button = document.getElementById("enter");
var shoppingList = document.getElementById("shoppinglist");
var ul = document.querySelector("ul")

button.addEventListener("click", function() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode("testing"));
	ul.appendChild(li);
})