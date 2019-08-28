const myCustomSlider = require('../')

const form = { value1: 51, value2: 12 }
const data1 = {title: 'slider1', value: form.value1}
const data2 = {title: 'slider2', value: form.value2}
function listener1 (value) {
    // console.log('update1:', value)
    form.value1 = value
}
function listener2 (value) {
    // console.log('update2:', value)
    form.value2 = value
}
const slider1 = myCustomSlider(data1, listener1)
const slider2 = myCustomSlider(data2, listener2)

const button = document.createElement('button')
button.innerText = "click me"
button.onclick = event => {
    console.log('form.value1:', form.value1)
    console.log('form.value2:', form.value2)
    const element = document.querySelector('.list') || document.createElement('div')
    element.classList.add('list')
    element.innerHTML = `<div>
        <p>Slider1 value = ${form.value1}</p>
        <p>Slider2 value = ${form.value2}</p>
    </div>`
    document.body.appendChild(element)
}
document.body.appendChild(slider1)
document.body.appendChild(slider2)
document.body.appendChild(button)
