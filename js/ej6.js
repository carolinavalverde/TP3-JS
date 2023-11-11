let ladoRectangulo1 = parseInt(
  prompt("Ingrese el valor de un lado del rectángulo:")
);
let ladoRectangulo2 = parseInt(
  prompt("Ingrese el valor del otro lado del rectángulo:")
);

function calcularPerimetro(lado1, lado2) {
  if (!isNaN(ladoRectangulo1, ladoRectangulo2)) {
    return 2 * (lado1 + lado2);
  } else {
    return "Número no válido, ingrese un número válido";
  }
}

let perimetroDelRectangulo = calcularPerimetro(
  ladoRectangulo1,
  ladoRectangulo2
);

document.write(
  `<p class="formatoTexto">El perímetro del rectángulo según los valores ingresados es: <br> ${perimetroDelRectangulo}</p>`
);
