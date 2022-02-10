// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function ploschapriamok(a, b) {
//     return a * b;
// }
// console.log(ploschapriamok(12,100))


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function ploschaKola(r) {
//     const PI = 3.141592653589793238462643;
//     let radius=r**2;
//     return PI * radius;
// }
// console.log(ploschaKola(4))


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylindeArea(h,r){
//     let s= 2*3.141592653589793238462643*r*h;
//     return s;
// }
//
// console.log(cylindeArea(10,6))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let arr=[1,2,3,4,5,6,7,7,true,'lol', 'bit']
// function iteratorArray(array) {
//     for (let i=0; i<array.length; i++) {
//         console.log(array[i])
//     }
// }
//
// iteratorArray(arr);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function creatorParagraph(text) {
//     document.write(`<p>${text}</p>`)
// }
//
// creatorParagraph('loshka')
// creatorParagraph('loshka')
// creatorParagraph('loshka')
// creatorParagraph('something')
//
// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function creatorList(text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//         document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// creatorList('paradise');
// creatorList('paradise');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function creatorList(text, quantity) {
//     document.write(`<ul>`)
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// creatorList(`paradise`, 9);
// creatorList(`paradise`, 9);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arr=[1,2,3,4,5,6,7,7,true,'lol', 'bit', false]
// function iteratorArray(array) {
//     document.write(`<ul>`)
//     for (let i=0; i<array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
// iteratorArray(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arr=[
//     {
//         id:9223,
//         name:'Ivan',
//         age:20
//     },
//     {
//         id:1543,
//         name:'Anna',
//         age:27
//     },
//     {
//         id:4583,
//         name:'Ira',
//         age:19
//     },    {
//         id:1833,
//         name:'Vitalii',
//         age:21
//     },
//     {
//         id:1901,
//         name:'Vladislava',
//         age:24
//     }
// ];
// function iterObj(object){
//     for (const objectElement of object) {
//         document.write(`<div>${objectElement.id} ${objectElement.name} ${objectElement.age}</div>`)
//     }
// }
// iterObj(arr);





