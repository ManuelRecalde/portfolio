var propScroll = {

    posicion: window.pageXOffset,
    scroll_suave: document.getElementsByClassName('scroll-suave'),
    volver_arriba: document.getElementsByClassName('volver-arriba'),
    destino: null,
    seccion_distancia: null,
    intevarlo: null,

}


var metScroll = {

    inicio: function(){

        for (var i = 0; i < propScroll.scroll_suave.length; i++) {
            propScroll.scroll_suave[i].addEventListener('click', metScroll.moverse);
            
        }

        for (var i = 0; i < propScroll.volver_arriba.length; i++) {
            propScroll.volver_arriba[i].addEventListener('click', metScroll.subir);
            
        }


    },

    moverse: function(e){

        e.preventDefault();
        clearInterval(propScroll.intevarlo);
        propScroll.destino = this.getAttribute('href');
        propScroll.seccion_distancia = document.querySelector(propScroll.destino).offsetTop - 94;

        propScroll.posicion = window.pageYOffset;
        propScroll.intevarlo = setInterval(function(){

            if (propScroll.posicion < propScroll.seccion_distancia ) {

                propScroll.posicion += 30;

                if(propScroll.posicion >= propScroll.seccion_distancia){

                    clearInterval(propScroll.intevarlo);

                }

            }else{
                propScroll.posicion -= 30;
                if(propScroll.posicion <= propScroll.seccion_distancia){

                    clearInterval(propScroll.intevarlo);

                }
            }

            window.scrollTo(0, propScroll.posicion);

        }, 15);

    },

    subir: function(e){
        e.preventDefault();
        clearInterval(propScroll.intevarlo);
        propScroll.posicion = window.pageYOffset;
        propScroll.intevarlo = setInterval(function () {

            if (propScroll.posicion > 0){

                propScroll.posicion -= 30;

                if(propScroll.posicion <= 0){
                    clearInterval(propScroll.intevarlo);

                }
                

            }else{
                return;
            }
            


            window.scrollTo(0, propScroll.posicion);
        }, 15);


        
    }



}

metScroll.inicio();