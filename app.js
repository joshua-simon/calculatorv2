const addButton = document.querySelector('[data-addButton]')
const subButton = document.querySelector('[data-subButton]')
const multButton = document.querySelector('[data-multButton]')
const divButton = document.querySelector('[data-divButton]')

const getValueOne = () => {
    let inputVal1 = document.getElementById('input').value
    return inputVal1
}

const getValueTwo = () => {
    let inputVal2 = document.getElementById('input2').value
    return inputVal2
}

const add = () => {
    return parseInt(getValueOne())+parseInt(getValueTwo())
}

const sub = () => {
    return parseInt(getValueOne())-parseInt(getValueTwo())
}

const mult = () => {
    return parseInt(getValueOne())*parseInt(getValueTwo())
}

const div = () => {
    return parseInt(getValueOne())/parseInt(getValueTwo())
}


addButton.addEventListener('click', () => {
    document.getElementById('numberOutput').innerHTML = add()
})

subButton.addEventListener('click', () => {
    document.getElementById('numberOutput').innerHTML = sub()
})

multButton.addEventListener('click', () => {
    document.getElementById('numberOutput').innerHTML = mult()
})

divButton.addEventListener('click', () => {
    document.getElementById('numberOutput').innerHTML = div()
})
