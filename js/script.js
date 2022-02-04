var pizarra = document.querySelector("canvas");
var pincel = pizarra.getContext("2d");


function iniciarJuego(){
    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.moveTo(25,550);
    pincel.lineTo(75,500);
    pincel.lineTo(125,550);
    pincel.lineTo(25,550);
    pincel.fill();
}

function palo1(){
    pincel.moveTo(75,502);
    pincel.lineTo(75,100);
    pincel.stroke();
}
function palo2(){
    pincel.moveTo(75,102);
    pincel.lineTo(275,100);
    pincel.stroke();
}
function palo3(){
    pincel.moveTo(273,100);
    pincel.lineTo(273,150);
    pincel.stroke();
}
/* Dibujo de la cabeza */
function cabeza(){
    pincel.moveTo(273,150);
    pincel.arc(273, 179, 30, 300, 2 * 3.14, true);
    pincel.stroke();
}

/* Dibujo del cuerpo */
function palito(){
    pincel.moveTo(273,210);
    pincel.lineTo(273,350);
    pincel.stroke();
}
/* Dibujo de las piernas */
function pierna1(){
    pincel.moveTo(273,350);
    pincel.lineTo(223,410);
    pincel.stroke();
}
function pierna2(){
    pincel.moveTo(273,350);
    pincel.lineTo(323,410);
    pincel.stroke();
}
/* Dibujo de los brazos */
function brazo1(){
    pincel.moveTo(273,250);
    pincel.lineTo(213,220);
    pincel.stroke();
}
function brazo2(){
    pincel.moveTo(273,250);
    pincel.lineTo(333,220);
    pincel.stroke();
}

function fallas(valor){
    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.lineWidth = "3";
    switch (valor) {
        case 0:
            break;
        case 1:
            palo1();
            break;
        case 2:
            palo2();
            break;
        case 3:
            palo3();
            break;
        case 4:
            cabeza();
            break;
        case 5:
            palito();
            break;
        case 6:
            pierna1();
            break;
        case 7:
            pierna2();
            break;
        case 8:
            brazo1();
            break;
        case 9:
            brazo2();
            break;
        default:
            break;
    }
}
