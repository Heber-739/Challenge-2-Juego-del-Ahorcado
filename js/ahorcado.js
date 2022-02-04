var cuerpo = document.querySelector("html");
var pizarra = document.querySelector("canvas");
var pincel = pizarra.getContext("2d");
var boton = document.querySelector("#iniciar-juego");
var agregar = document.querySelector("#agregador")



var palabras = [
    "usted",
   "chico",
    "hacia",
    "entiendes",
    "muchachos",
    "gusto",
    "anoche",
    "deben",
    "recuerdas",
    "quieras",
    "quedarse",
    "definitivamente",
    "nervioso",
    "sentado",
    "muestra",
    "primo",
    "tomas",
    "evidencia",
    "mires",
    "vives",
    "responsabilidad",
    "andando",
    "trabajas",
    "mentiroso",
    "conciencia",
    "posibilidades",
    "contado",
    "armario",
    "rastro",
    "entrando",
    "casco",
    "consecuencias",
    "buscado",
    "torneo"];
agregar.addEventListener('click', function(event){
    event.preventDefault();
    var agregarPalabra = document.querySelector("#nueva-palabra");
    palabras.push(agregarPalabra.value);
    console.log(palabras);
})

boton.addEventListener('click', function(){
    pincel.clearRect (0,0,1200,800);
    iniciarJuego();
    pizarra.focus();
    var indice = Math.round(Math.random()*(palabras.length));
    var palabra = palabras[indice].toUpperCase();
    crearEspacioLetras(palabra);
    console.log(palabra);
    var letras = [];
    var espaciado = 150;
    var errores = 0; 
    var aciertos = 0;
    cuerpo.addEventListener("keypress", function(event){
        pincel.clearRect (350,0,1200,300);
        var input = event.key;
        if (mostrarErrores(input,letras)) {
            espaciado += 25;
            var seAcerto = dibujarLetras(input.toUpperCase(),palabra);
            if ( seAcerto == 0){
                letras.push(input);
                pincel.beginPath();
                pincel.font = "30px arial";
                pincel.fillStyle = "red";
                pincel.fillText(input, 300 + espaciado, 400);
                errores += 1;
                fallas(errores);
                if (errores == 9) {
                    pincel.beginPath();
                    pincel.font = "40px arial";
                    pincel.fillStyle = "red";
                    pincel.fillText("Perdió, la palabra era:", 470, 150);
                    pincel.font = "45px arial bold";
                    pincel.fillText(palabra, 470, 200);
                    pincel.font = "20px arial bold";
                    pincel.fillText("Presione una tecla para reiniciar.", 470, 230);
                    cuerpo.addEventListener("keypress",function(event){
                        location.reload();
                    });
                }               
            } else  {
                letras.push(input);
                pincel.beginPath();
                pincel.font = "30px arial";
                pincel.fillStyle = "green";
                pincel.fillText(input, 300 + espaciado, 350);
                aciertos += seAcerto;
                if (aciertos == palabra.length){
                    pincel.beginPath();
                    pincel.font = "40px arial bold";
                    pincel.fillStyle = "green";
                    pincel.fillText("Felicidades!! ah adivinado la palabra.", 470, 150);
                    pincel.font = "20px arial bold";
                    pincel.fillText("Presione una tecla para reiniciar.", 470, 200);
                    cuerpo.addEventListener("keypress",function(event){
                        location.reload();
                    });
                }
            }
        }        
    })
})

function crearEspacioLetras(palabra){
    var inicio = 270;
    var espacio = (900/(palabra.length));
    pincel.lineWidth = "3";
    pincel.strokeStyle = "black";
        if (palabra.length <= 5) {
            for (let i = 0; i < palabra.length; i++) {
                pincel.beginPath();
                pincel.moveTo(inicio, 550);
                pincel.lineTo((inicio + (espacio)/1.3), 550);
                pincel.stroke();
                inicio += ((espacio/1.3) + 20);
            }
        } else if (palabra.length > 5 && palabra.length <= 8){
            for (let i = 0; i < palabra.length; i++) {
                pincel.beginPath();
                pincel.moveTo(inicio, 550);
                pincel.lineTo((inicio + (espacio)/1.5), 550);
                pincel.stroke();
                inicio += ((espacio/1.5) + 20);
            }
        } else if (palabra.length > 8){
            for (let i = 0; i < palabra.length; i++) {
                pincel.beginPath();
                pincel.moveTo(inicio, 550);
                pincel.lineTo((inicio + (espacio)/2), 550);
                pincel.stroke();
                inicio += ((espacio/2) + 20);
            }
        }
}
function dibujarLetras(letra, palabra){
    var inicio = 270;
    var espacio = (900/(palabra.length));
    var aciertos = 0;
    pincel.beginPath();
    pincel.fillStyle = "black";
    if (palabra.length <= 5) {
        for (var i = 0; i < palabra.length; i++) {
            if (letra == palabra[i]) {
                pincel.beginPath();
                pincel.font = "90px arial bold";
                pincel.fillText(palabra[i], ((inicio - 15) + (espacio/1.3)/2), 540);
                inicio += ((espacio/1.3) + 20);
                aciertos += 1;
            } else {
                inicio += ((espacio/1.3) + 20);
            }
        }
    } else if ((palabra.length > 5) && (palabra.length <= 8)){
        for (var i = 0; i < palabra.length; i++) {
            if (letra == palabra[i]) {
                pincel.beginPath();
                pincel.font = "50px arial bold";
                pincel.fillText(palabra[i], ((inicio - 10) + (espacio/1.5)/2), 540);
                inicio += ((espacio/1.5) + 20);
                aciertos += 1;
            }
            else {
                inicio += ((espacio/1.5) + 20);
            }
        } 
    } else if (palabra.length > 8){
        for (var i = 0; i < palabra.length; i++) {
            if (letra == palabra[i]) {
                pincel.beginPath();
                pincel.font = "30px arial bold";
                pincel.fillText(palabra[i], ((inicio - 6) + (espacio/2)/2), 540);
                inicio += ((espacio/2) + 20);
                aciertos += 1;
            } else {
                inicio += ((espacio/2) + 20);
            }
        }
    }
    return aciertos;
}
