const squareList = arr => {
	// Only change code below this line
	let result = arr
		.filter(posInt => Number.isInteger(posInt) == true && posInt > 0)
		.map(num => Math.pow(num, 2))
	return result
	// Only change code above this line
}

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2])
console.log(squaredIntegers)
