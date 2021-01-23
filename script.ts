export {};
function cleanString(stringToClean: string) {
	return stringToClean.replace(/\s/g, "-");
}

const cleanedString = cleanString("f f f");
console.log(cleanedString);
