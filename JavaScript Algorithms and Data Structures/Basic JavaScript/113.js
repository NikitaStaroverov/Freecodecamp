function rangeOfNumbers(startNum, endNum) {
	if (startNum > endNum) {
		return []
	} else {
		const num = rangeOfNumbers(startNum, endNum - 1)
		num.push(endNum)
		return num
	}
}
