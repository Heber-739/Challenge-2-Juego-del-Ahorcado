

function iniciarJuego(){
    pincel.beginPath();
    pincel.fillStyle = "black";
    pincel.moveTo(15,350);
    pincel.lineTo(45,325);
    pincel.lineTo(75,350);
    pincel.lineTo(15,350);
    pincel.fill();
    pincel.closePath();
}

function palo1(){
    pincel.moveTo(45,327);
    pincel.lineTo(45,75);
    pincel.stroke();
    pincel.closePath();
}
function palo2(){
    pincel.moveTo(44,75);
    pincel.lineTo(175,75);
    pincel.stroke();
    pincel.closePath();
}
function palo3(){
    pincel.moveTo(175,75);
    pincel.lineTo(175,130);
    pincel.stroke();
    pincel.closePath();
}
/* Dibujo de la cabeza */
function cabeza(){
    pincel.moveTo(175,120);
    pincel.arc(175, 155, 25, 300, 2 * 3.14, true);
    pincel.stroke();
    pincel.closePath();
}

/* Dibujo del cuerpo */
function palito(){
    pincel.moveTo(175,180);
    pincel.lineTo(175,270);
    pincel.stroke();
    pincel.closePath();
}
/* Dibujo de las piernas */
function pierna1(){
    pincel.moveTo(175,270);
    pincel.lineTo(145,320);
    pincel.stroke();
    pincel.closePath();
}
function pierna2(){
    pincel.moveTo(175,270);
    pincel.lineTo(205,320);
    pincel.stroke();
    pincel.closePath();
}
/* Dibujo de los brazos */
function brazo1(){
    pincel.moveTo(175,200);
    pincel.lineTo(220,220);
    pincel.stroke();
}
function brazo2(){
    pincel.moveTo(175,200);
    pincel.lineTo(135,220);
    pincel.stroke();
    pincel.closePath();
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
            pincel.closePath()
            break;
        case 2:
            palo2();
            pincel.closePath()
            break;
        case 3:
            palo3();
            pincel.closePath()
            break;
        case 4:
            cabeza();
            pincel.closePath()
            break;
        case 5:
            palito();
            pincel.closePath()
            break;
        case 6:
            pierna1();
            pincel.closePath()
            break;
        case 7:
            pierna2();
            pincel.closePath()
            break;
        case 8:
            brazo1();
            pincel.closePath()
            break;
        case 9:
            brazo2();
            pincel.closePath()
            break;
        default:
            break;
    }
}
