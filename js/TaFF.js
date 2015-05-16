function unhide_element(element_id) {
	var className = document.getElementById(element_id).className;
	className = className.replace('hiddenElement', '');
	document.getElementById(element_id).className = className;
}

function toggle_element_visibility(element_id) {
	var className = document.getElementById(element_id).className;
	if(className.indexOf('hiddenElement') > -1) 
		className = className.replace('hiddenElement', '');
	else className = className.concat(' hiddenElement');
	document.getElementById(element_id).className = className;
}