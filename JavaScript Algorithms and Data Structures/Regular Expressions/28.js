/**Вы можете указать возможное существование элемента с вопросительным знаком ?. Это проверяет наличие нуля или одного из предыдущих элементов. Вы можете думать об этом символе как о том, что предыдущий элемент необязателен. */

let favWord = 'favorite'
let favRegex = /favou?rite/ // favorite - true
let result = favRegex.test(favWord)
