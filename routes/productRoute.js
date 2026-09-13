const express = require('express');
const{uploadProduct, getAllProducts} = require('../controller/productController.js');

const productRoute = express.Router();

productRoute.post('/upload/:userId', uploadProduct);
productRoute.get('/get-all-products', getAllProducts);

module.exports = productRoute;