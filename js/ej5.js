let textoIngresado = prompt("Ingrese un texto con MAYÚSCULAS y/o minúsculas");

function textoMayusculasOMinusculas(texto) {
  if (texto === texto.toUpperCase()) {
    return "El texto tiene solo letras MAYÚSCULAS.";
  } else if (texto === texto.toLowerCase()) {
    return "El texto tiene solo letras minúsculas.";
  } else {
    return "El texto tiene una mezcla de letras MAYÚSCULAS y minúsculas.";
  }
}

const resultado = textoMayusculasOMinusculas(textoIngresado);
document.write(`<p class="formatoTexto">${resultado}</p>`);
