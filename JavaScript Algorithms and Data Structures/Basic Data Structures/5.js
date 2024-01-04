/**Извлекать совпадения.Вы также можете извлечь фактические совпадения, которые вы нашли, с помощью метода .match(). */

let extractStr = "Extract the word 'coding' from this string."
let codingRegex = /coding/i
let result = extractStr.match(codingRegex) // выведет ['coding']
