var express = require('express');
var router = express.Router();
var models = require ("../models")

//Get products by category Id
// /categories/:categoryId
// router.get("/:categoryId",(req, res) =>{
//     const {categoryId} = req.params;
//     // console.log(models)
//         models.product.findAll({ where: {categoryId}},{
//             attributes: ['productId', 'categoryId', 'sellerId','description','color','dimensionsCM','imgURL','price','quantity','careDifficulty','light','petFriendly','airPurifying' ]})
//         .then((seller)=> res.send(seller))
//         .catch((err) =>res.status(500).send({error: err.message}));
//     });


    module.exports = router;