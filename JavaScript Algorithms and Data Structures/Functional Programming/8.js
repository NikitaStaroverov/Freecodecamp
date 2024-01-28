Array.prototype.myMap = function (callback) {
	const newArray = []
	//for (let i = 0; i < this.length; i++) {
	// newArray.push(callback(this[i], i, this));
	// }
	this.forEach(
		(element, index) => newArray.push(callback(element, index, this)),
		this
	)
	return newArray
}
