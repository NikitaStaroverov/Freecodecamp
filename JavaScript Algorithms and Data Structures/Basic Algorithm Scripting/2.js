/**Переверните предоставленную строку и верните перевернутую строку.
Например, "hello" должно стать "olleh". */
function reverseString(str) {
	let strReverse = ''
	for (let i = str.length - 1; i >= 0; i--) {
		strReverse += str[i]
		console.log(strReverse)
	}
	return strReverse
}

reverseString('hello')

function reverseString(str) {
	return str.split('').reverse().join('')
}

reverseString('hello')
