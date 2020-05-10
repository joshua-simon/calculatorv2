const firstNum = document.querySelector('[data-num-one]')
const secondNum = document.querySelector('[data-num-two]')
const button = document.querySelector('[data-button]')


const getValueOne = () => {
    let inputVal1 = document.getElementById('input').value
    return inputVal1
}

const getValueTwo = () => {
    let inputVal2 = document.getElementById('input2').value
    return inputVal2
}


button.addEventListener('click', ()=> {
    console.log(parseInt(getValueOne())+parseInt(getValueTwo()))
})
