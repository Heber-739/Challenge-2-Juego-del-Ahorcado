
function mostrarErrores(evento, lista){
    pincel.beginPath()
    pincel.font = "40px arial bold"
    pincel.fillStyle = "red"
    var caracteres = /\W/g;
    var mayusculas = /[A-Z]/g;
    var numeros = /[0-9]/g;
    if (caracteres.test(evento)) {
        pincel.fillText("No se admiten caracteres especiales", 470, 150);
        return false;
    } else if (mayusculas.test(evento)){
        pincel.fillText("No se admiten mayusculas", 470, 150);
        return false;
    } else if (numeros.test(evento)){
        pincel.fillText("No se admiten números", 470, 150);
        return false;
    } else if (letraRepetidas(evento, lista) > 0){
        pincel.fillText("La letra ya fue ingresada", 470, 150);
        return false;
    } else {
        return true;
    }
}
function letraRepetidas(letra, array){
    var lista = [];
    for (var i = 0; i < array.length; i++) {
        if (letra == array[i]) {
            lista.push(letra);
        }
    }
    return lista.length;
}