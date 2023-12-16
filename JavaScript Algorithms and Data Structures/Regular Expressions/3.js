/**Сопоставьте буквальную строку с различными возможностями.Вы можете выполнить поиск по нескольким шаблонам, используя оператор чередования or-"ИЛИ": |.*/

let petString = 'James has a pet cat.'
let petRegex = /dog|cat|bird|fish/ // собака или кот или птица или рыба
let result = petRegex.test(petString)
