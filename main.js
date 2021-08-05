let divMenu = document.querySelector('.menu')
let icon = document.querySelector('#iconMenu')
let x = false
icon.addEventListener('click',() =>{
    if(x == true){
        divMenu.classList.remove('selecao')
        icon.classList.remove('selecao')
        x = false
    }else if(x == false){
        divMenu.classList.add('selecao')
        icon.classList.add('selecao')
        x = true
    }
    
})