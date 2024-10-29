function sameAddress(button) {
	if (button.checked === true) {
	const street_value = document.querySelector("#street").value;
	document.querySelector("#bill-street").value = street_value;
	}
	else {
		document.querySelector("#bill-street").value = "";
	}
}
