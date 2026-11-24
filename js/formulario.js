const formulario = document.getElementById("formulario-consulta");
const mensajeExito = document.getElementById("mensaje-exito");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  let errores = 0;

  document.getElementById("error-nombre").textContent = "";
  document.getElementById("error-correo").textContent = "";
  document.getElementById("error-mensaje").textContent = "";
  mensajeExito.hidden = true;

  if (nombre.length < 3) {
    document.getElementById("error-nombre").textContent = "Escribe tu nombre (mínimo 3 letras).";
    errores = errores + 1;
  }

  if (correo.indexOf("@") < 1 || correo.lastIndexOf(".") < correo.indexOf("@")) {
    document.getElementById("error-correo").textContent = "Escribe un correo válido, por ejemplo nombre@correo.com.";
    errores = errores + 1;
  }

  if (mensaje.length < 10) {
    document.getElementById("error-mensaje").textContent = "El mensaje debe tener al menos 10 caracteres.";
    errores = errores + 1;
  }

  if (errores === 0) {
    mensajeExito.textContent = "Gracias, " + nombre + ". Tu consulta quedó registrada en esta demostración.";
    mensajeExito.hidden = false;
    formulario.reset();
  }
});
