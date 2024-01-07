/**Верните длину самого длинного слова в предоставленном предложении.
Вашим ответом должно быть число. */

function findLongestWordLength(str) {
	let strLength = 1
	let strSplit = str.split(' ')
	for (let i = 0; i < strSplit.length; i++) {
		if (strSplit[i].length >= strLength) {
			strLength = strSplit[i].length
		}
	}
	return strLength
}

findLongestWordLength('The quick brown fox jumped over the lazy dog')
