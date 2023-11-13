function lanzarElDado() {
  return Math.floor(Math.random() * 6)+1
}

function simularLanzarDado() {
  const apariciones = Array(11).fill(0); //.fill llena un nro (0), en cada posición del array

  let lanzamientos = 0;

  while (lanzamientos < 50) {
    const suma = lanzarElDado() + lanzarElDado();
    apariciones[suma - 2]++; //para que la suma nunca de 0 ni 12 en el array apariciones
    lanzamientos++;
  }

  document.write(`<h2 class="formatoTitulos">Resultados:</h2>`);
  document.write(`<table class="formatoTexto">`);
  document.write(`<tr><th>Suma 🎲🎲</th><th>Apariciones ✨</th></tr>`);

  for (let valoresSumados = 2; valoresSumados <= 12; valoresSumados++) {
    document.write(
      "<tr><td>" + valoresSumados + "</td><td>" + apariciones[valoresSumados - 2] + "</td></tr>"
    );
  }

  document.write("</table>");
}

simularLanzarDado();
