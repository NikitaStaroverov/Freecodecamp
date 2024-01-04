/**Чтобы выполнить поиск или извлечь шаблон более одного раза, вы можете использовать флаг глобального поиска: g */

let twinkleStar = 'Twinkle, twinkle, little star'
let starRegex = /Twinkle/gi
let result = twinkleStar.match(starRegex) // Выведет ['Twinkle', 'twinkle']
