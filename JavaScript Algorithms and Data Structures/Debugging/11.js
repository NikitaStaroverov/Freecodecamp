function zeroArray(m, n) {
	let newArray = []
	let row = []
	for (let i = 0; i < m; i++) {
		for (let j = row.length; j < n; j++) {
			row.push(0)
			console.log(row)
		}

		newArray.push(row)
		console.log(newArray)
	}
	return newArray
}

let matrix = zeroArray(3, 2)
console.log(matrix)
