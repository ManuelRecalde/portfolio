let icono = document.getElementsByClassName("icono-portada");
let tituloIcono = document.getElementsByClassName("titulo-icono");



for (let i = 0; i < icono.length; i++){


    icono[i].addEventListener("mouseover", e => {

        tituloIcono[i].style.display = "block";
        tituloIcono[i].style.marginLeft = "0.625rem";
    });


    icono[i].addEventListener("mouseout", e => {

        tituloIcono[i].style.display = "none";
        tituloIcono[i].style.marginLeft = "0";
    });


}
console.log("CONTRATAME PLS")
