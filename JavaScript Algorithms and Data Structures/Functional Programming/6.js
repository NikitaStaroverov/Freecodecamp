// The global variable
const bookList = [
	'The Hound of the Baskervilles',
	'On The Electrodynamics of Moving Bodies',
	'Philosophiæ Naturalis Principia Mathematica',
	'Disquisitiones Arithmeticae',
]

// Change code below this line
function add(bookList, bookName) {
	let arr = bookList.slice()
	arr.push(bookName)
	return arr

	// Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
	const book_index = bookList.indexOf(bookName)
	if (book_index >= 0) {
		let arr = bookList.slice()
		arr.splice(book_index, 1)
		return arr

		// Change code above this line
	}
}
