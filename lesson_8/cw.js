// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// b) робить шириниу елементу ul 400px

let width = document.body.getElementsByTagName('ul')
console.log(width)
width[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let widthLinkList = document.body.getElementsByClassName('linkList');
// console.log(widthLinkList)
for (const widthLinkListElement of widthLinkList) {
    widthLinkListElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let getListElement2 = document.body.getElementsByClassName('listElement2');
console.log(getListElement2);

// e) отримує всі елементи li та змінює ім колір фону на сірий

let getAllLi = document.body.getElementsByTagName('li');
console.log(getAllLi);
for (const allLiElement of getAllLi) {
    allLiElement.style.background = 'silver'
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let allElementA = document.body.getElementsByTagName('a')
// console.log(allElementA)
for (const allElementAElement of allElementA) {
    allElementAElement.classList.add('anchor');
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let elementsA = document.body.getElementsByTagName('a');
for (const elementsAElement of elementsA) {
    if (elementsAElement.innerText === 'link3') {
        elementsAElement.style.fontSize = '40px'
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let allATag = document.body.getElementsByTagName('a');
for (const allATagElement of allATag) {
    let text = allATagElement.innerText
    allATagElement.classList.add(`element_xxx${text}`)
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let getSubHeader= document.body.getElementsByClassName('sub-header');
// for (const subHeaderElement of getSubHeader) {
//     subHeaderElement.style.background=prompt('give me five and some color');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let changeColor = document.body.getElementsByClassName('sub-header');
// for (const changeColorElement of changeColor) {
//     if(changeColorElement.innerText === 'content 2 segment'){
//         changeColorElement.style.color=prompt('give me five and some color')
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let classContent1 = document.body.getElementsByClassName('content_1');
// classContent1[0].innerText = prompt('some text')

// l) отримати елементи p та змінити їм padding на 20px

// let getP=document.body.getElementsByTagName('p');
// // console.log(getP)
// for (const pElement of getP) {
//     pElement.style.padding='20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

let getText2 = document.body.getElementsByClassName('text2');
getText2[0].innerText='dec-2021'
