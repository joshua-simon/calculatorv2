const button = document.querySelector('[data-button]')
const output = document.querySelector('[data-num-output]')

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


button.addEventListener('click', () => {
    document.getElementById('numberOutput').innerHTML = add()
})

