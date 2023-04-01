var button = document.getElementById("enter");
var shoppingList = document.getElementById("shoppinglist");
var ul = document.querySelector("ul")
var input = document.getElementById("userinput")
var container = document.getElementById("container")
var listItems = document.querySelectorAll('li')


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

// DONE ELEMENT

for (var i = 0; i < listItems.length; i++) {
	// console.log(listItems[i]);
	listItems[i].addEventListener("click", function () {
		event.target.classList.toggle("finished")
	})
}

button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)

// container.addEventListener("click", finished)