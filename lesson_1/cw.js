// // 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
//
// let numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
// console.log(numb);
// let result = numb[0] + numb[1] + numb[2] + numb[3] + numb[4] + numb[5] + numb[6] + numb[7] + numb[8] + numb[9];
// console.log(result);

// // 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
// let book = {
//     title: `Harry Potter`,
//     numbersPage: 340,
//     genre: `fantasy`
// }
// console.log(book.genre)


// // 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
// let book = {
//     title: `Harry Potter`,
//     numbersPage: 340,
//     genre: `fantasy`,
//     author: `J. K. Rowling`
// }
// console.log(book.author)


// // 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
//
//
// let library = [[`Harry Potter`, 340, `fantasy`, `J. K. Rowling`], [`Harry Potter`, 310, `fantasy`, `J. K. Rowling`], 3, 4];
// console.log(library[0]);
// console.log(library[1]);

// // 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// // Значення площі зберігати в змінній s.
//
// let height = 23;
// let width = 10;
// let result = height*width;
// console.log(result);

// // 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// // результат помістіть у змінну v.
//
// let heightC = 10;
// let dC = 4;
// const PI = 3.141;
// let rC = dC /2;
// let v = PI * heightC * Math.pow(rC, 2);
// console.log(v);


// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n =3;
let m =4;
let k = n**2 + m**2;
console.log(k);


