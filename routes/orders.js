var express = require('express');
var router = express.Router();
var models = require ("../models")

//Get all orders
// /orders
router.get("/", async (req, res) =>{ 
    try {
        const response = await models.order.findAll({attributes:["orderId","buyerId","sellerId","invoiceId","status","createdAt"]});
        res.send(response);
      } catch (err) {
        res.status(400).send({ message: err.message });
      }
    });

//Get all orders by id

router.get("/:oderId", async (req, res) =>{ 
    const {orderId} = req.params;
    try {
        const response = await models.order.findOne({where: {orderId}, attributes:["orderId","buyerId","sellerId","invoiceId","status","createdAt"]});
        res.send(response);
      } catch (err) {
        res.status(400).send({ message: err.message });
      }
    });

//Get all orders by sellerId
// orders/order/:sellerId
router.get("/order/:sellerId",async (req, res) =>{ 
    const {sellerId} = req.params;
    try {
        const response = await models.order.findAll({where: {sellerId}, attributes:["orderId","buyerId","sellerId","invoiceId","status","createdAt"]});
        res.send(response);
      } catch (err) {
        res.status(400).send({ message: err.message });
      }
    });

     //Post an order
     router.post("/", (req, res) =>{
      const {orderId, buyerId, sellerId, invoiceId, status, total} = req.body;
   
        models.order.create({orderId, buyerId, sellerId, invoiceId, status, total})
        .then((data) => res.send(data))
        .catch((error) => {
        res.status(500).send(error);
    });
    });

    //Put order status by order Id
    router.put("/:orderId", async (req, res) => {
      const { orderId } = req.params;
      const { status } = req.body;
    
      try {
        const status = await models.order.findOne({
          where: {
            orderId,
          },
        });
    
        const data = await status.update({where: {status}});
    
        res.send(data);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    //Get order item buy orderId
    router.get("/item/:orderId", async (req, res) =>{ 
      const {orderId} = req.params;
      try {
          const response = await models.orderItem.findAll({where: {orderId}, attributes:["oderItemId","orderId","productId","quantity","createdAt"]});
          res.send(response);
        } catch (err) {
          res.status(400).send({ message: err.message });
        }
      });


    //Post order item
  router.post("/item", )
  

    module.exports = router;