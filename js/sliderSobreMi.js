let imagenes = [
    './img/sobre mi.jpg',
    './img/contacto.jpg',
    './img/foto.jpg',
]

document.sliderSobreMi.src = imagenes[0];

var Contador = 0;

function MoverDerecha(){
    Contador++;
     if(Contador > imagenes.length - 1)
        {
           Contador = 0;
        }
     document.sliderSobreMi.src = imagenes[Contador];
    }

setInterval(MoverDerecha, 5000)