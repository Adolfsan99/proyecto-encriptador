/* funcion de actualizar el texto de salida */
function actualizarSalida(texto, encriptado) {
  /* manejo de ocultacion de la imagen que aparece cuando no hay texto */
  if (document.getElementById("sin-entrada-de-texto")) {
    document.getElementById("sin-entrada-de-texto").setAttribute("hidden", "");
  }
  document.getElementById("texto-encriptado").innerText = texto;

  /* manejo de bloqueo de botones al encriptar y desencriptar */
  if (encriptado) {
    document.getElementById("boton-encriptar").setAttribute("disabled", "");
    document.getElementById("boton-desencriptar").removeAttribute("disabled");
  } else {
    document.getElementById("boton-encriptar").removeAttribute("disabled");
    document.getElementById("boton-desencriptar").setAttribute("disabled", "");
  }
}

function encriptar() {
  /* nuestra entrada sera igual a entrada-usuario es decir lo que pongamos en textarea */
  let entrada = document.getElementById("entrada-usuario").value;
  /* proceso de encriptación */
  if (
    entrada.includes("a") ||
    entrada.includes("e") ||
    entrada.includes("i") ||
    entrada.includes("o") ||
    entrada.includes("u")
  ) {
    /* reglas de encriptación */
    entrada = entrada.replaceAll("a", "ai");
    entrada = entrada.replaceAll("e", "enter");
    entrada = entrada.replaceAll("i", "imes");
    entrada = entrada.replaceAll("o", "ober");
    entrada = entrada.replaceAll("u", "ufat");
  }
  actualizarSalida(entrada, true);
}

function desencriptar() {
  /* nuestra entrada sera igual a entrada-usuario es decir lo que pongamos en textarea */
  let entrada = document.getElementById("entrada-usuario").value;
  /* proceso de desencriptación */
  if (
    entrada.includes("ai") ||
    entrada.includes("enter") ||
    entrada.includes("imes") ||
    entrada.includes("ober") ||
    entrada.includes("ufat")
  ) {
    /* reglas de desencriptación */
    entrada = entrada.replaceAll("ai", "a");
    entrada = entrada.replaceAll("enter", "e");
    entrada = entrada.replaceAll("imes", "i");
    entrada = entrada.replaceAll("ober", "o");
    entrada = entrada.replaceAll("ufat", "u");
  }
  /* desencriptar tambien el contenido del textarea en caso de que este encriptado */
  document.getElementById("entrada-usuario").value = entrada;
  actualizarSalida(entrada, false);
}

function copiar() {
  // obtenemos el elemento que contiene el texto
  var textoencriptado = document.getElementById("texto-encriptado");

  // creamos un rango para selecciar el texto
  var range = document.createRange();
  range.selectNodeContents(textoencriptado);
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  // copiamos el texto al portapapeles
  try {
    var successful = document.execCommand("copy");
    if (successful) {
    } else {
      alert("No se pudo copiar el texto");
    }
  } catch (err) {
    alert("Error al intentar copiar el texto: " + err);
  }

  // deseleccionamos el texto
  selection.removeAllRanges();
}
