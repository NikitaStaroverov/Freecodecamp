/**Подстановочный знак "." будет соответствовать любому символу. Подстановочный знак также называется точкой и периодом (dot and period). Вы можете использовать подстановочный знак так же, как и любой другой символ в регулярном выражении. Например, если вы хотите сопоставить hug, huh, hut и hum, вы можете использовать регулярное выражение /hu./ для сопоставления всех четырех слов. */

let exampleStr = "Let's have fun with regular expressions!"
let unRegex = /.un/
let result = unRegex.test(exampleStr)
