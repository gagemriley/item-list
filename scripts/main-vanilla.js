// [X] Add item to list (on button click or input return)
// [X] Delete all items from list (on button click)
// [] Delete specific item from list (on X click)
// [] Edit specific item in list (on Pencil click) 


// Declare my constant elements
const input = document.getElementById('input');
const addBtn = document.getElementById('addBtn');
const list = document.getElementById('list');
const delBtn = document.getElementById('delBtn');
const count = document.getElementById('count');
const countS = "Item(s):";

// Add item to list (on enter/return press)
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("addBtn").click();
    }
});

// Add item to list (on button click)
addBtn.onclick = function addItem() {
	// Get input value
	let text = input.value;
	// If input isn't empty add to list
	if (text != "") {

		// Create new list item
		let newLI = document.createElement('li');
		// Set list item value = to input
		newLI.innerHTML = text;
		// Add item to front of list
		list.insertBefore(newLI, list.firstChild);
		// Call clearFocus
		clearFocus();
		// Call countItems
		countItems();
	} else {
		// Call clearFocus
		clearFocus();
		// Add empty class to input for style change
		input.classList.add('empty');
		// Change placeholder 
		input.placeholder = "*Required";
		// Remove empty class on keypress
		input.addEventListener("keypress", function(event2) {
			input.classList.remove('empty');
			input.placeholder = "Enter Items...";
		});
	}
}

// Clears the input field and adds focus
function clearFocus() {
	input.value = "";
	input.focus();
}

// Count items in list and display
function countItems() {
	// Select all items in list
	let items = document.querySelectorAll('li');
	// Get number of items
	let num = items.length;
	// Set count to number of items
	count.innerHTML = countS + " " + num;
}

// Delete all items from list
delBtn.onclick = function delAll() {
	while(list.firstChild) list.removeChild(list.firstChild);
	// Call clearFocus
	clearFocus();
	// Call count to reset to zero
	countItems();
}

// Call count for zero number of items at start
countItems();
