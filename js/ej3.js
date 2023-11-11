function lanzarElDado() {
  return Math.floor(Math.random() * 7); //6)+1
}

function simularLanzarDado() {
  const apariciones = Array(11).fill(0);

  let lanzamientos = 0;

  while (lanzamientos < 50) {
    const suma = lanzarElDado() + lanzarElDado();
    apariciones[suma - 2]++;
    lanzamientos++;
  }

  document.write(`<h2 class="formatoTitulos">Resultados:</h2>`);
  document.write(`<table class="formatoTexto">`);
  document.write(`<tr><th>Suma 🎲🎲</th><th>Apariciones ✨</th></tr>`);

  for (let i = 2; i <= 12; i++) {
    document.write(
      "<tr><td>" + i + "</td><td>" + apariciones[i - 2] + "</td></tr>"
    );
  }

  document.write("</table>");
}

simularLanzarDado();
