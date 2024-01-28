Array.prototype.myFilter = function (callback) {
	const newArray = []
	//for(let i=0; i<this.length; i++){
	//  if(callback(this[i], i, this))
	//  newArray.push(this[i])
	//}
	this.forEach((element, index, arr) => {
		if (callback(element, index, arr)) newArray.push(element)
	})
	return newArray
}
