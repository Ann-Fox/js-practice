// // Theory
//
// const array = [1, 2, 3, 5, 20, 42]
// // const arrayString = ['a','b','s']
// // const array = new Array(1,2, 3,5,20)
//
// console.log(array.length)
// console.log(array[array.length-1])
// // console.log(array[10])
// array[0] = 'privet'
// console.log(array)
// array[array.length] = 'becon'

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value)
// console.log(createBtn)
// console.log(listElement)

// function render() {
//     // for (let i=0; i < notes.length; i++) {
//     //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//     // }
//     for (const note of notes) {
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }
// }
//
// render()

// createBtn.onclick = function () {
//     if (inputElement.value.length === 0) {
//         return //undefined
//     }
//     listElement.insertAdjacentHTML(
//         'beforeend',
//         getNoteTemplate(inputElement.value))
//     inputElement.value = '' //обновление инпута
// }

/**
 * Theory Object
 *
 const person = {
 firstName: 'Ann',
 lastName: 'Fox',
 year: 1990,
 hasGirlfriend: false,
 lang: ['ru', 'en'],
 getFullName: function () {
 console.log(person.firstName + ' ' + person.lastName)
 }
 }
 // person.getFullName()
 console.log(person.year)
 console.log(person['lang'])
 const key = 'hasGirlfriend'
 console.log(person[key])
 person.hasGirlfriend = true
 console.log(person[key])
 person.getFullName()
 */

const notes = [
    {
        title: 'записать блок про массивы',
        competed: false,
    },
    {
        title: 'рассказать теорию объектов',
        competed: true,
    }
]

function render() {
    listElement.innerHTML = ''
    if(notes.length === 0){
        listElement.innerHTML = `<p>no task</p>`
    }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
    // for (const note of notes) {
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
    // }
}

render()

listElement.onclick = function (event) {
    // console.log(event.target.dataset.index)
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle') {
            notes[index].competed = !notes[index].competed
        } else if (type === 'remove') {
notes.splice(index, 1)        }
        render()
    }
}

function getNoteTemplate(note, index) { //формирование строки для каждой задачи
    return `
 <li class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span class="${note.competed ? 'text-decoration-line-through' : ''}">${note.title}</span>
          <span>
            <span class="btn btn-small btn-${note.competed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove">&times;</span>
          </span>
        </li> 
`
}

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return //undefined
    }
    const newNote = {
        title: inputElement.value,
        completed: false
    }
    // listElement.insertAdjacentHTML(
    //     'beforeend',
    //     getNoteTemplate(newNote))
    notes.push(newNote)
    render()
    inputElement.value = '' //обновление инпута
}
