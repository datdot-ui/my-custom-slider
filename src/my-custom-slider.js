const csjs = require('csjs-inject')
module.exports = myCustomSlider

function myCustomSlider(opts, notify) {
    const title = opts.title || 'default title'
    const value = opts.value || 0
    const element = document.createElement('div')

    element.classList.add(css.slider)
    element.innerHTML = `
        <label>${title}</label>
        <input type="number" value="${value}">`

    const input = element.children[1]
    input.onchange = (e) => {
        // opts.value = input.value
        // console.log('changed: ', input.value)
        notify(input.value)
    }

    return element
}

const css = csjs`
    .slider {
        padding: 5px;
    }
`