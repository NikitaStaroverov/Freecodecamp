/**Проверьте, заканчивается ли строка (первый аргумент, str) заданной целевой строкой (второй аргумент, target).

Эту проблему можно решить с помощью метода .EndsWith(), который был представлен в ES2015. Но для целей этой задачи мы бы хотели, чтобы вы вместо этого использовали один из методов подстроки JavaScript. */

function confirmEnding(str, target) {
	const regex = new RegExp(`${target}$`, 'gi')
	let result = regex.test(str)
	return result
}

confirmEnding('Bastian', 'n')

function confirmEnding(str, target) {
	return str.slice(-target.length) === target //Если в качестве первого параметра для slice() указано отрицательное число, смещение берется в обратном направлении от конца строки.
}

confirmEnding('Bastian', 'n')
