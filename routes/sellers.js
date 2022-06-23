var express = require('express');
var router = express.Router();
var models = require ("../models")

//Get all sellers
router.get("/", async (req, res) =>{ 
    try {
        const response = await models.seller.findAll({attributes:["userId","sellerId"]});
        res.send(response);
      } catch (err) {
        res.status(400).send({ message: err.message });
      }
    
});

//Get all products
router.get("/product", (req, res) =>{
    models.product.findAll({attributes: ['productId', 'categoryId', 'sellerId','description','color','dimensionsCM','imgURL','price','quantity','careDifficulty','light','petFriendly','airPurifying' ]})
       .then((product)=> res.send(product))
       .catch((err) =>res.status(500).send({error: err.message}));
    });

//Get seller by Id
router.get("/:sellerId",(req, res) =>{
    const {sellerId} = req.params;
    
        models.seller.findOne({ 
            attributes: ['sellerId', 'userId', 'storeName','storeDescription'], where: {sellerId}})
        .then((seller)=> res.send(seller))
        .catch((err) =>res.status(500).send({error: err.message}));
    });



//Post a Product
    router.post("/product", (req, res) =>{
      const {categoryId, sellerId, description, color, dimensionsCM, imgURL, price, quantity, careDifficulty, light, petFriendly,airPurifying} = req.body;
      //console.log({categoryId, sellerId, description, color, dimensionsCM, imgURL, price, quantity, careDifficulty, light, petFriendly,airPurifying});
       
        models.product.create({categoryId, sellerId, description, color, dimensionsCM, imgURL, price, quantity, careDifficulty, light, petFriendly,airPurifying}).then((data) => res.send(data))
        .catch((error) => {
        res.status(500).send(error);
    });
    });



// Get products by seller Id
// router.get("/product/sellers/:sellerId",(req, res) =>{
//     const {sellerId} = req.params;
//         models.sellers.findAll({ where: {sellerId,}},{
//             attributes: ['productId', 'categoryId', 'sellerId','description','color','dimensionsCM','imgURL','price','quantity','careDifficulty','light','petFriendly','airPurifying' ]})
//         .then((seller)=> res.send(seller))
//         .catch((err) =>res.status(500).send({error: err.message}));
//     });





module.exports = router;