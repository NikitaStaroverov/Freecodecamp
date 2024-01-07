/**Проверьте, классифицируется ли значение как логический примитив. Возвращает значение true или false.

Логическими примитивами являются true и false. */

function booWho(bool) {
	if (typeof bool === 'boolean') {
		return true
	}
	return false
}

booWho(null)
