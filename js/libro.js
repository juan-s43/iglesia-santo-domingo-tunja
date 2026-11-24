const pliegos = document.querySelectorAll(".pliego");
const botonAnterior = document.getElementById("libro-anterior");
const botonSiguiente = document.getElementById("libro-siguiente");
const indicador = document.getElementById("libro-indicador");

let actual = 0;

function mostrarPliego() {
  for (let i = 0; i < pliegos.length; i++) {
    pliegos[i].hidden = (i !== actual);
  }
  indicador.textContent = "Pliego " + (actual + 1) + " de " + pliegos.length;

  botonAnterior.disabled = (actual === 0);
  botonSiguiente.disabled = (actual === pliegos.length - 1);
}

botonAnterior.addEventListener("click", function () {
  actual = actual - 1;
  mostrarPliego();
});

botonSiguiente.addEventListener("click", function () {
  actual = actual + 1;
  mostrarPliego();
});

mostrarPliego();
