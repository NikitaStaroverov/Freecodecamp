let users = {
	Alan: {
		age: 27,
		online: false,
	},
	Jeff: {
		age: 32,
		online: true,
	},
	Sarah: {
		age: 48,
		online: false,
	},
	Ryan: {
		age: 19,
		online: true,
	},
}

function getArrayOfUsers(obj) {
	// Only change code below this line
	return Object.keys(obj) //Этот метод принимает объект в качестве аргумента и возвращает массив строк, представляющих каждое свойство объекта.
	// Only change code above this line
}

console.log(getArrayOfUsers(users))
