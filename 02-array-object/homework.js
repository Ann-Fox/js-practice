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
let sayHello = ((name) => {
    if (name) {
        console.log(`Hello ${name}`);
    } else {
        console.log('Hello sameone');
    }
})
//or
// function sayHello(name = 'someone') {
//   console.log(`Hello, ${name}!`);
// }

// const sayHello = (name = 'someone') => {
//     console.log(`Hello, ${name}!`);
//   };
sayHello()
sayHello('Ben')

// task 5
function calc(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
    }
}

console.log(calc(1, 2, '+')); // 3
console.log(calc(1, 2, '-')); // -1
console.log(calc(2, 2, '*')); // 4
console.log(calc(4, 2, '/')); // 2

// task 6
let age = 25
let category = age >= 18 ? "Взрослый" : "Детский"
console.log(category);

//task 7
const a = 12
const b = 9
const c = a > b ? a : b
console.log(c);