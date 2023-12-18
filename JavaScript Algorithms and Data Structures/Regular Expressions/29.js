/**Положительный предварительный просмотр проверит, есть ли элемент в шаблоне поиска, но на самом деле не будет соответствовать ему. Положительный предварительный просмотр используется как (?=...), где ... - это требуемая часть, которая не соответствует.
 
С другой стороны, отрицательный предварительный просмотр позволит убедиться, что элемента в шаблоне поиска там нет. Отрицательный предварительный просмотр используется как (?!...) Где... это шаблон, по которому вы не хотите там находиться. Остальная часть шаблона возвращается, если отрицательная предварительная часть отсутствует. 
 Используйте поисковые запросы в pwRegex для подбора паролей длиной более 5 символов, содержащих две цифры подряд.*/

let sampleWord = 'astronaut'
let pwRegex = /(?=\w{5,})(?=\D+\d{2,})/
let result = pwRegex.test(sampleWord)