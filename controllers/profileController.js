import * as profileService from '../services/profileService.js';

export const sendProfiles = async (req , res) => {
    try{
        const profile = await profile.find();
        res.json(profile);
    }catch (err){ 
        res.status(500).json({message:'Errpr al obtener usuarios', error:err});
    }

    }

exports.createPerfil = async (req , res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } 
catch (err) {
    res.status(400).json({ message: "Error al crear usuario", error: err });
    }
};

exports.updateProfile = async (req, res) => {
try {
    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
if (!updatedUser) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(updatedUser);
    }
catch (err) {
    res.status(400).json({ message: "Error al actualizar usuario", error: err });
    }
};

exports.deleteUser = async (req, res) => {
try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: "Usuario no encontrado" });
            res.json({ message: "Usuario eliminado correctamente" });
    } 
catch (err) {
    res.status(500).json({ message: "Error al eliminar usuario", error: err });
    }
};