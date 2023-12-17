/**Кратчайший путь для поиска нецифровых символов - \D. Это равно классу символов [^0-9], который ищет один символ, который не является числом от нуля до девяти. */

let movieName = '2001: A Space Odyssey'
let noNumRegex = /\D/gi // =[^0-9]
let result = movieName.match(noNumRegex).length
