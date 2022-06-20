var express = require('express');
var router = express.Router();
var models = require ("../models")

router.get("/", (req, res) =>{
   
    models.sellers.findAll({attributes: ['sellerId', 'userId', 'storeName','storeDescription']})
       .then((seller)=> res.send(seller))
       .catch((err) =>res.status(500).send({error: err.message}));
    });

router.get("/product", (req, res) =>{
   
    models.products.findAll({attributes: ['productId', 'categoryId', 'sellerId','description','color','dimensionsCM','imgURL','price','quantity','careDifficulty','light','petFriendly','airPurifying' ]})
       .then((seller)=> res.send(seller))
       .catch((err) =>res.status(500).send({error: err.message}));
    });


router.get("/product/:id",(req, res) =>{
const {productId} = req.params.id;
    models.products.findOne({ where: {productId,}},{
        attributes: ['productId', 'categoryId', 'sellerId','description','color','dimensionsCM','imgURL','price','quantity','careDifficulty','light','petFriendly','airPurifying' ]})
    .then((seller)=> res.send(seller))
    .catch((err) =>res.status(500).send({error: err.message}));
});

router.get("/:id",(req, res) =>{
    const {sellerId} = req.params.id;
        models.sellers.findOne({ where: {sellerId,}},{
            attributes: ['sellerId', 'userId', 'storeName','storeDescription']})
        .then((seller)=> res.send(seller))
        .catch((err) =>res.status(500).send({error: err.message}));
    });

router.get("/product/category/:id",(req, res) =>{
    const {categoryId} = req.params.id;
        models.sellers.findOne({ where: {categoryId,}},{
            attributes: ['productId', 'categoryId', 'sellerId','description','color','dimensionsCM','imgURL','price','quantity','careDifficulty','light','petFriendly','airPurifying' ]})
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