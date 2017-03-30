var imagen = document.getElementsByClassName("animales");
var select = document.getElementById("select");

function changeColor(add,remove1,remove2) {
  if (select.value == add) {
    for (var i = 0; i < imagen.length; i++) {
      imagen[i].classList.remove(remove1);
      imagen[i].classList.remove(remove2);
      imagen[i].classList.toggle(add);
    }
  }
}

select.onchange = function () {
  if (select.value == "original") {
    for(var i = 0; i < imagen.length;i++){
      imagen[i].classList.remove("blanco-negro");
      imagen[i].classList.remove("invertir-colores");
      imagen[i].classList.remove("sepia");
  }
}
  changeColor("sepia","blanco-negro","invertir-colores");
  changeColor("invertir-colores","sepia","blanco-negro");
  changeColor("blanco-negro","sepia","invertir-colores");
}
