let haStr = 'Hazzzzah'
let haRegex = /Haz{4,}ah/g // выдаст слова где 4 или более букв z
let result = haRegex.test(haStr)
