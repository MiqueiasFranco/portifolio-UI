let imgslide= document.querySelectorAll('.slider-box')
let btnAnterior= document.querySelector('#btn-anterior')
let btnProximo= document.querySelector('#btn-proximo')


let contadorImg =  imgslide.length
let imgAtiva = 0

btnProximo.addEventListener('click',()=>{

    
    if(imgAtiva >= contadorImg){
        imgAtiva = 0

    }
    for(let card of imgslide){
        if(card.classList.contains('ativo')){
            card.classList.remove('ativo')
        }
    }
    imgslide[imgAtiva].classList.add('ativo')
    imgAtiva ++
})

btnAnterior.addEventListener('click',()=>{

    
    imgAtiva --
    if(imgAtiva < 0){
        imgAtiva = contadorImg -1

    }
    for(let card of imgslide){
        if(card.classList.contains('ativo')){
            card.classList.remove('ativo')
        }
    }
    imgslide[imgAtiva].classList.add('ativo')
})




