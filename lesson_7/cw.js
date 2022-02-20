// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function CreatorCars(model, producer, year, maxspeed, enginecapacity) {
//     this['model'] = model,
//         this['producer'] = producer,
//         this['year'] = year,
//         this['maxspeed'] = maxspeed,
//         this['enginecapacity'] = enginecapacity,
//
//         this['drive'] = function () {
//             console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//         }
//     this['info'] = function () {
//         for (const k in this) {
//             if (typeof this[k] !== 'function') {
//                 console.log(`${k} - ${this[k]}`)
//             }
//         }
//     }
//     this['increaseMaxSpeed'] = function (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed
//     }
//     this['changeYear'] = function (newValue) {
//         this.year = newValue;
//     }
//     this['addDriver'] = function (driver) {
//         this.driver = driver;
//     }
// }
//
//
// let car = new CreatorCars('911', 'Porsche', 2018, 309, 3.0)
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(11);
// car.changeYear(2021);
// car.addDriver('Vitalii')
// car.info();
// car.drive()
// console.log(car)

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Creator {
//     constructor(model, producer, year, maxspeed, enginecapacity) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.enginecapacity = enginecapacity;
//     }
//
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//
//     info() {
//         for (const key in this) {
//             if (typeof this[key] !== `function`) {
//                 console.log(`${key} - ${this[key]}`)
//             }
//         }
//     }
//
//     increaseMaxSpeed (newSpeed){
//         return this.maxspeed=this.maxspeed+newSpeed;
//     }
//
//     changeYear (newValue){
//         return this.year=newValue;
//     }
//
//     addDriver (driver){
//         this.driver=driver;
//     }
// }
//
// let car =new Creator('GT3 RS', 'Porsche', 2019,319,3.0)
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(21);
// car.changeYear(2021);
// car.addDriver('Vitaliy');
// console.log(car)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Popelushka(name, age, fitshoes) {
    this.name = name;
    this.age = age;
    this.fitshoes = fitshoes;
}

let arrPopelushka = [
    new Popelushka('Olecsandra', 21, 30),
    new Popelushka('Inna', 26, 29),
    new Popelushka('Ivanna', 23, 33),
    new Popelushka('Andriana', 28, 39),
    new Popelushka('lilia', 22, 32),
    new Popelushka('Olesia', 24, 31),
    new Popelushka('Petra', 19, 35),
    new Popelushka('Maria', 20, 38),
    new Popelushka('Viktoria', 18, 36),
    new Popelushka('Valentina', 29, 40),
]
// console.log(arrPopelushka)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

function Princ(name, age, findshoes) {
    this.name = name;
    this.age = age;
    this.findshoes = findshoes;
}

let wasasdas = new Princ('Loci', 37, 38);
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let findPopelushku = (arrPopelushka, wasasdas) => {
    for (const firstElement of arrPopelushka) {
        if (firstElement.fitshoes === wasasdas.findshoes) {
            return `youre popelushku to find, her name is ${firstElement.name}`
        }
    }
}
// console.log(findPopelushku(arrPopelushka, wasasdas));


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let second=arrPopelushka.find((firstElement)=>firstElement.fitshoes === wasasdas.findshoes)
console.log(second)

