/**В более ранней задаче вы использовали символ курсора (^) внутри набора символов для создания отрицательного набора символов в форме [^thingsThatWillNotBeMatched]. За пределами набора символов курсор используется для поиска шаблонов в начале строк. */

let rickyAndCal = 'Cal and Ricky both like racing.'
let calRegex = /^Cal/ // вернет true если Cal стоит в начале строки
let result = calRegex.test(rickyAndCal)
