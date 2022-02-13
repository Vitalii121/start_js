// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minNum=(a,b,c)=>{
//     if(a<b && a<c){
//         document.write(a);
//     } else if(b<a && b<c){
//         document.write(b);
//     }else{
//         document.write(c)
//     }
// }
// minNum(11,7,9)
//
// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// let maxNum=(a,b,c)=>{
//     if(a>b && a>c){
//         document.write(a);
//     } else if(b>a && b>c){
//         document.write(b);
//     }else{
//         document.write(c)
//     }
// }
// maxNum(11,7,9)

// - створити функцію яка повертає найбільше число з масиву

// let arr = [1, 2, 3, 4, 5, 6, 7, 32, 11];
// let maxNum = (array) => {
//     let max = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement > max) {
//             max = arrayElement;
//         }
//     }
//     return max;
// }
// document.write(maxNum(arr));

// - створити функцію яка повертає найменьше число з масиву

// let arr = [6, 88, 21, 76, 13, 793, 231, 32, 11];
// let minNum = (array) => {
//     let min = array[0];
//     for (const arrayElement of array) {
//         if (arrayElement < min) {
//             min = arrayElement;
//         }
//     }
//     return min;
// }
// document.write(minNum(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [6, 88, 21, 76, 13, 793, 231, 32, 11];
// let sumArr = (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum =arrayElement+sum;
//     }
//     return sum
// }
// document.write(sumArr(arr))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [6, 88, 21, 76, 13, 793, 231, 32, 11,121];
// let serAref =(array)=>{
//     let sum =0;
//     for (const arrayElement of array) {
//         sum=arrayElement+sum;
//     }
//     return sum/array.length;
// }
// document.write(serAref(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let maxMin = (arg) => {
    let max = arguments[0];
    let min = arguments[0];
    for (const element of arguments) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    console.log(max);
    return min;
}
document.write(maxMin(9, 7, 64, 21, 667, 643, 12, 45, 91));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].