const express = require("express");
const router = express.Router();
const purchaseController = require("../controllers/purchase.controller");

// Buy a course
router.post("/", purchaseController.buyCourse);

// User's purchases
router.get("/user/:userId", purchaseController.getUserPurchases);

// Admin - all purchases
router.get("/", purchaseController.getAllPurchases);

module.exports = router;
