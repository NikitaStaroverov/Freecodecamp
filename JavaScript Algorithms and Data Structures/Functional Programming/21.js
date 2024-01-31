// Only change code below this line
function urlSlug(title) {
	return title
		.split(/\W/)
		.filter(elem => elem !== '')
		.join('-')
		.toLowerCase()
}
// Only change code above this line
urlSlug(' Winter Is  Coming')
