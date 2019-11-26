// Returns the factorial of a given natural number
function factorial (n) {
	if (n == 0 || n == 1) {
		return 1;
	} else {
		return n * factorial (n - 1);
	}
}

// Formats the array of permutations
function format (array) {
	// Inititalize the string
	var str = "<b>Permutations:</b> ";
	// Iterate through the array minus the final element
	for (var i = 0; i < array.length - 1; i++) {
		// Append the current element to the string followed by a separator
		str = str + array [i] + ", ";
	}

	// Append the final entry to the string
	str += array [array.length - 1];

	// Return the string
	return str;
}

// Returns all unique permutations of characters from a string
function permutations (str) {
	// If there is only one permutation, return it
	if (str.length == 0 || str.length == 1) {
		return str;
	}

	// Initialize an array to store the permutations
	var array = [];

	// Iterate through the string
	for (var i = 0; i < str.length; i++) {
		// Check for duplicate characters
		if (str.indexOf (str [i]) != i) {
			// Skip the current cycle
			continue;
		}

		// Store the permutations of the string without the current character
		var remaining = permutations (str.substring (0, i) + str.substring (i + 1, str.length));

		// Store the current character
		var current = str [i];

		// Iterate through the remaining permutations
		for (var j = 0; j < remaining.length; j++) {
			// Add the current character plus the remaining permutations to the array
			array.push (current + remaining [j]);
		}
	}

	// Return the array
	return array;
}
