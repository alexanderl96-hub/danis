const imagen = document.getElementById('home')
const header = document.querySelector('header')
const entrada = document.querySelector('#entrada')
console.log(header)

imagen.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('header').classList.toggle('active');
    
})

