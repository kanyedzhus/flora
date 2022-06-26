const path = require("path");
// define the path to the dotenv
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
const stripeAPI = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log("key", process.env.STRIPE_SECRET_KEY);

module.exports = stripeAPI;
