var pizarra = document.querySelector("canvas");
var pincel = pizarra.getContext("2d");
pincel.beginPath()
pincel.moveTo(25,550);
pincel.lineTo(75,500);
pincel.lineTo(125,550);
pincel.lineTo(25,550);
pincel.fill();





pincel.moveTo(75,502);
pincel.lineWidth = "4";
pincel.lineTo(75,100);
pincel.stroke();

pincel.moveTo(75,102);
pincel.lineTo(275,100);
pincel.stroke();

pincel.moveTo(273,100);
pincel.lineTo(273,150);
pincel.stroke();

/* Dibujo de la cabeza */
pincel.moveTo(273,150)
pincel.arc(273, 179, 30, 300, 2 * 3.14, true);
pincel.stroke();

/* Dibujo del cuerpo */
pincel.moveTo(273,210)
pincel.lineTo(273,350);
pincel.stroke();

/* Dibujo de las piernas */

pincel.moveTo(273,350)
pincel.lineTo(223,410);
pincel.stroke();

pincel.moveTo(273,350)
pincel.lineTo(323,410);
pincel.stroke();

/* Dibujo de los brazos */


pincel.moveTo(273,250)
pincel.lineTo(213,220);
pincel.stroke();

pincel.moveTo(273,250)
pincel.lineTo(333,220);
pincel.stroke();



crearEspacioLetras("Amor")
pincel.beginPath()
pincel.fillStyle = "red"
pincel.fillText("Prueba", 470, 150)



function crearEspacioLetras(palabra){
    pincel.beginPath()
    pincel.moveTo(270, 550)
    for (let i = 0; i < palabra.length; i++) {
        var espacio = (900/(palabra.length));
        pincel.font = "70px arial bold"
        if (palabra.length <= 5) {
            pincel.fillText(palabra[i], 270 + (espacio*(i)/2), 550)

        } else {
            pincel.fillText(palabra[i], 270 + espacio*(i), 550)
        }
        
        
    }
    pincel.moveTo(270, 550)

}