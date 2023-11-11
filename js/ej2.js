do {
  const ciudad = prompt("Ingrese el nombre de una ciudad");
  ciudad = ciudad.toLowerCase();
} while (confirm("¿Desea ingresar otra ciudad?"));

if (confirm === true) {
  document.write(
    `<p>array de ciudades</p>`
  );
} else {
  document.write("<p>gvolver al inicio del bucle</p>");
}
