/**Вы можете искать пробелы, используя \s, который является строчной буквой s. Этот шаблон соответствует не только пробелам, но и символам возврата каретки, табуляции, подачи формы и символам новой строки. Вы можете думать об этом как о подобии класса символов [ \r\t\f\n\v]. */

let sample = 'Whitespace is important in separating words'
let countWhiteSpace = /\s/g
let result = sample.match(countWhiteSpace)
