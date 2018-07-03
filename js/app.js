// the display input text field
var display = document.getElementsByClassName('display')[0];
// the number buttons 0-9
var numBts = document.getElementsByClassName('num-bts');
// the operation buttons +, -, *, /  
var opBts = document.getElementsByClassName('op-bts');
// the equal button
var eqBt = document.getElementsByClassName('equals')[0];
// the clear button
var clear = document.getElementsByClassName('clear')[0];
// num1 & num2 for storing numbers and whichOp for knowing which operation to perform
var num1 = 0, num2 = 0, whichOp = '';

// convert numBts htmlCollection to array and use foreach loop to attach eventListener
Array.from(numBts).forEach(function(bt) {

	// for each numeric button use the same eventListener on click event
	bt.addEventListener('click', function (e) {
		const no = e.target.value; // the value of the button
		// append the value to the display if display is not zero
		display.value === '0' ? display.value = no : display.value += no
	}, false);
}, this);

// convert opBts htmlCollection to array and use foreach loop to attach eventListener 
Array.from(opBts).forEach(function (bt) {

	// for each operation button use the same eventListener on click event
	bt.addEventListener('click', function (e) {
		var whichBt = e.target.value; // get which button user clicked on
		switch(whichBt) 
		{
			case '+': // if bt was plus
				whichOp = 'add';
				break;
			case '-':  // if bt was minus
				whichOp = 'minus';
				break;
			case '\u2715': // unicode for multiply sign
				whichOp = 'mul';
				break;
			case '\u00F7': // unicode for div sign
				whichOp = 'div';
				break;
		}
		num1 = Number(display.value); // store the first no by converting it
		display.value = '0'; // clear the display so user can enter 2nd no
	}, false);
}, this);

// when user clicks on equal button
eqBt.addEventListener('click', function(){
	num2 = Number(display.value); // get the second no from display & convert to no
	var result = 0;
	// based on the operation button clicked previously use the logic
	switch(whichOp)
	{
		// if add button was clicked before then add the two nos
		case 'add':
			result = num1 + num2;
			break;
		case 'minus':
			result = num1 - num2;
			break;
		case 'mul':
			result = num1 * num2;
			break;
		case 'div':
			result = num1 / num2;
			break;
	}
	// output the result
	display.value = result; 
}, false);

// used for clearing the display when clicked
clear.addEventListener('click', function(){
	display.value = '0';
}, false);
