// [X] Add item to list (on button click or input return)
// [X] Delete all items from list (on button click)
// [X] Delete specific item from list (on X click)
// [] Edit specific item in list (on Pencil click) 

// Declare my constant elements
const inp  = document.querySelector('.Items__input');
const addBtn  = document.querySelector('.Items__btn--add');
const delBtn  = document.querySelector('.Items__btn--del');
const list = document.querySelector('.Items__list');
const cnt  = document.querySelector('.Items__count');
const cntH = "Item(s): ";
let lastid = 0;

// Add item to list (on enter/return press)
inp.addEventListener("keyup", function(event) {
    // event.preventDefault();
    if (event.keyCode === 13) {
        addBtn.click();
    }
});

// Add item to list (on button click)
addBtn.onclick = function addItem() {
	
	// Get input value
	let text = inp.value;
	// If input isn't empty add to list
	if (text != "") {
		lastid++;
		lastid = lastid;
		list.classList.remove('hide');

		// Create new list item
		let newLI = document.createElement('li');
		let newIMG = document.createElement('i');
		let newBTN = document.createElement('button');

		newLI.setAttribute('id','item'+lastid);
		newBTN.setAttribute('onClick','removeLI("'+'item'+lastid+'")');

		// Set list item value = to input
		newLI.innerHTML = text;

		newBTN.classList.add("Items__btn", "Items__btn--delOne")
		newIMG.classList.add("fas", "fa-trash-alt");
		newBTN.appendChild(newIMG);
		// let dataS = "data-id";
		// let id = Array.from(list.children)
		// newBTN.setAttribute( , )

		newLI.appendChild(newBTN);
		// Add item to front of list
		// list.insertBefore(newLI, list.firstChild);

		list.appendChild(newLI);

		setTimeout(function() {
			newLI.classList.add('add');
		},100);

		// Call clearFocus
		clearFocus();
		// Call countItems
		countItems();
	} else {
		// Call clearFocus
		clearFocus();
		// Add empty class to input for style change
		inp.classList.add('empty');
		// Change placeholder 
		inp.placeholder = "*Required";
		// Remove empty class on keypress
		inp.addEventListener("keypress", function(event2) {
			inp.classList.remove('empty');
			inp.placeholder = "Enter Item...";
		});
	}
}

// Clears the input field and adds focus
function clearFocus() {
	inp.value = "";
	inp.focus();
}

// Count items in list and display
function countItems() {
	// Select all items in list and get number
	// let numI = document.querySelectorAll('li').length;
	let numI = list.childElementCount;
	// Set count to number of items
	cnt.innerHTML = cntH + numI;
}

// Delete all items from list
delBtn.onclick = function delAll() {
	let items = list.children;

	var interval = 100;
	Array.from(items).forEach(function (el, index) {
		setTimeout(function () {
			el.classList.add('remove');
		}, index * interval);
		setTimeout(function () {
			el.remove(el);
			countItems();
		}, index * interval + 300);
	});

	// Call clearFocus
	clearFocus();
}

function removeLI(itemid){
    let item = document.getElementById(itemid);
    list.removeChild(item);
    countItems();
}



// Call count for zero number of items at start
countItems();
