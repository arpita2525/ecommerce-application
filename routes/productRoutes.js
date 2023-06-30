import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  productFiltersController,
  productCountController,
  updateProductController,
  productListController,
  searchProductController,
  relatedProductController,
  productCategoryController,
  brainTreePaymentController,
  braintreeTokenController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//filter product 
router.post('/product-filters',productFiltersController
);

//product coutn;
router.get('/product-count',productCountController);
// product per page
router.get('/product-list/:page',productListController);

//search product router
router.get('/search/:keyword',searchProductController);

//similar products
router.get('/related-product/:pid/:cid',relatedProductController);

//category wise product routr
router.get('/product-category/:slug',productCategoryController);

//payments routes
//token
router.get('/braintree/token',braintreeTokenController);

//payments
router.post('/braintree/payment',requireSignIn,brainTreePaymentController);

export default router;