function rangeOfNumbers(startNum, endNum) {
	if (startNum > endNum && startNum < 1) {
		return []
	} else if (startNum <= endNum) {
		const arr = []
		arr.push(startNum)
		rangeOfNumbers(startNum + 1, endNum)
		return arr
	}
}
rangeOfNumbers(1, 6)
