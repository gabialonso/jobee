import * as purchaseService from {
buyCourse,
getUserPurchases,
getAllPurchases,    
}, "../services/purchaseService.js";

export const buyCourse = async (req, res, next) => {
    try {
        const { userId, courseId, price, currency } = req.body;
        const purchase = await purchaseService.buyCourse(userId, courseId, price, currency);

        return res.status(201).json({
            success: true,
            message: "Course purchased successfully",
            data: purchase,
        });
    } catch (error) {
        next(error); // handled by centralized error middleware
    }
};

export const getUserPurchases = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const purchases = await purchaseService.getUserPurchases(userId);

        return res.status(200).json({
            success: true,
            message: "User purchases retrieved",
            data: purchases,
        });
    } catch (error) {
        next(error);
    }
};

export const getAllPurchases = async (req, res, next) => {
    try {
        const purchases = await purchaseService.getAllPurchases();

        return res.status(200).json({
            success: true,
            message: "All purchases retrieved",
            data: purchases,
    });
    } catch (error) {
        next(error);
    }
};
