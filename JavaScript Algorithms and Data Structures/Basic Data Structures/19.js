let quoteSample = 'The five boxing wizards jump quickly.'
let nonAlphabetRegex = /\W/gi // =[^A-Za-z0-9_]
let result = quoteSample.match(nonAlphabetRegex).length
