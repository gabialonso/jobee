// controllers/passwordController.js
const {
    requestPasswordReset,
    resetPassword,
} = require("../services/passwordService");

exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const result = await requestPasswordReset(email);
        res.json(result);
        } catch (err) {
            res.status(400).json({ msg: err.message });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const { token } = req.params;
            const { password } = req.body;
            const result = await resetPassword(token, password);
            res.json(result);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};
