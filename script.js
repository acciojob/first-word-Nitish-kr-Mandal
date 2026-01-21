function firstWord(s) {
  // your code here
	s= s.trim()
	if (s.length === 0) return ''

	let result = ''
	for (let i = 0; i < s; i++) {
		result+= s[i]
		if (s[i] === " " ) {
			return result
		}
	}
	return ' '
}

// Do not change the code below

?const s = prompt("Enter String:");
alert(firstWord(s));
