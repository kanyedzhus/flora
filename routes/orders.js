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
    })

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
    })

    module.exports = router;