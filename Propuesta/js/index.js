//Vars

const boton = document.querySelector('button')
const input = document.querySelector('input')

//listeners

boton.addEventListener('click' , function (e){
    e.preventDefault()
    if(input.value === ""){
        input.classList.toggle('inputError')
    }
})