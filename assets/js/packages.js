/*
npm install -g watchify
npm init
install packages
import here
watchify assets/js/packages.js -o assets/js/bundle.js
*/

// polyfill for Safary scrollIntoView options
var seamless = require("seamless-scroll-polyfill");
seamless.polyfill();


// inView check
var inView = require('in-view');

window.addEventListener("load", function(event) {


    // This is for navigation highlight
    inView.threshold(0.5);
    inView('.js-nav')
        .on('enter', el => {
            let item = '.navigation a[href="#' + el.getAttribute("id") + '"]'
            if(document.querySelector(item)) {
                document.querySelectorAll('.navigation a').forEach(function(el) {
                    el.classList.remove('active')
                });
                  
                document.querySelector(item).classList.add('active')
            }
        })

    // For animation, draw once
    inView.threshold(0);
    inView('.animate-inside')
        .on('enter', el => {
            el.classList.add('inview')
        })
});