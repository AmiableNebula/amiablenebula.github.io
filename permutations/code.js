// Returns the factorial of a given natural number
function factorial (n) {
	if (n == 0 || n == 1) {
		return 1;
	} else {
		return n * factorial (n - 1);
	}
}

// Returns the number of unique permutations of characters from a string
function permutations (str) {
	// Store the denominator and the length of the original string
	var denominator = 1;
	var length = str.length;

	// Iterate through the string
	for (var i = 0; i < str.length; i++) {
		// Store and remove the current character
		var current = str [i];
		str = str.substring (0, i) + str.substring (i + 1, str.length);
		i--;

		// Store how many times the current character occurs
		var count = 1;

		// Reiterate through the string
		for (var j = 0; j < str.length; j++) {
			// Check for duplicate characters
			if (str [j] == current) {
				// Increment the counter
				count++;

				// Remove the repeated character from the string
				str = str.substring (0, j) + str.substring (j + 1, str.length);
				j--;
			}
		}

		// Factor the character(s) into the denominator
		denominator *= factorial (count);
	}

	// Calculate the number of unique permutations
	return factorial (length) / denominator;
}
