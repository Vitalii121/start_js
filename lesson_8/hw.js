// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

let getIdCon = document.getElementById('content');
console.log(getIdCon)

// -- отримує текст з блоку з id "rules"

let getText = document.getElementById('rules');
console.log(getText);

// -- замініть текст параграфа з id 'content' на будь-який інший

getIdCon.innerText = 'Dolorem eaque earum eligendi, iste maxime molestias quam vitae.';

// -- замініть текст параграфа з id 'rules' на будь-який інший

getText.innerText = 'Второе правило Бойцовского клуба: никогда никому не рассказывать о Бойцовском клубе. Третье правило Бойцовского клуба: в схватке участвуют только двое. Четвертое правило Бойцовского клуба: не более одного поединка за один раз';

// -- змініть кожному елементу колір фону на червоний

let bcgrText= document.body.children;
for (const bcgrTextElement of bcgrText) {
    bcgrTextElement.style.background='red';
}

// -- змініть кожному елементу колір тексту на синій

for (const bcgrTextElement of bcgrText) {
    bcgrTextElement.style.background='blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

let getIdRules=document.getElementById('rules')
console.log(getIdRules);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний

let changeColor=document.body.getElementsByClassName('fc_rules');
for (const changeColorElement of changeColor) {
    changeColorElement.style.color='red'
}

