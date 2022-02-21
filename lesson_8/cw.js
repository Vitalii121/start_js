// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header


// b) робить шириниу елементу ul 400px

let width = document.body.getElementsByTagName('ul')
console.log(width)
width[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let widthLinkList =document.body.getElementsByClassName('linkList');
// console.log(widthLinkList)
for (const widthLinkListElement of widthLinkList) {
    widthLinkListElement.style.width='50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let getListElement2 = document.body.getElementsByClassName('listElement2');
console.log(getListElement2);

// e) отримує всі елементи li та змінює ім колір фону на сірий

let getAllLi= document.body.getElementsByTagName('li');
console.log(getAllLi);
for (const allLiElement of getAllLi) {
    allLiElement.style.background='silver'
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let allElementA= document.body.getElementsByTagName('a')
// console.log(allElementA)
for (const allElementAElement of allElementA) {
    allElementAElement.classList.add('anchor');
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let elementsA= document.body.getElementsByTagName('a');
for (const elementsAElement of elementsA) {
    if(elementsAElement.innerText === 'link3'){
        elementsAElement.style.fontSize='40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a








// let aAll = document.getElementsByTagName('a');
// console.log(aAll);
// for (let aAllElement of aAll) {
//     console.log(aAllElement);
//     let newClass = aAllElement.innerText
//     aAllElement.classList.add(`element_${newClass}`)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)