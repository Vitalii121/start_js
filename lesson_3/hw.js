// // --створити масив з:
// //     - з 5 числових значень
// // - з 5 стічкових значень
// // - з 5 значень стрічкового, числового та булевого типу
// // - та вивести його в консоль
//
// let numbers = [5,6,4,7,3];
// let str = ['loshka','lopata', 'something', 'yet', 'enough'];
// let few = ['lol', false, 9, 1,true];
// console.log(str);
// console.log(numbers);
// console.log(few);

// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr =[];
// arr[0]=3;
// arr[1]=41;
// arr[2]=22;
// arr[3]=55;
// console.log(arr);

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for(let i = 0; i<10; i++){
//     document.write(`<div>довільний текст</div>`)
// }


// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//
// for(let i =0; i<10; i++){
//     document.write(`<div>dovilnuy text ${i}</div>`)
// }

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
// let i =0
// while (i<20){
//     document.write(`<h1> довільний текст</h1>`)
//     i++
// }

// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=0;
// while (i<20){
//     document.write(`<h1> довільний текст ${i} </h1>`)
//     i++
// }

// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arr =[9,8,7,6,5,3,2,1,33,42];
// for(i = 0; i<arr.length; i++){
//     console.log(arr[i])
// }

// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//
// let arr =['lol','gym','ten','one','two', 'try', 'ever','never', 'small', 'loder']
// for(i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//
// let arr=['gym','ten','one',true,'two', 'try', 'ever',33,42];
// for(i=0; i<10; i++){
//     console.log(arr[i]);
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
// let arr=['gym','ten','never',true,'LOL', 'try', 'ever',33,false];
// for(i=0; i<arr.length; i++){
//     if(typeof arr[i]==='boolean'){
//         console.log(arr[i])
//     }
// }

// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
// let arr=[2964,'ten','never',true,'LOL', 'try', 'ever',33,false];
// for(i=0; i<arr.length; i++){
//     if(typeof arr[i]==='number'){
//         console.log(arr[i]);
//     }
// }

// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let arr=[2964,'ten','never',true,'LOL', 'try', 'ever',33,false];
// for(i=0; i<arr.length; i++){
//     if(typeof arr[i]==='string'){
//         console.log(arr[i]);
//     }
// }

// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//
// let arr=[];
// arr[0]=4632;
// arr[1]=true;
// arr[2]='loshka';
// arr[3]='lopata';
// arr[4]=false;
// arr[5]=9;
// arr[6]='GYM';
// arr[7]='legends';
// arr[8]=true;
// arr[9]='alt';
// for(i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//
// for(i=0; i<10; i++){
//     console.log(i)
//     document.write(`${i} <br>`)
// }

// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for(i=0; i<100; i++){
//     console.log(i)
//     document.write(`${i} <br>`)
// }

// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//
// for(i=0; i<=200; i+=2){
//     console.log(i)
//     document.write(`${i} <br>`)
// }

// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//  for(i=0; i<202; i++){
//      if(i % 2 ===0){
//          console.log(i);
//          document.write(`${i} <br>`)
//      }
//  }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for(i=0; i<202; i++){
//     if(i % 2 !==0){
//         console.log(i);
//         document.write(`${i} <br>`)
//     }
// }






