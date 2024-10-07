// let num = 42
// let firstName = 'Anna'
// const isProgrammer = true

//Can Do
// let $ = 'test'
// let $num = 42
// let num$ = 42
// let _ = 49
// let _num = 12
// let num_ = 'Elena'
// let my_num = 34 //bed
// let myNum = 34 //good

//Restricted
// let 42num = 42
// let my-num = 42
// let const

// firstName = 'Max'
//isProgrammer = false //error

// alert(firstName)
// console.log("test:", firstName)

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)
// console.log(num)
//
// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num
// num2 = num2 + 1
// console.log(num, num2)
//
// let num3 = num + (10 * 2) / 5 - 1
// console.log(num3)

// const fullName = firstName+'Fox'
// const fullName = firstName+' '+'Fox'
// console.log(fullName)

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const btnPlus = document.getElementById('plus')
const btnMinus = document.getElementById('minus')
const btnMultiply = document.getElementById('multiply')
const btnDivide = document.getElementById('divide')
let action = '+'

btnPlus.onclick = function () {
    action = '+'
// console.log(resultElement.textContent)
}
btnMinus.onclick = function () {
    action = '-'
    // console.log(resultElement.textContent)
}
btnMultiply.onclick = function () {
    action = '*'
    // console.log(resultElement.textContent)
}
btnDivide.onclick = function () {
    action = '/'
    // console.log(resultElement.textContent)
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    switch (actionSymbol) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
    }
    // return actionSymbol === '+' ? num1 + num2 : '-' ? num1 - num2 : '*' ? num1 * num2 : (num1 / num2)
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
    // if (action === '+') {
    //     const sum = Number(input1.value) + Number(input2.value)
    //     printResult(sum)
    // } else if (action === '-') {
    //     const dif = Number(input1.value) - Number(input2.value)
    //     printResult(dif)
    // }
}
