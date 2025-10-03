export const register = async (req, res, next) => {
  try {
    const user = await UserService.register(req.body);

    return res.status(201).json({
      success: true,
      message: "Usuario registrado exitosamente",
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    next(error); // delega al middleware de manejo de errores
  }
};
export const getProfile = async (req, res) => {
  return res.status(200).json({
    success: true,
    data: {
      id: req.user.id,
      email: req.user.email,
      name: req.user.name,
    },
  });
};
