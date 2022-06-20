var express = require('express');
var router = express.Router();
var models = require ("../models")

router.get("/", (req, res) =>{
   
    models.sellers.findAll()
       .then((seller)=> res.send(seller))
       .cath((err) =>res.status(500).send(err));
    });

// router.post("/", (req, res, next){
// const {} = req.body;

// models.products.create {[]}
// .then((product)=> res.send(product))
// .cath((err) =>res.status(500).send(err));
// })


module.exports = router;
