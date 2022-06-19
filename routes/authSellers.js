var express = require('express');
var router = express.Router();
var models = require ("../models")

router.get("/", (req, res) =>{
    const where = req.query;

    models.sellers.findAll({
        where,
    })
})

module.exports = router;
