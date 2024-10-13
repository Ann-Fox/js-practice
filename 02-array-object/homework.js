//task 1
// let a = 11

// if(a%2==0){
// console.log('Четное');
// } else {
// a +=1
// console.log('Нечетное');
// }

//task 2
// for(let i=0; i<=1000; i++){
//     if(i%2==0 || i%12==0) {
//         console.log(i);
//     }
// }

// task 3
// const array =[1, 10, 15, -100, -23, 19, 15032]
// let newArray = array.map(function(item) {
//     return item += item*0.25
// })
//or
// const newArr = [];
// for(const i of arr) {
// 	newArr.push(i * 1.25);
// }

// console.log(array);
// console.log(newArray);

//task 4
// function sayHello(name) {
//     if(name) {
//         console.log(`Hello ${name}`);
//     } else {
//         console.log('Hello sameone');
//     }
// }
// let sayHello = ((name) => {
//     if (name) {
//         console.log(`Hello ${name}`);
//     } else {
//         console.log('Hello sameone');
//     }
// })
// //or
// // function sayHello(name = 'someone') {
// //   console.log(`Hello, ${name}!`);
// // }

// // const sayHello = (name = 'someone') => {
// //     console.log(`Hello, ${name}!`);
// //   };
// sayHello()
// sayHello('Ben')

// // task 5
// function calc(a, b, operation) {
//     switch (operation) {
//         case '+':
//             return a + b
//         case '-':
//             return a - b
//         case '*':
//             return a * b
//         case '/':
//             return a / b
//     }
// }

// console.log(calc(1, 2, '+')); // 3
// console.log(calc(1, 2, '-')); // -1
// console.log(calc(2, 2, '*')); // 4
// console.log(calc(4, 2, '/')); // 2

// // task 6
// let age = 25
// let category = age >= 18 ? "Взрослый" : "Детский"
// console.log(category);

// //task 7
// const a = 12
// const b = 9
// const c = a > b ? a : b
// console.log(c);

//Массивы и объекты
// task 1
const join = {
    name: 'Join',
    age: 15,
    pet: 'Luky'
}
const ann = {
    name: 'Ann',
    age: 23,
    pet: 'Lucy'
}

// function info(obj) {
//     console.log(`Меня зовут ${obj.name}, мне ${obj.age}, у меня есть питомец ${obj.pet}`);
// }

const info = ({ name, age, pet })=> console.log(`Меня зовут ${name}, мне ${age}, у меня есть питомец ${pet}`)

info(join)
info(ann)

// function incrementAge(obj) {
//     console.log(++obj.age)
// }
const incrementAge = people => (console.log(++people.age))
incrementAge(join)
incrementAge(ann)

// for (const item in join) {
//     console.log(`${item}: ${join[item]}`);
// }
// console.log(Object.entries(join))
const display = object => {
    for (const [key, value] of Object.entries(object)) {
            console.log(`${key}: ${value}`);
    }
}
display(join)
// task 2
// function sum(array) {
//     let summa = 0
//     for (let i = 0; i < array.length; i++) {
//         summa += array[i]
//     }
//     console.log(summa);
// }

function sum(array){
    let a =0
    for (const item of array) {
        a +=item
    }
    console.log(a);
    return a
}
const arr = [1, 50, 20, 75, 90];

sum(arr); // 236

// task 3
// const names = []
// names.push('Ann')
// names.push('Alex')
// names.push('Lily')
// names.push('Jon')
// names.push('Ben')
// console.log(names);

// names.shift()
// names.pop()
// console.log(names);

// task 4
const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];

function createList(array) {
    for (let i = 0; i <= array.length; i++) {
        // console.log(array[i]);
        return `<li>${array[i]}</li>`
    }
}

const render = arr => `<ul>${arr.map(i => `<li>${i}</li>`).join('')}</ul>`;

// const render = createList(names)
console.log(render(names));

// task 5
// Необходимо выполнить деструктуризацию объекта (для всех полей). Выведите полученные переменные в консоль. 
// const obj = {
//     age: 22,
//     favColor: 'red',
//     height: 188,
//     pet: 'dog',
//     money: 12300
// };

// // цикл по ключам и значениям
// for (let [key, value] of Object.entries(obj)) {
//     console.log(`${key}:${value}`); // name:John, затем age:30
// }
//variant 2
// const {age,favColor,height,pet,money}=obj
// console.log({age,favColor,height,pet,money});
//or
// let newObj = obj
// console.log(newObj);

// // task 6
const object = {
    age: 22,
    favColor: 'red',
    height: 188,
    pet: 'dog',
    money: 12300
};

const updateObj = {
    age: 23,
    favColor: 'blue',
    money: 11450
};

const obj2 = {...object, ...updateObj}

console.log(obj2);
/**
 * {
 *	age: 23,
 *	favColor: 'blue',
 *	height: 188,
 *	pet: 'dog',
 *	money: 11450
 * }
 */
