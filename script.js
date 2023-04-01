var button = document.getElementById("enter");
var shoppingList = document.getElementById("shoppinglist");
var ul = document.querySelector("ul")
var input = document.getElementById("userinput")
var container = document.getElementById("container")
var listItems = document.querySelectorAll('li')


let removeItem = function() {
	this.parentNode.remove();
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	// button
	var removeButton = document.createElement("button");
    removeButton.setAttribute("class", "btn");
    removeButton.appendChild(document.createTextNode("Remove"));
    // list
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	// functionality of adding toggle to new text
	ul.appendChild(li).addEventListener("click", finishItem);
	// adding button to text
	ul>li.appendChild(removeButton).addEventListener("click", removeItem);
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
	listItems[i].addEventListener("click", finishItem);
}
let finishItem = function() {
	event.target.classList.toggle("finished")
}

// Remove button



button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterKeypress)

// container.addEventListener("click", finished)
