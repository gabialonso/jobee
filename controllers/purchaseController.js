const purchaseService = require("../services/purchase.service");
import {
    buyCourse, 
    getUserPurchases,
    getAllPurchases,
} from "../src/services/purchase.service.js";


// POST /purchases
async function buyCourse(req, res) {
    try {
        const { userId, courseId, price, currency } = req.body;
        const purchase = await purchaseService.buyCourse(userId, courseId, price, currency);
        res.status(201).json(purchase);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// GET /purchases/user/:userId
async function getUserPurchases(req, res) {
    try {
        const { userId } = req.params;
        const purchases = await purchaseService.getUserPurchases(userId);
        res.status(200).json(purchases);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// GET /purchases (solo admin)
async function getAllPurchases(req, res) {
    try {
        const purchases = await purchaseService.getAllPurchases();
        res.status(200).json(purchases);
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    buyCourse,
    getUserPurchases,
    getAllPurchases,
};
