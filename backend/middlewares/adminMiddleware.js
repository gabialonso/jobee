import jwt from "jsonwebtoken";
import jwtConfig from "../config/jwt.js";
import prisma from "../config/db.js";
import 'express-async-errors';

export const adminMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Token no proporcionado" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, jwtConfig.secret);

        const user = await prisma.user.findUnique({ where: { id: decoded.id } });

        if (!user) throw new Error("Usuario no encontrado");

        const admin = await prisma.admin.findUnique({ where: { userId: user.id } });

        if (!admin || !admin.isActive) {
        return res.status(403).json({ error: "Acceso restringido para administradores" });
    }

    const { password, ...userData } = user;
        req.user = userData;
        req.admin = admin;
        next();
    } catch (error) {
        res.status(401).json({ error: "Token inválido" });
    }
};
