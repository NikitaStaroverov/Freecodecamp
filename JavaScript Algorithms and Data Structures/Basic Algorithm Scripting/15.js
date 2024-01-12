/** Возвращает значение true, если строка в первом элементе массива содержит все буквы строки во втором элементе массива.

Например, ["hello", "Привет"], должно возвращать значение true, потому что все буквы во второй строке присутствуют в первой, игнорируя регистр.

Аргументы ["hello", "hey"] должны возвращать значение false, потому что строка hello не содержит y.

Наконец, ["Alien", "line"] должно возвращать значение true, потому что все буквы в строке присутствуют в Alien.*/

function mutation(arr) {
	let array = arr.map(word => {
		return word.toLowerCase().split('')
	})
	for (let i = 0; i < array.length; i++) {
		return array[1].every(element => array[0].includes(element))
	}
}

mutation(['hello', 'hey'])

function mutation(arr) {
	const test = arr[1].toLowerCase()
	const target = arr[0].toLowerCase()
	for (let i = 0; i < test.length; i++) {
		if (target.indexOf(test[i]) < 0) return false
	}
	return true
}
