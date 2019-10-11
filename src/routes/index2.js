const express = require("express");
const router = express.Router();
router.use(express.json());
const path = require("path");
const tokens = require("./token2");
var texto = " ";
var separados = [];
var lineaactual=[];
var tokensanalizados;
//rutas
router.get("/", (req, res) => {
  res.render("texto");
});

router.post("/automata", (req, res) => {
  texto = req.body.txt;
  separacion();
  number = 1;
  tokensanalizados = tokens(separados);
    tokens(separados);
    console.log(JSON.stringify(tokensanalizados));
    res.render("analizador", tokensanalizados[1]);
});

router.get("/automata/siguiente", (req, res) => {
  number += 1;
  if (separados.length > number && separados[number] != "") {
    var numbermas = 0;
    if (number != 0) {
      numbermas = number - 1;
    }
    var respuesta = tokens(separados[numbermas], number);
    res.render("analizador", respuesta);
  } else {
    res
      .status(800)
      .render("analizador", {
        error: "true",
        palabra: "",
        tipo: "",
        numero: ""
      });
  }
});

function separacion() {
  separados = texto.split(/,/);
}

module.exports = router;