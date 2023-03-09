const btnVerMas = document.getElementById('ver-mas')
const seccionEstudios = document.getElementById('estudios')


btnVerMas.addEventListener('click', ()=>{
    // btnVerMas.textContent= 'Ver menos'
    seccionEstudios.classList.toggle('new-height')
    
    setTimeout(()=>{
        if (btnVerMas.innerHTML == 'Ver más'){
            btnVerMas.innerHTML = 'Ver menos'
        } else {
            btnVerMas.innerHTML = 'Ver más'
        }
    },100) 
    
})
