const express = require('express');
const router = express.Router();
const cors = require("cors");   
const { newProduct, getProducts, getFeaturedProducts, getSingleProduct, updateProduct, deleteProduct, createProductReview, calculateAverageRating, getProductReviews, deleteReview, addToCart,getUserProducts, getProductRevenue } = require('../controllers/productController');

const { isAuthenticatedUser } = require('../middlewares/auth');

router.route('/search').get(getProducts);

router.route('/products/featured').get(getFeaturedProducts);

router.route('/product/new').post(isAuthenticatedUser, newProduct);

router.route('/product/:id').get(getSingleProduct);

router.route('/admin/product/:id').put(isAuthenticatedUser, updateProduct).delete(isAuthenticatedUser, deleteProduct);

router.route('/review').put(isAuthenticatedUser, createProductReview);

router.route('/reviews').get(isAuthenticatedUser, getProductReviews);

router.route('/rating').get(calculateAverageRating);

router.route('/reviews').delete(isAuthenticatedUser, deleteReview);

router.route('/cart/add', isAuthenticatedUser, addToCart);

router.route('/products/user/:id').get(isAuthenticatedUser, getUserProducts);

router.route('/revenue/product/:productId').get(getProductRevenue);


module.exports = router;