// - створити функцію яка обчислює та повертає площу прямокутника

let sPriamokutn = (a, b) => a * b;
document.write('Площа прямокутника:' + sPriamokutn(2, 2));
// - створити функцію яка обчислює та повертає площу кола

const PI = 3.14;
let sCircle = (r) => PI * r ** 2;
document.write(`<br>Площа кола:` + sCircle(2));

// - створити функцію яка обчислює та повертає площу циліндру

let s = (r, h) => 2 * PI * r * h;
document.write(`<br>Площа бокової поверхні циліндра: ` + s(2, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1, 6, 3, 8, 5, 9, 7];
let iterator = (array) => {
    for (let arrayElement of array) {
        document.write(`<br>` + arrayElement);
        console.log(arrayElement);
    }
}
iterator(arr)
// // - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let paragraph = (text) => {
//     document.write(`<p> ${text} </p>`);
// }
// paragraph(`loshka`);
//
// // - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let list = (text) => {
//     document.write(`<ul>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//         document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// list(`lol`)

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let list=(text,quantity)=>{
//     document.write(`<ul>`);
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list(`lol`, 10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr = [43, 5, 3, 2, 1, 68, 'lol', true, 'bit', false];
// let itera=(array)=> {
//     document.write(`<ul>`);
//     for (let arrElement of array) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
// itera(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arr = [
//     {
//         id: 9223,
//         name: 'Ivan',
//         age: 20
//     },
//     {
//         id: 1543,
//         name: 'Anna',
//         age: 27
//     },
//     {
//         id: 4583,
//         name: 'Ira',
//         age: 19
//     }, {
//         id: 1833,
//         name: 'Vitalii',
//         age: 21
//     },
//     {
//         id: 1901,
//         name: 'Vladislava',
//         age: 24
//     }
// ];
// let iterObj =(array)=>{
//     for (let arrayElement of array) {
//         let array=arrayElement;
//         document.write(`<div>${array.id} ${array.name} ${array.age}</div>`);
//     }
//
// }
// iterObj(arr);

