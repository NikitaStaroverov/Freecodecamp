/**Ярлык для поиска цифровых символов - \d со строчной буквой d. Это равно классу символов [0-9], который ищет один символ любого числа от нуля до девяти. */

let movieName = '2001: A Space Odyssey'
let numRegex = /\d/gi // =[0-9]
let result = movieName.match(numRegex).length
