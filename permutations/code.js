// Returns the factorial of a given natural number
function factorial (var n) {
	if (n < 0) {
		return -1;
	} else if (n == 0 || n == 1) {
		return 1;
	} else {
		return n * factorial (n - 1);
	}
}

// Returns the number of permunations of characters from a given string
function permutations (var str) {
	if (str.length == 0) {
		return 0;
	} else if (str.length == 1) {
		return 1;
	} else {
		// Keep track of the denominator
		var denominator = 1;

		// Iterate through the string
		for (var i = 0; i < str.length; i++) {
			// TODO: Figure out how the heck to implement the rest of this
		}
	}
}
