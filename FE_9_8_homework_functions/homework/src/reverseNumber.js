function reverseNumber(digit){
	
	let reversedDigit = digit.toString().split('').reverse().join('')
	return parseInt(reversedDigit) * Math.sign(digit);

}