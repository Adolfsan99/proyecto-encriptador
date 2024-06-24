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
  /* verificación texto vacio */
  if (entrada == "") {
    alert("Ingresa un texto para encriptar");
  } else {
    /* proceso de encriptación */
    if (
      entrada.includes("a") ||
      entrada.includes("e") ||
      entrada.includes("i") ||
      entrada.includes("o") ||
      entrada.includes("u") ||
      entrada.includes("A") ||
      entrada.includes("E") ||
      entrada.includes("I") ||
      entrada.includes("O") ||
      entrada.includes("U")
    ) {
      /* reglas de encriptación */
      entrada = entrada.replaceAll("a", "ai");
      entrada = entrada.replaceAll("e", "enter");
      entrada = entrada.replaceAll("i", "imes");
      entrada = entrada.replaceAll("o", "ober");
      entrada = entrada.replaceAll("u", "ufat");
      entrada = entrada.replaceAll("A", "AI");
      entrada = entrada.replaceAll("E", "ENTER");
      entrada = entrada.replaceAll("I", "IMES");
      entrada = entrada.replaceAll("O", "OBER");
      entrada = entrada.replaceAll("U", "UFAF");
    }
    actualizarSalida(entrada, true);
  }
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
    entrada.includes("ufat") ||
    entrada.includes("mes") ||
    entrada.includes("AI") ||
    entrada.includes("ENTER") ||
    entrada.includes("IMES") ||
    entrada.includes("OBER") ||
    entrada.includes("UFAF") ||
    entrada.includes("MES")
  ) {
    /* reglas de desencriptación */
    entrada = entrada.replaceAll("ai", "a");
    entrada = entrada.replaceAll("enter", "e");
    entrada = entrada.replaceAll("imes", "i");
    entrada = entrada.replaceAll("ober", "o");
    entrada = entrada.replaceAll("ufat", "u");
    entrada = entrada.replaceAll("mes", "");
    entrada = entrada.replaceAll("AI", "A");
    entrada = entrada.replaceAll("ENTER", "E");
    entrada = entrada.replaceAll("IMES", "I");
    entrada = entrada.replaceAll("OBER", "O");
    entrada = entrada.replaceAll("UFAF", "U");
    entrada = entrada.replaceAll("MES", "");
  }
  /* desencriptar tambien el contenido del textarea en caso de que este encriptado */
  document.getElementById("entrada-usuario").value = entrada;
  actualizarSalida(entrada, false);
}

function copiar() {
  //console.log("Copiando");

  /* obtenemos el elemento que contiene el texto */
  var textoencriptado = document.getElementById("texto-encriptado");

  if (!textoencriptado) {
    console.error("No se encontró el elemento con id 'texto-encriptado'");
    return;
  }

  /* creamos un rango para seleccionar el texto */
  var range = document.createRange();
  range.selectNodeContents(textoencriptado);
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  /*  copiamos el texto al portapapeles */
  try {
    var successful = document.execCommand("copy");
    if (successful) {
      alert("Texto copiado exitosamente");
    } else {
      alert("No se pudo copiar el texto");
    }
  } catch (err) {
    alert("Error al intentar copiar el texto: " + err);
  }

  /* deseleccionamos el texto */
  selection.removeAllRanges();
}
