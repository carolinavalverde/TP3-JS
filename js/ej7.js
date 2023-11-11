let numeroIngresado = parseInt(prompt("Ingrese un número"));

function mostrarTablaMultiplicar(numero) {
  document.write(`<p class="formatoTitulos">Tabla del ${numero}:</p>`);
  document.write("<table class=formatoTexto>");
  document.write("<tr><th>N°</th><th>Resultado</th></tr>");

  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.write(`<tr><td>${i}</td><td>${resultado}</td></tr>`);
  }

  document.write("</table>");
}

mostrarTablaMultiplicar(numeroIngresado);
