/**Вы можете выполнить поиск буквенного шаблона с некоторой гибкостью с помощью классов символов. Классы символов позволяют вам определить группу символов, которым вы хотите соответствовать, поместив их в квадратные скобки ([ и ]).
Например, вы хотите сопоставить bag, big и bug, но не bog. Для этого вы можете создать регулярное выражение /b[aiu]g/. [aiu] - это класс символов, который будет соответствовать только символам a, i или u. */

let quoteSample =
	'Beware of bugs in the above code; I have only proved it correct, not tried it.'
let vowelRegex = /[aeiou]/gi // поиск всех гласных символов
let result = quoteSample.match(vowelRegex)