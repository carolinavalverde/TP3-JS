let numeroIngresado = parseInt(prompt("Ingrese un número entero"));

function numeroEsParOImpar() {
  if (numeroIngresado % 2 === 0) {
    return "El número es PAR";
  } else {
    return "El número es IMPAR";
  }
}

const resultado = numeroEsParOImpar();
document.write(`<p class="formatoTexto">${resultado}</p>`);
