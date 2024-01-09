/**Удалите все ложные значения из массива. Верните новый массив; не изменяйте исходный массив.

Ложными значениями в JavaScript являются false, null, 0, "", undefined и NaN.

Подсказка: Попробуйте преобразовать каждое значение в логическое. */

function bouncer(arr) {
	return arr.filter(word => Boolean(word) === true)
}

bouncer([7, 'ate', '', false, 9])
