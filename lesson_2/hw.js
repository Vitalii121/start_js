// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
//
// let time = prompt('Введіть число від 0 до 59');
// if (time >=0 && time <=14){
//     console.log('Перша четвертина')
// } else if(time>=15 && time <=29){
//     console.log('друга четвертина')
// } else if(time>=30 && time <=44){
//     console.log('третя четвертина')
// } else if(time>=45 && time <=59) {
//     console.log('четверта четвертина')
// } else{
//     console.log('WTH')
// }
//

// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
// let day = prompt('Введіть будь яке число місяця');
// if(day >=1 && day <=10){
//     console.log('перша третина')
// } else if(day >=11 && day <=20){
//     console.log('друга третина')
// }  else if(day >=21 && day <=31){
//     console.log('третя третина')
// } else{
//     console.log('dont known')
// }

// // - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// //     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
// let test = true;
// if(test===true){
//     console.log('Вірно')
// } else {
//     console.log('Невірно')}
//
//  (test===true) ?  console.log('Вірно') : console.log('невірно')

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = +prompt('Введіть будь яке число');
// if ( a !== 0){
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }
// (+prompt('Введіть будь яке число') !== 0) ? console.log('Вірно') : console.log('Невірно')


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.


// let day = +prompt('введіть порядковий номер дня тижня')
// switch (day){
//     case 1:
//         console.log('гоу ту зе Зал')
//         break;
//     case  2:
//         console.log('Вивчення англ мови')
//         break;
//     case 3:
//         console.log('гоу ту зе Зал егейн')
//         break;
//     case 4:
//         console.log('щось тай роби')
//         break;
//     case 5:
//         console.log('гра в настільний теніс')
//         break;
//     case 6:
//         console.log('Візит до стомалотолога')
//         break;
//     case 7:
//         console.log('на чілі')
//         break;
// }




// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = +prompt('Веддіть рік')
// if (year % 4 ===0 ){
//     alert('Це високосний рік')
// } else{
//     alert('Не високосний рік')
// }

// (+prompt('Веддіть рік') % 4 ===0) ? alert('Це високосний рік') : alert('Не високосний рік');

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let answer = prompt('Яка «офіційна» назва JavaScript?')
// if (answer ==='ECMAScript'){
//     console.log('«Правильно!»')
// }else {
//     console.log('«Не знаєте? ECMAScript!')
// }

    // (prompt('Яка «офіційна» назва JavaScript?') ==='ECMAScript') ? console.log('«Правильно!»') : console.log('«Не знаєте? ECMAScript!')




