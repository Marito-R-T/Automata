const express = require('express');
const router = express.Router();
router.use(express.json());
const path = require('path');

//rutas
router.get('/',(req,res)=>{
    res.render('texto');
});

router.post('/automata',(req,res)=>{
    console.log(req.formData());
    console.log(req.body.archivo);
    console.log('hola');
    res.render('analizador');
});

module.exports = router;