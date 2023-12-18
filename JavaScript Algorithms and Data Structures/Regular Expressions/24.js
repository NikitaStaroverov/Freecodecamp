/**Ищите не пробельные символы, используя \S, который является прописной буквой s. Этот шаблон не будет соответствовать пробелам, символам возврата каретки, табуляции, подаче формы и символам новой строки. Вы можете подумать, что он похож на класс символов [^ \r\t\f\n\v]. */

let sample = 'Whitespace is important in separating words'
let countNonWhiteSpace = /\S/g
let result = sample.match(countNonWhiteSpace)
