var express = require("express");
var router = express.Router();
const models = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");

// Register a seller with POST .
//route auth/seller/register
router.post("/seller/register", async (req, res) => {
  const {
    userName,
    email,
    password,
    firstName,
    lastName,
    imgUrl,
    role,
    storeName,
    storeDescription,
  } = req.body;
  let hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

  try {
    // destructure user and seller from models
    const { user, seller } = models;

    // create user with role of seller and save the result in a variable
    const vendor = await user.create({
      userName,
      email,
      hashedPassword,
      firstName,
      lastName,
      imgUrl,
      role,
    });

    console.log({ vendor });

    // get the userID from the variable returned from creating a user with the role of seller
    const userId = vendor.userId;

    // create entry in the Sellers table for the user created above and use the userId above as the foreign key
    await seller.create({
      userId,
      storeName,
      storeDescription,
    });
    console.log(hashedPassword);
    res.send({ message: "Registration successful" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Login a seller with POST
//route auth/seller/login

router.post("/seller/login", async (req, res) => {
  const { userName, password } = req.body;

  try {
    const results = await models.user
      .findOne({
        where: {
          userName: userName,
        },
      })
      .then((user) => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
        var passwordIsValid = bcrypt.compareSync(password, user.hashedPassword);

        if (passwordIsValid) {
          let payload = { userId: user.userId };
          let token = jwt.sign(payload, SECRET_KEY);
          delete user.password;
          res.status(200).send({
            message: "Login successful",
            token: token,
            user: user,
          });
        } else {
          res.status(401).send({ error: "Login failed" });
        }
      });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
