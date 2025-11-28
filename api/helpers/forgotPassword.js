import user from "./models/user"
import expressasyncerrors from "express-async-errors"


const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

async function sendResetPasswordEmail(to, name, link) {
    const mailOptions = {
        from: `"Mi App" <${process.env.EMAIL_USER}>`,
        to,
        subject: "Restablece tu contraseña",
        html: `
            <h2>Hola ${name}</h2>
            <p>Recibimos una solicitud para restablecer tu contraseña.</p>
            <p>Haz clic en el siguiente enlace para continuar:</p>
            <a href="${link}">${link}</a>
            <p>Este enlace expirará en 15 minutos.</p>
    `,
    };

    await transporter.sendMail(mailOptions);  
}

module.exports = { sendResetPasswordEmail };
