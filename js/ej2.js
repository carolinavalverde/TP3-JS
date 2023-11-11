const ciudades = [];

do {
  let ciudad = prompt("Ingrese el nombre de una ciudad");
  if (ciudad !== null) {
    ciudad = ciudad.toLowerCase();
    ciudades.push(ciudad);
  }
} while (confirm("¿Desea ingresar otra ciudad?"));

document.write(`<h2 class="formatoTitulos">Lista de Ciudades</h2>`);
document.write(`<ul class="formatoTexto">`);

for (const ciudad of ciudades) {
  document.write(`<li>${ciudad}</li>`);
}

// Mostrar la longitud del arreglo.
document.write(
  `<p class="formatoTexto">La cantidad de elementos del Array de Ciudades es: ${[
    ciudades.length,
  ]}</p>`
);
console.log(ciudades.length);

// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write(
  `<p class="formatoTexto">El Primer elemento del array es: ${ciudades[0]}</p>`
);
document.write(
  `<p class="formatoTexto">El Tercer elemento del array es: ${ciudades[2]}</p>`
);
document.write(
  `<p class="formatoTexto">El último elemento del array es: ${
    ciudades[ciudades.length - 1]
  }</p>`
);

// Añade en última posición la ciudad de París.
ciudades.push("París");
document.write(
  `<h2 class="formatoTitulos">Lista de Ciudades, agrego París al final (${ciudades.length})</h2>`
);
document.write(`<ul>`);
for (
  let indiceCiudades = 0;
  indiceCiudades < ciudades.length;
  indiceCiudades++
) {
  document.write(`<li class="formatoTexto">${ciudades[indiceCiudades]}</li>`);
}
document.write(`</ul>`);

// Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(
  `<p class="formatoTexto">El elemento que ocupa la Segunda posición del array es: ${ciudades[1]}</p>`
);

// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
ciudades[1] = "Barcelona";
document.write(
  `<h2 class="formatoTitulos">Lista de Ciudades, modifico el elemento de la posision 2 del array (${ciudades.length})</h2>`
);
document.write(`<ul class="formatoTexto">`);
for (
  let indiceCiudades = 0;
  indiceCiudades < ciudades.length;
  indiceCiudades++
) {
  document.write(`<li>${ciudades[indiceCiudades]}</li>`);
}
document.write(`</ul>`);
