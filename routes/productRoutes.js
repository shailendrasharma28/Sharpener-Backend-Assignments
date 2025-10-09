const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

// All recommended product routes
router.get("/", productController.getAllProducts);
router.post("/", productController.addProduct);

module.exports = router;