var pizarra = document.querySelector("canvas");
var pincel = pizarra.getContext("2d");
pincel.beginPath()
pincel.moveTo(50,750);
pincel.lineTo(100,700);
pincel.lineTo(150,750);
pincel.lineTo(50,750);
pincel.fill();

pincel.beginPath()
pincel.moveTo(100,702);
pincel.lineWidth = "4";
pincel.lineTo(100,300);
pincel.stroke();

pincel.beginPath()
pincel.moveTo(100,302);
pincel.lineTo(300,300);
pincel.stroke();

pincel.beginPath()
pincel.moveTo(298,300);
pincel.lineTo(298,350);
pincel.stroke();



/* pizarra.addEventListener('', function(event){
    event.preventDefault();


}) */