// to validate a username
function validateUserName(username) {
	return typeof username === 'string' && username.match(/^[a-zA-Z0-9_]{3,12}$/);
}

// to convert "dashed-strings" to "DashedStrings"
function dashToCamelCase(string) {
	return ("-"+string).replace(/\-([a-z])/g, function(match) {
		return match.toUpperCase().replace('-','');
	});
}

// to convert "DashedStrings" to "dashed-strings"
function camelCaseToDash(string) {
	return string.replace(/([\w])([A-Z])/g,'$1-$2').toLowerCase();
}