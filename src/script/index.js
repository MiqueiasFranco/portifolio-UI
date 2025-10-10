const menu = document.querySelector('.menu')
const btnClose = document.querySelector('.close')
const sidebar = document.querySelector('.sidebar')
let onOFF = false

menu.addEventListener('click', ()=>{
    onOFF = !onOFF
    if(onOFF){
        sidebar.style.display = 'flex'
        sidebar.style.right = '0'
        sidebar.style.transition = '.5s ease-in-out'
    }
})

btnClose.addEventListener('click', ()=>{
    onOFF = !onOFF
    sidebar.style.right = '-2563px'
    sidebar.style.transition = '.5s ease-in-out'

})