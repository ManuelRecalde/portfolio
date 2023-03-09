const burgerMenu = document.getElementById('burger-menu')
const menuModal = document.getElementById('modal-menu')
let menuActivo = false
let elem_menu = document.querySelectorAll('.menu-mobile a')


function toggleMenu() {
    if (menuActivo == false){
        menuActivo = true;
        menuModal.className = menuModal.className + ' active';

    }else{
        menuActivo = false;
        menuModal.className = menuModal.className.replace(' active', '');
        
    }

}

function ocultarMenu(){
    menuActivo = false;
    menuModal.className = menuModal.className.replace(' active', '');

}

function menuMobile() {
    burgerMenu.addEventListener('click', toggleMenu);
    for (var i = 0; i < elem_menu.length; i++) {
        elem_menu[i].addEventListener('click', ocultarMenu);
        
    }
    
}
menuMobile()