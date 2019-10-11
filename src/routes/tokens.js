const boolean = "VERDADERO,FALSO,";
const reservada =
  "variable,entero,decimal,booleano,cadena,si,sino,mientras,hacer,";
const operadores = "+,-,*,/,%,=,==,<,>,>=,<=,";
const agrupacion = "(,),{,},";
const signo = '",;,';
const digito = "0123456789";
const alfabeto = "abcdefghijklmnñiopqrstuvwxyz";
var tipo;
var palabra;

function verificarEF2(posicion) {
  if (palabra.length > posicion) {
    if (digito.indexOf(palabra[posicion]) != -1) {
      posicion += 1;
      verificarEF2(posicion);
    } else {
      console.log("hola");
      verificarEF3(posicion);
    }
  } else {
    tipo = "entero";
  }
}

function verificarEF3(posicion) {
  if (palabra[posicion] == ".") {
    posicion += 1;
    verificarEF4(posicion, false);
  } else {
    tipo = "error";
  }
}

function verificarEF4(posicion, aceptado) {
  if (palabra.length > posicion) {
    if (digito.indexOf(palabra[posicion]) != -1) {
      posicion += 1;
      verificarEF4(posicion, true);
    } else {
      tipo = "error";
    }
  } else {
    if (aceptado) {
      tipo = "flotante";
    } else {
      tipo = "error";
    }
  }
}

function verificarID1(posicion) {
  if (palabra.length > posicion) {
    if (
      digito.indexOf(palabra[posicion]) != -1 ||
      alfabeto.indexOf(palabra[posicion]) != -1
    ) {
      posicion += 1;
      verificarID1(posicion);
    } else {
      tipo = "error";
    }
  } else {
    tipo = "id";
  }
}

function verificarAlfabeto(posicion) {
  if (boolean.indexOf(tipopalabra) != -1) {
    tipo = "boolean";
  } else if (reservada.indexOf(tipopalabra) != -1) {
    tipo = "reservada";
    console.log(tipopalabra);
  } else if (operadores.indexOf(tipopalabra) != -1) {
    tipo = "operador";
  } else if (agrupacion.indexOf(tipopalabra) != -1) {
    tipo = "agrupacion";
  } else if (signo.indexOf(tipopalabra) != -1) {
    tipo = "signo";
  } else {
    tipo = "error";
  }
}

module.exports = function evaluar(string, numero) {
  var tipopalabra = string + ",";
  palabra = string;
  if (boolean.indexOf(tipopalabra) != -1) {
    tipo = "boolean";
  } else if (reservada.indexOf(tipopalabra) != -1) {
    tipo = "reservada";
  } else if (operadores.indexOf(tipopalabra) != -1) {
    tipo = "operador";
  } else if (agrupacion.indexOf(tipopalabra) != -1) {
    tipo = "agrupacion";
  } else if (signo.indexOf(tipopalabra) != -1) {
    tipo = "signo";
  } else {
    if (digito.indexOf(palabra[0]) != -1) {
      verificarEF2(1);
    } else if (alfabeto.indexOf(palabra[0]) != -1) {
      verificarID1(1);
    } else {
      tipo = "error";
    }
  }

  return { tipo: tipo, palabra: palabra, numero: numero, error: "false" };
};
