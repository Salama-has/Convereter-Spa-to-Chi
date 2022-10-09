var caja = document.querySelector("#modo");
caja.addEventListener("keyup", TraduceChino, false);
function TraduceChino(elEvento) {
  var evento = window.event || elEvento;
  if (evento.keyCode == 8) {
    return;
  }
  var cadena = document.querySelector("#modo").value;
  var posicion = cadena.length - 1;
  var codigoUnicode = cadena.charCodeAt(posicion);

  var chino = unescape("%u" + codigoUnicode + "e8");

  cadena = cadena.substring(0, cadena.length - 1);

  cadena = cadena + chino;
  document.querySelector("#modo").value = cadena;

  var mensaje =
    "Tipo de evento: " +
    evento.type +
    "<br>" +
    "Propiedad keyCode: " +
    evento.keyCode +
    "<br>" +
    "Carácter pulsado: " +
    String.fromCharCode(codigoUnicode);

  info.innerHTML += "<br>---------------------<br>" + mensaje;
}
