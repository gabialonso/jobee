import * as UserService from "../services/user/userService.js";
import { listCompaniesByUser } from "../services/company/companyService.js";

// POST /users/register
export const register = async (req, res, next) => {
  try {
    const user = await UserService.register(req.body);

    return res.status(201).json({
      success: true,
      message: "Usuario registrado exitosamente",
      data: { id: user.id, email: user.email, name: user.name },
    });
  } catch (error) {
    next(error);
  }
};

// GET /users/profile
export const getProfile = async (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      data: { id: req.user.id, email: req.user.email, name: req.user.name },
    });
  } catch (error) {
    next(error);
  }
};

const parseId = (value) => {
  if (value === null || value === undefined) {
    return null;
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return Math.trunc(value);
  }

  const normalized = String(value).trim();
  if (normalized === "") {
    return null;
  }

  const digitsOnly = normalized.replace(/[^\d-]+/g, "");
  if (!digitsOnly || digitsOnly === "-" || digitsOnly === "+") {
    return null;
  }

  const parsed = Number.parseInt(digitsOnly, 10);
  return Number.isNaN(parsed) ? null : parsed;
};

export const listUserCompanies = async (req, res, next) => {
  try {
    const userId = parseId(req.query.userId ?? req.params.userId);
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "userId es obligatorio",
      });
    }

    const companies = await listCompaniesByUser(userId);
    return res.status(200).json({
      success: true,
      data: companies,
    });
  } catch (error) {
    next(error);
  }
};
