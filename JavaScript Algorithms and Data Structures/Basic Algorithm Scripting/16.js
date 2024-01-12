/** Наша цель для этого алгоритма - разбить arr (первый аргумент) на меньшие фрагменты массивов с длиной, указанной в size (второй аргумент). Для завершения этого алгоритма нашему коду необходимо пройти 4 зеленых проверки (цели):

(['a', 'b', 'c', 'd'], 2) ожидается, что [['a', 'b'], ['c', 'd']]
([0, 1, 2, 3, 4, 5], 3) ожидается, что [[0, 1, 2], [3, 4, 5]]
([0, 1, 2, 3, 4, 5], 2) ожидается, что [[0, 1], [2, 3], [4, 5]]
([0, 1, 2, 3, 4, 5], 4) ожидается, что [[0, 1, 2, 3], [4, 5]]*/

function chunkArrayInGroups(arr, size) {
	let newArr = []
	for (let i = 0; i < arr.length; i += size) {
		newArr.push(arr.slice(i, i + size))
		console.log(newArr)
	}
	return newArr
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)

//без метода slice
function chunkArrayInGroups(arr, size) {
	let temp = []
	const result = []

	for (let a = 0; a < arr.length; a++) {
		if (a % size !== size - 1) temp.push(arr[a])
		else {
			temp.push(arr[a])
			result.push(temp)
			temp = []
		}
	}

	if (temp.length !== 0) result.push(temp)
	return result
}
