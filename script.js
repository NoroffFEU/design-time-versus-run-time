function cleanString(stringToClean) {
	return stringToClean.replace(/\s/g, "-");
}

const cleanedString = cleanString(6);
console.log(cleanedString);
