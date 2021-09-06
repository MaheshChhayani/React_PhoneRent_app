var express = require('express');
var router = express.Router();
const jwt = require("express-jwt");
const auth = jwt({
    secret:process.env.JWT_SECRET,
    userProperty: 'payload'
});
const ctrlMobile = require("../controllers/mobiles");
const ctrlReview = require("../controllers/reviews");
const ctrlCustomer = require("../controllers/customers");
const ctrlAuth = require("../controllers/authentication");

router.get('/mobiles',ctrlMobile.getMobiles);
router.get('/mobiles/:mobileid',ctrlMobile.getSingleMobile);

router.get('/reviews',ctrlReview.getReviews);
router.post('/reviews',auth,ctrlReview.createReview);

router.post("/register",ctrlAuth.register);
router.post("/login",ctrlAuth.login);

router.get('/customers/:emailid',ctrlCustomer.getCustomers);
router.post('/customers',ctrlCustomer.createCustomer);
router.delete('/customers/:customerid',ctrlCustomer.deleteCustomer);
router.get('/customers/search/:mobileid',ctrlCustomer.getCustomerByMobileID);
module.exports = router;