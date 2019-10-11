const listareservada = document.getElementById("listareservada"); //ingresa la palabra que el usuario ingreso en el input
const listabooleano = document.getElementById("listabooleano"); // son todas las listas que van a formar parte del trabajo
const listaoperador = document.getElementById("listaoperador");
const listaagrupacion = document.getElementById("listaagrupacion");
const listasigno = document.getElementById("listasigno");
const listaentero = document.getElementById("listaentero");
const listaflotante = document.getElementById("listaflotante");
const listaid = document.getElementById("listaid");
const listaerror = document.getElementById("listaerror");
var tipolugar = document.getElementById("tipo");
var palabra = document.getElementById("palabra");

function siguiente(){
    console.log(tipolugar.value);
if (tipolugar.value != "") {
  switch (tipolugar.value) {
    case "reservada":
      listareservada.innerHTML =
        listareservada.innerHTML +
        '<div class="container btn-outline-light"><h4>' +
        palabra.value +
        "</h4></div>";
      break;
    case "boolean":
      listabooleano.innerHTML =
        listabooleano.innerHTML +
        '<div class="container btn-outline-light"><h4>' +
        palabra.value +
        "</h4></div>";
      break;
    case "operador":
      listaoperador.innerHTML =
        listaoperador.innerHTML +
        '<div class="container btn-outline-light"><h4>' +
        palabra.value +
        "</h4></div>";
      break;
    case "agrupacion":
      listaagrupacion.innerHTML =
        listaagrupacion.innerHTML +
        '<div class="container btn-outline-light"><h4>' +
        palabra.value +
        "</h4></div>";
      break;
    case "signo":
      listasigno.innerHTML =
        listasigno.innerHTML +
        '<div class="container btn-outline-light"><h4>' +
        palabra.value +
        "</h4></div>";
      break;
    case "entero":
      listaentero.innerHTML =
        listaentero.innerHTML +
        '<div class="container btn-outline-light"><h4>' +
        palabra.value +
        "</h4></div>";
      break;
    case "flotante":
      listaflotante.innerHTML =
        listaflotante.innerHTML +
        '<div class="container btn-outline-light"><h4>' +
        palabra.value +
        "</h4></div>";
      break;
    case "id":
      listaid.innerHTML =
        listaid.innerHTML +
        '<div class="container btn-outline-light"><h4>' +
        palabra.value +
        "</h4></div>";
      break;
    case "error":
      listaerror.innerHTML =
        listaerror.innerHTML +
        '<div class="container btn-outline-light"><h4 style="color: red;">' +
        palabra.value +
        "</h4></div>";
      break;
  }
}
}