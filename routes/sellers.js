var express = require('express');
var router = express.Router();
var models = require ("../models")

router.get("/", (req, res) =>{
   
    models.sellers.findAll({attributes: ['sellerId', 'userId', 'storeName','storeDescription']})
       .then((seller)=> res.send(seller))
       .catch((err) =>res.status(500).send({error: err.message}));
    });

router.get("/product", (req, res) =>{
   
    models.products.findAll({attributes: ['productId', 'categoryId', 'sellerId','description', ]})
       .then((seller)=> res.send(seller))
       .catch((err) =>res.status(500).send({error: err.message}));
    });
// router.post("/", (req, res, next){
// const {} = req.body;

// models.products.create {[]}
// .then((product)=> res.send(product))
// .cath((err) =>res.status(500).send(err));
// })


module.exports = router;