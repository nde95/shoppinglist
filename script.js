var button = document.getElementById("enter");
var shoppingList = document.getElementById("shoppinglist");
var ul = document.querySelector("ul")
var input = document.getElementById("userinput")

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress (event) {
	if (inputLength() > 0 && event.which === 13) {
	createListElement();
	}
}


button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)