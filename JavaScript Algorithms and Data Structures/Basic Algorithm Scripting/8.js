/**Усеките строку (первый аргумент), если она длиннее заданной максимальной длины строки (второй аргумент). Верните усеченную строку с помощью a ... окончание. */

function truncateString(str, num) {
	if (str.length <= num) {
		return str
	} else {
		return str.slice(0, num) + '...'
	}
}

truncateString('A-tisket a-tasket A green and yellow basket', 8)
