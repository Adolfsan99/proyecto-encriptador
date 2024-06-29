function actualizarSalida(texto, encriptado) {
  if (document.getElementById("sin-entrada-de-texto")) {
    document.getElementById("sin-entrada-de-texto").setAttribute("hidden", "");
  }
  document.getElementById("texto-encriptado").innerText = texto;

  if (encriptado) {
    document.getElementById("boton-encriptar").setAttribute("disabled", "");
    document.getElementById("boton-desencriptar").removeAttribute("disabled");
  } else {
    document.getElementById("boton-encriptar").removeAttribute("disabled");
    document.getElementById("boton-desencriptar").setAttribute("disabled", "");
  }
}

function encriptar() {
  let entrada = document.getElementById("entrada-usuario").value;
  if (entrada === "") {
    alert("Ingresa un texto para encriptar");
  } else {
    // Reemplazos en el orden adecuado para evitar problemas de interferencia
    entrada = entrada.replace(/a/g, "1");
    entrada = entrada.replace(/e/g, "2");
    entrada = entrada.replace(/i/g, "3");
    entrada = entrada.replace(/o/g, "4");
    entrada = entrada.replace(/u/g, "5");
    entrada = entrada.replace(/A/g, "6");
    entrada = entrada.replace(/E/g, "7");
    entrada = entrada.replace(/I/g, "8");
    entrada = entrada.replace(/O/g, "9");
    entrada = entrada.replace(/U/g, "0");

    // Reemplazos con los valores encriptados
    entrada = entrada.replace(/1/g, "ai");
    entrada = entrada.replace(/2/g, "enter");
    entrada = entrada.replace(/3/g, "imes");
    entrada = entrada.replace(/4/g, "ober");
    entrada = entrada.replace(/5/g, "ufat");
    entrada = entrada.replace(/6/g, "AI");
    entrada = entrada.replace(/7/g, "ENTER");
    entrada = entrada.replace(/8/g, "IMES");
    entrada = entrada.replace(/9/g, "OBER");
    entrada = entrada.replace(/0/g, "UFAF");

    actualizarSalida(entrada, true);
  }
}

function desencriptar() {
  let entrada = document.getElementById("entrada-usuario").value;
  // Reemplazos con los valores desencriptados
  entrada = entrada.replace(/ai/g, "a");
  entrada = entrada.replace(/enter/g, "e");
  entrada = entrada.replace(/imes/g, "i");
  entrada = entrada.replace(/ober/g, "o");
  entrada = entrada.replace(/ufat/g, "u");
  entrada = entrada.replace(/mes/g, "");
  entrada = entrada.replace(/AI/g, "A");
  entrada = entrada.replace(/ENTER/g, "E");
  entrada = entrada.replace(/IMES/g, "I");
  entrada = entrada.replace(/OBER/g, "O");
  entrada = entrada.replace(/UFAF/g, "U");
  entrada = entrada.replace(/MES/g, "");

  document.getElementById("entrada-usuario").value = entrada;
  actualizarSalida(entrada, false);
}

function resetear() {
  location.reload();
}

function copiar() {
  var textoencriptado = document.getElementById("texto-encriptado");

  if (!textoencriptado) {
    console.error("No se encontró el elemento con id 'texto-encriptado'");
    return;
  }

  var range = document.createRange();
  range.selectNodeContents(textoencriptado);
  var selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

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

  selection.removeAllRanges();
}
