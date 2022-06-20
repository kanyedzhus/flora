var express = require('express');
var router = express.Router();
var models = require ("../models")

//Get all sellers
router.get("/", (req, res) =>{
    
    models.sellers.findAll({attributes: ['sellerId', 'userId', 'storeName','storeDescription']})
    .then((seller)=> res.send(seller))
    .catch((err) =>res.status(500).send({error: err.message}));
});

//Get seller by Id
router.get("/:id",(req, res) =>{
    const {sellerId} = req.body;
        models.sellers.findOne({ where: {sellerId,}},{
            attributes: ['sellerId', 'userId', 'storeName','storeDescription']})
        .then((seller)=> res.send(seller))
        .catch((err) =>res.status(500).send({error: err.message}));
    });

//Get all products
router.get("/product", (req, res) =>{
   
    models.products.findAll({attributes: ['productId', 'categoryId', 'sellerId','description','color','dimensionsCM','imgURL','price','quantity','careDifficulty','light','petFriendly','airPurifying' ]})
       .then((seller)=> res.send(seller))
       .catch((err) =>res.status(500).send({error: err.message}));
    });

//Get products by id
router.get("/product/:id",(req, res) =>{
const {productId} = req.params.id;
    models.products.findAll({ where: {productId,}},{
        attributes: ['productId', 'categoryId', 'sellerId','description','color','dimensionsCM','imgURL','price','quantity','careDifficulty','light','petFriendly','airPurifying' ]})
    .then((seller)=> res.send(seller))
    .catch((err) =>res.status(500).send({error: err.message}));
});

//Get products by category Id
router.get("/product/category/:id",(req, res) =>{
    const {categoryId} = req.params.id;
        models.sellers.findAll({ where: {categoryId,}},{
            attributes: ['productId', 'categoryId', 'sellerId','description','color','dimensionsCM','imgURL','price','quantity','careDifficulty','light','petFriendly','airPurifying' ]})
        .then((seller)=> res.send(seller))
        .catch((err) =>res.status(500).send({error: err.message}));
    });

//Get products by seller Id
router.get("/product/sellers/:id",(req, res) =>{
    const {sellerId} = req.params.id;
        models.sellers.findAll({ where: {sellerId,}},{
            attributes: ['productId', 'categoryId', 'sellerId','description','color','dimensionsCM','imgURL','price','quantity','careDifficulty','light','petFriendly','airPurifying' ]})
        .then((seller)=> res.send(seller))
        .catch((err) =>res.status(500).send({error: err.message}));
    });

// Get orders by seller Id



// router.post("/", (req, res, next){
// const {} = req.body;

// models.products.create {[]}
// .then((product)=> res.send(product))
// .cath((err) =>res.status(500).send(err));
// })


module.exports = router;