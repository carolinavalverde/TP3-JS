const ciudades = [];

do {
  let ciudad = prompt("Ingrese el nombre de una ciudad");
  ciudad = ciudad.toLowerCase();
  ciudades.push(ciudad);
} while (confirm("¿Desea ingresar otra ciudad?"));

document.write("<p>Ciudades:</p>");
document.write("<ul>");

for (const ciudad of ciudades) {
  document.write(`<li>${ciudad}</li>`);
}

