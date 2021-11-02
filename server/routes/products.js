import express from 'express';

import { getProducts, getProductsByTitle } from '../controllers/products.controller.js'

const router = express.Router();
router
    .route("/:title")
    .get(getProductsByTitle);

router
    .route("/")
    .get(getProducts);


export default router;