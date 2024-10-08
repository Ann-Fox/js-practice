const names = ['Vlad', 'Helen', 'Igor', 'Kseny']
// names.push('alena') // работает максимально быстро
// names.unshift('alena') //добавляет первый элемент [0] вначало массива
// const name = names.shift() //удаляет и извлекает первый элемент из массива
// const name = names.pop() //удаляет и извлекает последний элемент из массива
// const name = names.pop() //удаляет последний элемент из массива

// console.log(names.reverse()) //изменяет исходный массив
// console.log(names.toReversed()) //возвращает новый массив
//
// const letters = ['e', 'c', 'b', 'd', 'a']
// console.log(letters.sort())
// console.log('names:', names)

// console.log(names.splice(2, 1))
// console.log(names.toSpliced(0, 1))


// const greatWoman = 'Helen'
// const  index  = names.indexOf(greatWoman)
// console.log(index)
// const newNames = names.with(index, 'Helen Great')
// console.log(names[index])
// console.log(names)
// console.log(newNames)

// const  capitalNames=names.map(function (name, index) {
//     // return name.toUpperCase()
//     if(index === 1) {
//         return 'Helen Great'
//     }
//     return name
// })
// console.log(capitalNames)

// console.log(names.includes('Igor'))
// console.log(names.indexOf('Igor'))

const people = [
    {name: 'Vlad', budget: 4200},
    {name: 'Helen', budget: 15100},
    {name: 'Igor', budget: 300},
    {name: 'Kseny', budget: 7520},
]

// console.log(people.indexOf({name: 'Vlad', budget: 4200}))

// let findedPerson
//так не нужно делать
// for (let person of people) {
//     if(person.budget === 7520){
//         findedPerson = person
//     }
// }
//альтернативный вариант ниже
// const  findedPerson = people.find(function (person) {
//   return person.budget===7520
//     // if (person.budget === 7520){
//     //     return true
//     // }
// })
//еще проще/лучше вариант - функциональное программирование - стрелочная функция (в одну строчку)
// const finded = people.find((a) => a.budget === 7520)

// const  finded = people.findIndex(function (person) {
//     return person.budget === 7520
// })
// console.log(finded)
// console.log(people[finded])
// console.log(people.with(finded, 42))
//
// const filtered = people.filter(function (p) {
//     return p.budget > 5000
// })
// console.log(filtered)

//выбрать людей, у которых бюджет >5000
// let sumBudget = 0
// const  filtered = people.filter(function (p) {
//     return p.budget >5000
// })
// console.log(filtered)
// filtered.forEach(function (p){
//     sumBudget = sumBudget + p.budget
// })

// const byBudget = p => p.budget > 5000
// const pickBudget = p => p.budget
//
// const sumBudget = people
//     .filter(byBudget)// .filter((p) => p.budget > 5000)
//     .map(pickBudget)// .map((p) => p.budget)
//     .reduce((acc, p) => acc + p, 0)
//
// console.log(sumBudget)

const string = 'Hi, how are you?'
const reversed = string.split('').toReversed().join('!').split('').filter((c)=> c!=='!').join('')

console.log(reversed)
