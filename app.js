const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const sellerRouter = require("./routes/sellers");
const productsRouter = require("./routes/products");
const ordersRouter = require("./routes/orders");
const categoriesRouter = require("./routes/categories");
const cartSessionsRouter = require("./routes/cartsessions");
const cartItemsRouter = require("./routes/cartitems");

const createCheckoutSession = require("./StripeAPI/checkout");

const authSellersRouter = require("./routes/authSellers");
const authBuyersRouter = require("./routes/authBuyers");
const cartRouter = require("./routes/carts");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// needed to make this folder static inorder to access the file in the browser using its name
app.use("/public/files", express.static("public/files"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/sellers", sellerRouter);
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);
app.use("/categories", categoriesRouter);
app.use("/cartsessions", cartSessionsRouter);
app.use("/cartitems", cartItemsRouter);

app.post("/create-checkout-session", createCheckoutSession);
app.use("/auth", authSellersRouter);
app.use("/auth", authBuyersRouter);
app.use("/carts", cartRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// shows up if route incorrectly typed
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
