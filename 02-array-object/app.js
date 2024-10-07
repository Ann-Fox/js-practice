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
const notes = ['записать блок про массивы', 'рассказать теорию объектов']

function render() {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0]))
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[1]))
}

render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return //undefined
    }
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(inputElement.value))
    inputElement.value = ''
}

function getNoteTemplate(title) {
    return `
 <li class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>${notes[0]}</span>
          <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
          </span>
        </li> 
`
}
