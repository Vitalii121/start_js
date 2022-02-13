// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minNum(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else {
//         console.log(c)
//     }
// }
//
// minNum(20, 13, 12)
//
// // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//
// function maxNum(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
//
// maxNum(2, 39, 93);

// - створити функцію яка повертає найбільше число з масиву

// let arr = [1, 2, 3, 4, 5, 6, 7, 2010, 192, 313, 566, 1123];
//
// function maxNum(array) {
//     let i = array[0]
//     for (const Element of array) {
//         if (Element > i) {
//             i = Element;
//         }
//     }
//     return i
// }
//
// document.write(maxNum(arr))

// - створити функцію яка повертає найменьше число з масиву

// let arr = [33, 14, 76, 32, 9, 54, 7, 363, 192, 313, 566, 335];
// function minNam(array){
//     let i =array[0];
//     for (const arrayElement of array) {
//         if(arrayElement<i){
//             i=arrayElement;
//         }
//     }
//     return i;
// }
// document.write(minNam(arr))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let arr = [5, 10, 15, 30, 20, 5];
// function sumArr(array){
//     let elem =0;
//     for (const arrayElement of array) {
//         elem = arrayElement+elem;
//     }
//     return elem;
// }
// document.write(sumArr(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [5, 10, 15, 30, 20, 5];
// function sumArr(array){
//     let elem =0;
//     for (const arrayElement of array) {
//         elem = arrayElement+elem;
//     }
//     return elem/array.length;
// }
// document.write(sumArr(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// function maxNumber (arg){
//     let max=arguments[0];
//     let min =arguments[0];
//     for (const element of arguments) {
//         if(element>max){
//             max=element;
//         }
//         if(element<min){
//             min=element;
//         }
//     }
//     console.log(max)
//     return min;
// }
// document.write(maxNumber(9,7,64,21,667,643,12,45,91))

// function minMax() {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log("max ", max);
//     return min;
// }
// document.write('Мінімальне число з введених: ' + minMax(100, 20, 3, 100, 2021))


// - створити функцію яка заповнює масив рандомними числами

// function randArray(array){
//     let emptArr=[];
//     for(let i=1; i<=array; i++){
//         emptArr.push(Math.floor(Math.random()*100))
//     }
//     return emptArr;
// }
// document.write(randArray(15))
// console.log(randArray(15))

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randArray(array, limit) {
//     let emptArr = [];
//     for (let i = 1; i <= array; i++) {
//         emptArr.push(Math.floor(Math.random() * limit))
//     }
//     return emptArr;
// }
//
// document.write(randArray(15, 400))
// console.log(randArray(15, 230))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let mas = [1, 2, 3]

function reverse(array) {
    let arr = [];
    let ri = array.length - 1;
    for (let arrayElement of array){
        arr[ri]=arrayElement;
        ri--;
    }
    return arr;
}

console.log(reverse(mas))






