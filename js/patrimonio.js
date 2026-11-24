const botones = document.querySelectorAll(".btn-filtro");
const fichas = document.querySelectorAll(".item-patrimonio");

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function () {
    const filtro = botones[i].dataset.filtro;

    for (let j = 0; j < botones.length; j++) {
      botones[j].classList.remove("active");
    }
    botones[i].classList.add("active");

    for (let k = 0; k < fichas.length; k++) {
      if (filtro === "todos" || fichas[k].dataset.categoria === filtro) {
        fichas[k].classList.remove("d-none");
      } else {
        fichas[k].classList.add("d-none");
      }
    }
  });
}
