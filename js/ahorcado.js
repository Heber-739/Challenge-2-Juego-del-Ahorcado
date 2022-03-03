var cuerpo = document.querySelector("html");
var pizarra = document.querySelector("canvas");
var pincel = pizarra.getContext("2d");
var boton = document.querySelector("#iniciar-juego");
var agregar = document.querySelector("#agregador")


resizeBoard();
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

window.addEventListener('resize', resizeBoard);

boton.addEventListener('click', function(){
    resizeBoard();
    pincel.clearRect (0,0,1000,420);
    iniciarJuego();
    pizarra.focus();
    indice = Math.round(Math.random()*(palabras.length));
    palabra = palabras[indice].toUpperCase();
    crearEspacioLetras(palabra);
    letras = [];
    var espaciado1 = 150;
    var espaciado2 = 150;
    var errores = 0; 
    var aciertos = 0;
    cuerpo.addEventListener("keyup", function(event){
        pincel.clearRect (250,0,1000,160);
        var input = event.key;
        if (mostrarErrores(input,letras)) {
            var seAcerto = dibujarLetras(input.toUpperCase(),palabra);
            if ( seAcerto == 0){
                letras.push(input);
                pincel.beginPath();
                pincel.font = "30px arial";
                pincel.fillStyle = "red";
                pincel.fillText(input, 300 + espaciado2, 235);
                espaciado2 += 30
                pincel.closePath();
                errores += 1;
                fallas(errores);
                if (errores == 9) {
                    pincel.beginPath();
                    pincel.font = "40px arial";
                    pincel.fillStyle = "red";
                    pincel.fillText("Perdió, la palabra era:", 320, 50);
                    pincel.font = "45px arial bold";
                    pincel.fillText(palabra, 370, 100);
                    pincel.font = "20px arial bold";
                    pincel.fillText("Presione una tecla para reiniciar.", 320, 140);
                    pincel.closePath();
                    cuerpo.addEventListener("keypress",function(event){
                        location.reload();
                    });
                }               
            } else  {
                letras.push(input);
                pincel.beginPath();
                pincel.font = "30px arial";
                pincel.fillStyle = "green";
                pincel.fillText(input, 300 + espaciado1, 200);
                espaciado1 += 25;
                pincel.closePath();
                aciertos += seAcerto;
                if (aciertos == palabra.length){
                    pincel.beginPath();
                    pincel.font = "40px arial bold";
                    pincel.fillStyle = "green";
                    pincel.fillText("Felicidades!! ah adivinado la palabra.", 320, 50);
                    pincel.font = "20px arial bold";
                    pincel.fillText("Presione una tecla para reiniciar.", 370, 100);
                    pincel.closePath();
                    cuerpo.addEventListener("keypress",function(event){
                        location.reload();
                    });
                }
            }
        }        
    })
})

function crearEspacioLetras(palabra){
    var inicio = 300;
    var espacio = (700/(palabra.length));
    pincel.lineWidth = "3";
    pincel.strokeStyle = "black";
        if (palabra.length <= 5) {
            for (let i = 0; i < palabra.length; i++) {
                pincel.beginPath();
                pincel.moveTo(inicio, 350);
                pincel.lineTo((inicio + (espacio)/1.3), 350);
                pincel.stroke();
                pincel.closePath();
                inicio += ((espacio/1.3) + 20);
            }
        } else if (palabra.length > 5 && palabra.length <= 8){
            for (let i = 0; i < palabra.length; i++) {
                pincel.beginPath();
                pincel.moveTo(inicio, 350);
                pincel.lineTo((inicio + (espacio)/1.5), 350);
                pincel.stroke();
                pincel.closePath();
                inicio += ((espacio/1.5) + 20);
            }
        } else if (palabra.length > 8){
            for (let i = 0; i < palabra.length; i++) {
                pincel.beginPath();
                pincel.moveTo(inicio, 350);
                pincel.lineTo((inicio + (espacio)/2), 350);
                pincel.stroke();
                pincel.closePath();
                inicio += ((espacio/2) + 20);
            }
        }
}
function dibujarLetras(letra, palabra){
    var inicio = 300;
    var espacio = (700/(palabra.length));
    var aciertos = 0;
    pincel.fillStyle = "black";
    if (palabra.length <= 5) {
        for (var i = 0; i < palabra.length; i++) {
            if (letra == palabra[i]) {
                pincel.beginPath();
                pincel.font = "90px arial bold";
                pincel.fillText(palabra[i], ((inicio - 15) + (espacio/1.3)/2), 340);
                pincel.closePath();
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
                pincel.fillText(palabra[i], ((inicio - 10) + (espacio/1.5)/2), 340);
                pincel.closePath();
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
                pincel.fillText(palabra[i], ((inicio - 6) + (espacio/2)/2), 340);
                pincel.closePath();
                inicio += ((espacio/2) + 20);
                aciertos += 1;
            } else {
                inicio += ((espacio/2) + 20);
            }
        }
    }
    return aciertos;
}


 
function resizeBoard() {
    var clientWidth = document.documentElement.scrollWidth*0.8;
    var ratio = pizarra.height / pizarra.width;
    var clientHeight = clientWidth * ratio;  
    var newWidth = String(clientWidth + 'px');
    var newHeight = String(clientHeight + 'px');  
    pizarra.style.width = newWidth;
    pizarra.style.height = newHeight;
}
    
