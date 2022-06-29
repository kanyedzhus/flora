const path = require("path");
// define the path to the dotenv
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
const stripeAPI = require("stripe")(process.env.STRIPE_SECRET_KEY);
console.log("key", process.env.STRIPE_SECRET_KEY);

// .\stripe.exe login - to use the stripe cli on windows navigate to the directory of the exe file and type this
module.exports = stripeAPI;
