/**Повторите заданную строку str (первый аргумент) num раз (второй аргумент). Верните пустую строку, если num не является положительным числом. Для целей этого вызова не используйте встроенный метод .repeat(). */

function repeatStringNumTimes(str, num) {
	let result = ''
	if (num <= 0) {
		return ''
	} else {
		for (let i = 0; i < num; i++) {
			result += str
			console.log(result)
		}
	}
	return result
}

repeatStringNumTimes('abc', 3)
