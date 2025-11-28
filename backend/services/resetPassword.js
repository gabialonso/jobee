// services/passwordService.js
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { sendResetPasswordEmail } = require("../helpers/emailHelper");

async function requestPasswordReset(email) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("Usuario no encontrado");

  // Crear token
    const token = crypto.randomBytes(32).toString("hex");
    const expiration = Date.now() + 15 * 60 * 1000; // 15 minutos

    // Guardar en BD
    user.resetToken = token;
    user.resetTokenExp = expiration;
    await user.save();

  // Enviar email
    const link = `http://localhost:5173/reset-password/${token}`;
    await sendResetPasswordEmail(user.email, user.name, link);

    return { msg: "Correo de recuperación enviado" };
}

async function resetPassword(token, newPassword) {
    const user = await User.findOne({ where: { resetToken: token } });
        if (!user || Date.now() > user.resetTokenExp)
            throw new Error("Token inválido o expirado");

        const hashed = await bcrypt.hash(newPassword, 10);

        user.password = hashed;
        user.resetToken = null;
        user.resetTokenExp = null;
        await user.save();

        return { msg: "Contraseña actualizada correctamente" };
}

module.exports = { requestPasswordReset, resetPassword };
