var express = require('express');
var router = express.Router();
var models = require ("../models")

//Get cart session by id

router.get("/:cartSessionId", async (req, res) =>{ 
    const {cartSessionId} = req.params;
    try {
        const response = await models.cartSession.findOne({where: {cartSessionId}, attributes:["cartSessionId","total","buyerId","createdAt"]});
        res.send(response);
      } catch (err) {
        res.status(400).send({ message: err.message });
      }
    });

//Get cart session by buyerId

router.get("/buyer/:buyerId", async (req, res) =>{ 
    const {buyerId} = req.params;
    try {
        const response = await models.cartSession.findOne({where: {buyerId}, attributes:["cartSessionId","total","buyerId","createdAt"]});
        res.send(response);
      } catch (err) {
        res.status(400).send({ message: err.message });
      }
    });

//Post cart session
router.post("/", (req, res) =>{
    const { total, buyerId } = req.body;
 
      models.cartSession.create({ total, buyerId })
      .then((data) => res.send(data))
      .catch((error) => {
      res.status(500).send(error);
  });
  });

  //Get cart item by cart session id
  router.get("/item/:cartSessionId", async (req, res) =>{ 
    const {cartSessionId} = req.params;
    try {
        const response = await models.cartItem.findAll({where: {cartSessionId}, attributes:["cartSessionId","productId","quantity","createdAt"]});
        res.send(response);
      } catch (err) {
        res.status(400).send({ message: err.message });
      }
    });

//Post cart Item
    router.post("/item", (req, res) =>{
        const {cartSessionId, productId, quantity} = req.body;
     
          models.cartItem.create({cartSessionId, productId, quantity})
          .then((data) => res.send(data))
          .catch((error) => {
          res.status(500).send(error);
      });
      });

//Put cart item by quantity 

router.put("/item/:cartItemId", async (req, res) => {
    const { cartItemId } = req.params;
    
    try {
      const response = await models.cartItem.findOne({
        where: {cartItemId},
        attributes: ["cartItemId ", "cartSessionId", "productId ", "invoiceId","quantity","createdAt","updatedAt"],
      });
      console.log(response)

      const { quantity } = req.body;
      const data = await response.update({quantity: {quantity}});
  
      res.send(data);
    } catch (error) {
      res.status(500).send(error);
    }
  });

//Delete cart item by id
router.delete("/item/:cartItemId", async (req, res) => {
    const { cartItemId } = req.params;
    
    try {
      const response = await models.cartItem.findOne({
        where: {cartItemId},
        attributes: ["cartItemId ", "cartSessionId", "productId ", "invoiceId","quantity","createdAt","updatedAt"],
      });
      const data = await response.destroy();
      res.send(data);
    } catch (error) {
      res.status(500).send(error);
    }
});


//Delete cart session
router.delete("/session/:cartSessionId", async (req, res) => {
    const { cartSessionId } = req.params;
    
    try {
      const response = await models.cartSession.findOne({
        where: {cartSessionId},
        attributes: ["cartSessionId", "total", "buyerId ", "createdAt","updatedAt"],
      });
      const data = await response.destroy();
      res.send(data);
    } catch (error) {
      res.status(500).send(error);
    }
});

module.exports = router;