function onClick() {
	if (inputsAreEmpty()) {
		label.textContent = "Error: one or both inputs are empty.";
		return;
	}
	updateLabel();
}

function inputsAreEmpty() {
	if(getNum1() === '' || getNum2() === '') {
		return true;
	} else {
		return false;
	}
}

function updateLabel() {
	var addend1 = getNum1();
	var addend2 = getNum2();
	var sum = parseInt(addend1) + parseInt(addend2);
	label.textContent = addend1 + " + " + addend2 + " = " + sum;
}

function getNum1() {
	return inputs[0].value;
}

function getNum2() {
	return inputs[1].value;
}

var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var btnAdd = document.getElementById("add");
// btnAdd.addEventListener('click', updateLabel);
// btnAdd.addEventListener('click', inputsAreEmpty);
btnAdd.addEventListener('click', onClick);