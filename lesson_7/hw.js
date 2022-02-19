// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone
// }
//
// //
// let array = [
//     new User(19, 'ivan', 'muha', 'qtw@gmail.com', 80979797111),
//     new User(29, 'julia', 'word', 'qqw@gmail.com', 80979797122),
//     new User(31, 'vasya', 'ronaldo', 'qew@gmail.com', 80979797133),
//     new User(567, 'misha', 'loshka', 'qvw@gmail.com', 80979797144),
//     new User(131, 'benjamin', 'franklin', 'qzw@gmail.com', 80979797155),
//     new User(93, 'lesia', 'doshka', 'qjt@gmail.com', 80979797166),
//     new User(42, 'youra', 'chaynik', 'wzw@gmail.com', 80979797177),
//     new User(1, 'ivan', 'dorn', 'qww@gmail.com', 80979797188),
//     new User(74, 'jone', 'cina', 'xvw@gmail.com', 80979797199),
//     new User(274, 'rendy', 'orton', 'qpw@gmail.com', 80979797100)
// ];
// console.log(array)
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// let filterId = array.filter((arrr) => {
//     if (arrr.id % 2 === 0) {
//         return arrr
//     }
// })
// console.log(filterId);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let ascending = array.sort((a, b) => a.id - b.id);
// console.log(ascending);
//
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id,
//             this.name = name,
//             this.surname = surname,
//             this.email = email,
//             this.phone = phone,
//             this.order = order
//     }
// }
//
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// let newArray = [
//
//     new Client(19, 'ivan', 'star', 'qtw@gmail.com', 80979797112,['pen','box','bread', 'sugar']),
//     new Client(29, 'julia', 'word', 'qqw@gmail.com', 80979797121,['cream','car','phone']),
//     new Client(31, 'vasya', 'ronaldo', 'qew@gmail.com', 80979797138,['windows','key','processor', 'ps5']),
//     new Client(57, 'misha', 'loshka', 'qvw@gmail.com', 80979797111,['book','copybook']),
//     new Client(37, 'benjamin', 'franklin', 'qzw@gmail.com', 80979797165,['gan']),
//     new Client(93, 'lesia', 'lipa', 'qjt@gmail.com', 80979797116,['cap','glass','pnapple', 'apple']),
//     new Client(42, 'youra', 'chaynik', 'wzw@gmail.com', 80979797170,['plate','tomato','water', 'apple','flower']),
//     new Client(1, 'ivan', 'dorn', 'qww@gmail.com', 80979797181,['t-short','shoos','ps4']),
//     new Client(74, 'jone', 'cina', 'xvw@gmail.com', 80979797195,['film']),
//     new Client(24, 'rendy', 'orton', 'qpw@gmail.com', 80979797101,['router','bed','bag', 'monitor'])
// ];
// console.log(newArray);
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// console.log(newArray.sort((a,b)=>a.order.length - b.order.length));
//
