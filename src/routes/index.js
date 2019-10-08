const express = require('express');
const router = express.Router();
router.use(express.json());
const path = require('path');

//rutas
router.get('/',(req,res)=>{
    res.render('texto');
});

router.post('/automata',(req,res)=>{
    console.log(req.body.txt)
    res.render('analizador',{
        palabras: req.body.txt,
        siguiente: 1
    });
});

module.exports = router;