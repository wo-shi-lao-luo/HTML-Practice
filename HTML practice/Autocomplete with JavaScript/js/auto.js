function billingFunction(argument) {
	var check = document.getElementById('same')
	if (check.checked) {
		document.getElementById('billingName').value = document.getElementById('shippingName').value
		document.getElementById('billingZip').value = document.getElementById('shippingZip').value
	}
	else {
		document.getElementById('billingName').value = ''
		document.getElementById('billingZip').value = ''

	}

}