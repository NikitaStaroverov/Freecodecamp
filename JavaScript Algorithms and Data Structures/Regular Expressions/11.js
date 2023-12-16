/**Чтобы создать набор символов с отрицанием, вы помещаете символ курсора (^) после открывающей скобки и перед символами, которым вы не хотите соответствовать.
Например, /[^aeiou]/gi соответствует всем символам, которые не являются гласными. Обратите внимание, что такие символы, как ., !, [, @, / и пробел совпадают - набор символов с отрицательной гласной исключает только гласные символы. */

let quoteSample = '3 blind mice.'
let myRegex = /[^0-9aeiou]/gi // выводит все символы, которые не являются гласнымии и цифрами
let result = quoteSample.match(myRegex)