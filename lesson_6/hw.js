// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let hello = 'hello world';
// document.write(hello.length);
//
// let lorem = 'lorem ipsum';
// document.write(`<br>` + lorem.length);
//
// let js = 'javascript is cool';
// document.write(`<br>` + js.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let hello = 'hello world';
// document.write(hello.toUpperCase());
//
// let lorem = 'lorem ipsum';
// document.write(`<br>` + lorem.toUpperCase());
//
// let js = 'javascript is cool';
// document.write(`<br>` + js.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let hello = 'HELLO WORLD';
// document.write(hello.toLowerCase());
//
// let lorem = 'LOREM IPSUM';
// document.write(`<br>` + lorem.toLowerCase());
//
// let js = 'JAVASCRIPT IS COOL';
// document.write(`<br>` + js.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// document.write(str.substring(0,));
// document.write(str.substring(13,16));
///////////////////
// let str = ' dirty string   ';
// let clean = str.trim();
// document.write(clean);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let stringToarray =(str)=>{
//     return  str.split(` `);
// }
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr);
// console.log(arr);


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, index) => {
//     return str.substr(0, index);
// }
// document.writeln(delete_characters(str, 7));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
// let insert_dash = (str) => {
//     let strUpperSplit = str.split(' ').join('-').toUpperCase();
//     return strUpperSplit;
// }
// document.write(insert_dash(str))

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let upperFirst=(str)=>{
//     if(!str) return str;
//     return str[0].toUpperCase()+str.slice(1);
// }
// document.write(upperFirst(`hello my friend <br>`));
// document.write(upperFirst('fact'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = (str) => {
//     return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }
//
// document.write(capitalize('приїхали додому'))
