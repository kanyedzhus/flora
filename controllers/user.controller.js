exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};
exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};
exports.sellerBoard = (req, res) => {
  res.status(200).send("Seller Content.");
};
exports.buyerBoard = (req, res) => {
  res.status(200).send("Buyer Content.");
};
