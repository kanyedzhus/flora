const express = require('express');
const router = express.Router();
const models = require ("../models")

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

//Get orders by id
// /orders/orderId
router.get("/:orderId",  (req, res) =>{ 
    const { orderId } = req.params;
    console.log(orderId)
   
    models.order
		.findOne({
			attributes: ["orderId","buyerId","sellerId","invoiceId","status","createdAt"],
			where: { orderId },
		})
		.then((seller) => res.send(seller))
		.catch((err) => res.status(500).send({ error: err.message }));
});


//Get all orders by sellerId
// orders/order/:sellerId
router.get("/order/:sellerId",async (req, res) =>{ 
    const { sellerId } = req.params;
    try {
        const response = await models.order.findAll({where: {sellerId}, attributes:["orderId","buyerId","sellerId","invoiceId","status","createdAt"]});
        res.send(response);
      } catch (err) {
        res.status(400).send({ message: err.message });
      }
    });

     //Post an order
     // /orders
     router.post("/", async (req, res) =>{
      const { buyerId, sellerId, invoiceId, status, total } = req.body;
      //console.log(buyerId);
   try{
        const order = await models.order.create({ buyerId, sellerId, invoiceId, status, total });
        res.send(order)
    } catch(error) {
     // console.log(error);
        res.status(500).send(error);
    };
    });

    //Put (edit) order status by order Id
    // /orders/:orderId
    router.put("/:orderId", async (req, res) => {
      const { orderId } = req.params;
      const { status } = req.body;
      //console.log(orderId, status)
      try {
        const response = await models.order.findOne({
          where: {orderId},
          attributes: ["orderId", "buyerId", "sellerId", "invoiceId","status","total","createdAt"],
        });
        //console.log(response)

        const data = await response.update({status});
        console.log(data)
        res.send(data);
      } catch (error) {
        res.status(500).send(error);
      }
    });

    //Get order item by orderId
    // /orders/item/:orderId
    router.get("/item/:orderId", async (req, res) =>{ 
      const { orderId } = req.params;
      try {
          const response = await models.orderItem.findAll({where: { orderId }, attributes:["oderItemId","orderId","productId","quantity","createdAt"]});
          res.send(response);
        } catch (err) {
          res.status(400).send({ message: err.message });
        }
      });


    //Post order item
    // /orders/item
  router.post("/item", async(req,res) =>{
   const { orderId, productId, quantity } = req.body;
   try{
    const response = await models.orderItem.create({ orderId, productId, quantity });
    res.send(response);
   } catch (err) {
    res.status(400).send({ message: err.message });
  }
  });
  

    module.exports = router;