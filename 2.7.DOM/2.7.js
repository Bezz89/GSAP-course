'use strict'

console. log (document);

const heading = document.querySelector ('h1')

heading.addEventListener('click', ()=>{
    console. log('cliked');
    // heading.classList.add('is-active')
    heading.classList.toggle('is-active')

})