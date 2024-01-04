/**Класс символов в JavaScript, наиболее близкий к алфавиту, - это \w. Это сокращение равно [A-Za-z0-9_]. Этот класс символов соответствует прописным и строчным буквам плюс цифры. Обратите внимание, что этот класс символов также включает символ подчеркивания (_). */

let quoteSample = 'The five boxing wizards jump quickly.'
let alphabetRegexV2 = /\w/gi // =[A-Za-z0-9_]
let result = quoteSample.match(alphabetRegexV2).length
