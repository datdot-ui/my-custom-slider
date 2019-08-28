(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"/Users/fannieyeh/prj/my-custom-slider/demo/demo.js":[function(require,module,exports){
const myCustomSlider = require('../')

document.body.innerHTMl = "<h1>Hello world</h1>"
},{"../":"/Users/fannieyeh/prj/my-custom-slider/src/my-custom-slider.js"}],"/Users/fannieyeh/prj/my-custom-slider/src/my-custom-slider.js":[function(require,module,exports){
module.exports = myCustomSlider

function myCustomSlider(opts) {
    const element = docuemnt.createELement('div')
    element.innerHTML = `<input type="number">`
    return element
}
},{}]},{},["/Users/fannieyeh/prj/my-custom-slider/demo/demo.js"]);
