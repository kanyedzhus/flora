var express = require("express");
var router = express.Router();
const models = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const stripeAPI = require("../StripeApi/stripe");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");

// Register a buyer with POST .
//route auth/buyer/register
router.post("/buyer/register", async (req, res) => {
  const { userName, email, password, firstName, lastName, imgUrl, role } =
    req.body;

  let buyerRole = "buyer";
  let hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

  try {
    // // create customer on Stripe
    const stripeCustomer = await stripeAPI.customers.create({
      email: email,
      description: userName,
      name: firstName + " " + lastName,
    });

    // // get the stripe customer id
    const stripeId = stripeCustomer.id;

    // destructure user and seller from models
    const { user, buyer } = models;

    // create user with role of buyer and save the result in a variable
    const customer = await user.create({
      userName,
      email,
      hashedPassword,
      firstName,
      lastName,
      imgUrl,
      role: buyerRole,
    });

    console.log({ customer });

    // get the userID from the variable returned from creating a user with the role of seller
    const userId = customer.userId;

    // create entry in the Buyer table for the user created above and use the userId above as the foreign key
    await buyer.create({
      userId,
      stripeId,
    });
    console.log(hashedPassword);
    res.send({ message: "Registration successful" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

// Login a buyer with POST
//route auth/buyer/login

router.post("/buyer/login", async (req, res) => {
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
