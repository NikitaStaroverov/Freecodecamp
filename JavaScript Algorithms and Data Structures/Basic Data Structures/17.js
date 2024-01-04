/**Существует также способ поиска шаблонов в конце строк.Вы можете выполнить поиск в конце строк, используя символ знака доллара $ в конце регулярного выражения. */

let caboose = 'The last car on a train is the caboose'
let lastRegex = /caboose$/ // вернет true если caboose стоит в конце строки
let result = lastRegex.test(caboose)
