require("dotenv").config();

// Required by bcrypt
const SECRET_KEY = process.env.SECRET_KEY || "my weak (!!) secret key";
const BCRYPT_WORK_FACTOR = 12; // determines "strength" of hashing

// Stripe key
const STRIPE_SECRET_KEY =
  process.env.STRIPE_SECRET_KEY || "secret key for stripe";

module.exports = {
  SECRET_KEY,
  BCRYPT_WORK_FACTOR,
  STRIPE_SECRET_KEY,
};
