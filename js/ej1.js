const meses = [
  "Enero 🏖️",
  "Febrero 🌞",
  "Marzo 📚",
  "Abril 🍁",
  "Mayo 🇦🇷",
  "Junio ❄️",
  "Julio ⛄",
  "Agosto 🌤️",
  "Septiembre 🌺",
  "Octubre 🎃",
  "Noviembre 🎇",
  "Diciembre 🎄",
];

document.write(`<h2 class="formatoTitulos">Lista de Meses</h2>`);
document.write(`<ul class="formatoTexto">`);
for (let indiceMeses = 0; indiceMeses < meses.length; indiceMeses++) {
  document.write(`<li>${meses[indiceMeses]}</li>`);
}
document.write(`</ul>`);
