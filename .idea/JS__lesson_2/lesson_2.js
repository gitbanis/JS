// CLASSWORK__________________________________________
//- Користувач вводить або має два числа. Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
//   Користувач вводить або має два числа.
//   Потрібно знайти та вивести максимальне число з тих двох .
//   Також потрібно врахувати коли введені рівні числа.

// let number1 = prompt('Введіть перше число')
// console.log(number1)
// let number2 = prompt('Введіть перше число')
// console.log(number2)
//
// if (number1 === '' && number2 === '')
//     console.log('Числа не введено')
// if (number1 === 0 || number1 === '')
//     console.log('Перше число не введено, або введений нуль')
// if (number2 === 0 || number2 === '')
//     console.log('Друге число не введено, або введений нуль')
// if (number1 > number2)
//     alert('Перше число найбільше')
// if (number2 > number1)
//     alert('Друге число найбільше')
// if (number1 === number2)
//     alert('Введені однакові значення')

//_____________________________________________________________________________________
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let aprt = prompt('Введіть номер квартири для пошуку підїзду')
//     if (aprt < 21)
//         alert('Квартира знаходиться у 1 підїзді')
//     if (aprt > 21 && aprt < 49)
//         alert('Квартира знаходиться у 2 підїзді')
//     if (aprt > 48 && aprt < 90)
//         alert('Квартира знаходиться у 3 підїзді')

//_______________________________________________________________________________________
// Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let numbers = prompt('Введіть значення')
// console.log(numbers)
// if (numbers == 10)
//     alert('ВІРНО')
//         else
//         alert('НЕВІРНО')

//__________________________________________________________________________________________
// Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
// якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else



//__________________________________________________________________________________________
//- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temp = prompt('Зараз буде гра "Чи ми йдемо сьогодні в OKTEN на навчання?"') + prompt('Введіть температуру за вікном, що дізнатись чи потрібно йти на навчання')
// if (temp > 10 && temp < 22)
//     alert('Опа друже, все таки ми йдемо вчитися. Збирай монатки')
// else
//     alert('Хм...фартонуло, сиди сьогодні вдома. Вари чайок')

//__________________________________________________________________________________________
// За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let vic = + prompt('Ласкаво просимо у нашу вікторину. Введіть число від 1 до 5 щоб прийняти участь та виграти приз')
//     switch (vic) {
//         case 1:
//             console.log ('Вітаю. Ви виграли автомобіль')
//             break
//         case 2:
//             alert('Вітаю. Ви виграли перфоратор')
//             break
//         case 3:
//             alert('Вітаю. Ви виграли жирафа')
//             break
//         case 4:
//             alert('Вітаю. Ви виграли кавоварку "Руці 2000"')
//             break
//         case 5:
//             alert('Вітаю. Ви виграли сторічний запас пива')
//             break
//     }



    //HOMEWORK___________________________________________


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt('Введіть число від 0 до 59')
//     if (time > 0 && time < 16)
//         alert('Перша четверть години')
//     else if (time > 15 && time < 31)
//             alert('Друга четверть години')
//     else if (time > 30 && time < 46)
//             alert('Третя четверть години')
//     else if (time > 45 && time < 60)
//             alert('Четверта четверть години')

//__________________________________________________________
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = prompt('Введіть число місяця щоб дізнатись декаду')
//     if (day > 0 && day < 11)
//         alert('Перша декада місяця')
//     else if (day > 10 && day < 21)
//         alert('Друга декада місяця')
//     else if (day > 20 && day < 32)
//         alert('Третя декада місяця')
//___________________________________________________________________________
//- У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
// let test = true
// console.log(typeof test)
//     if (test === true){
//         console.log('Вірно')}
//     else {
//         console.log('Неправильно')}

//______________________________________________________________________________
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = -3
// if (a !== 0)
//     console.log('Вірно')
//     else
//         console.log('Невірно')
//____________________________________________________________________________
// Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
// let dayPlane = + prompt('Введіть день тижня щоб отримати заплановані події')
//     switch (dayPlane) {
//         case 1:
//             alert('1. Прокинутись; 2. Встати; 3. Ранкова зарядка; 4. На роботу і назад')
//             break
//         case 2:
//             alert('1. Сніданок; 2. Вечеря; 3. Ранкова зарядка; 4. На роботу і назад')
//             break
//         case 3:
//             alert('1. Музика; 2. Ютуб; 3. Ранкова зарядка; 4. На роботу і назад')
//             break
//         case 4:
//             alert('1. Читати газєту; 2. Покормити гусей; 3. Ранкова зарядка; 4. На роботу і назад')
//             break
//         case 5:
//             alert('1. Замовити піцу; 2. Поїсти піцу; 3. Сходити в кіно; 4. На роботу і назад')
//             break
//         case 6:
//             alert('1. Помити зуби; 2. Випити кофє; 3. Ранкова зарядка; 4. На роботу і назад')
//             break
//         case 7:
//             alert('1. Погуляти; 2. Велосипед; 3. Рукі базукі; 4. На роботу і назад')
//             break
//     }

//___________________________________________________________________________________
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
// let day = 364
// if (day % 4 ===0 )
//     console.log('Цей рік високосний')
//      else
//          console.log('Невискосний рік')

//_________________________________________________________________________________
// Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let trueName = prompt("Яка «офіційна» назва JavaScript?")
//     if (trueName === 'ECMAScript')
//         alert('Правильно')
//         else
//             alert('Не знаєте? ECMAScript!')



// ADDITIONAL________________________________________________________________________
//- Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
//  кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//  Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

// let friends = ['Ivan', 'Slavik', 'Grisha', 'Lera', 'Ira']
// let ml = friends.length
// console.log (ml)
// if (ml >= 3)
//     console.log('Це великий масив, який містить три або більше елементів')
//     else
//         console.log('Масив містить менше трьох елементів')

//_____________________________________________________________________________________________________________
//  - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//  Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
// let n1 = 11
// let n2 = 10
// let n3 = 15
// let averege = (n1 < n2 && n1 > n3 || n1 < n3 && n1 > n2 ) ? n1 + ' averege'
//     : (n2 < n1 && n2 > n3 || n2 < n3 && n2 > n1) ? n2 + ' averege'
//     : (n3 < n1 && n3 > n2 || n3 < n2 && n3 > n1) ? n3 + ' averege': ' недостатньо даних'
// console.log(averege)
// _________________________________________________________________________________________________________
//    - Перепишіть конструкцію if з використанням умовного оператора '?':
//  let result;
//  if (a + b < 4) {
//     result = 'Мало';
//  } else {
//     result = 'Багато';
//  }

// let a = 2
// let b = 1
// let result = (a + b < 4) ? 'Мало' : 'Багато'
// console.log(result)
//_________________________________________________________________________________

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
let numbe = 0
let res = (0 < numbe) ? 'число позитивне' : (0 > numbe) ? ' число негативне' : (numbe === 0) ? 'це нуль' : ''
console.log(res)