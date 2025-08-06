function firstWord(s) {
  // your code here
	 if (s === "") {
        return "";
    }

    // Step 2: Find the index of the first space
    const spaceIndex = s.indexOf(" ");

    // Step 3: Extract the first word
    if (spaceIndex !== -1) {
        return s.substring(0, spaceIndex);
    } else {
        return s; // No space found, return the whole string
    }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
