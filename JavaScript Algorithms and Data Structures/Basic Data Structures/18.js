const users = {
	Alan: {
		online: false,
	},
	Jeff: {
		online: true,
	},
	Sarah: {
		online: false,
	},
}

function countOnline(allUsers) {
	// Only change code below this line
	let count = 0
	for (let users in allUsers) {
		if (allUsers[users].online === true) {
			count++
		}
	}
	return count
}
// Only change code above this line

console.log(countOnline(users))
