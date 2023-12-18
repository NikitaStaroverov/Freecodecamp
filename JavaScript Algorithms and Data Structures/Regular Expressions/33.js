let hello = '   Hello, World!  '
let wsRegex = /^(\s+)|(\s+)$/g // ищит пробелы в начале строки и пробелы в конце строки
let result = hello.replace(wsRegex, '') // удаляет пробелы из строки
console.log(result)
