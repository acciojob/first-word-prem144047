function firstWord(s) {
  // your code here
	 s= s.trimStart(); 

  // Find the index of the first space
  const spaceIndex = s.indexOf(' '); 

  // If no space is found, return the whole string
  if (spaceIndex === -1) {
    return s; 
  }

  // Return substring from start to the first space
  return s.slice(0, spaceIndex); 
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
