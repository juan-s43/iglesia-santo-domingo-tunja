const modal = document.getElementById("modalGaleria");
const imagenGrande = document.getElementById("imagenGrande");
const textoGrande = document.getElementById("textoGrande");

modal.addEventListener("show.bs.modal", function (evento) {
  const miniatura = evento.relatedTarget;
  imagenGrande.src = miniatura.dataset.imagen;
  imagenGrande.alt = miniatura.dataset.descripcion;
  textoGrande.textContent = miniatura.dataset.descripcion + " — " + miniatura.dataset.credito;
});
