//
//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// let validator = (str) => {
//      str
//         .replaceAll('.',' ' )
//         .replaceAll('.',' ' )
// return str;
// }
//
// document.write(validator(n1))
// document.write(validator(n2))
// document.write(validator(n3))


// let name = (string, symbol) => {
//     let newArr = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol)
//         a.forEach((item) => {
//             if (item) newArr.push(item);
//         })
//         document.write(newArr.join(' '))
//     }
// }
// name(n1, '.');
// name(n2, '-');
// name(n3, '_');


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let random = (number, length) => {
    let newArr = [];
    for (let i = 0; i < length; i++) {
        newArr.push(Math.floor(Math.random() * number));
    }
    return newArr
}
console.log(random(100, 100));
//
//
// // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let randNums = random(100, 100);
//
// randNums.sort((a, b) => a - b);
// console.log(randNums);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// let randomFilter = (num, length) => {
//     let newArr = [];
//     for (let i = 0; i < length; i++) {
//         newArr.push(Math.floor(Math.random() * num));
//     }
//     return newArr.filter(elementArr => elementArr % 2 === 0);
// }
// console.log(randomFilter(100, 43));


// - створити масив рандомних цілих числових значень (або згенерувати,
//     за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.


let randomArr = (num, length) => {
    let newArr = [];
    for (let i = 0; i < length; i++) {
        newArr.push(Math.floor(Math.random() * num));
    }
    return newArr.map(element=>element.toString())
}
console.log(randomArr(123,13));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11, 21, 3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let sortNums = (array, direction) => {
//     if (direction === 'ascending') return array.sort((a, b) => a - b);
//     if (direction === 'descending') return array.sort((a, b) => b - a);
// }
// console.log(sortNums([12,4,6,3,2,2,3,1114,45,56,6,76,4], 'descending'))
// console.log(sortNums([12,4,6,3,2,2,3,1114,45,56,6,76,4], 'ascending'))

///////////////////////////////////////////////////////////////////////
// let sortNums = (direction) => direction.sort((a, b) => a - b)
// console.log(sortNums(nums))
////////////////////////////////////////////////////////////////////////

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filter = coursesAndDurationArray.filter((element) => {
    return element.monthDuration > 5;
})
console.log(filter);

// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));


