/**Верните предоставленную строку, указав первую букву каждого слова с заглавной буквы. Убедитесь, что остальная часть слова написана строчными буквами.

Для целей этого упражнения вам также следует использовать заглавные буквы в соединительных словах, таких как the и of. */

function titleCase(str) {
	return str
		.toLowerCase()
		.split(' ')
		.map(word => {
			return word[0].toUpperCase() + word.substring(1)
		})
		.join(' ')
}

titleCase("I'm a little tea pot")
