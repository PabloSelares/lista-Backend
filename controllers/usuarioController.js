const Usuario = require('../models/Usuario');

exports.createUsuario = async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).send('Usuário criado!');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndUpdate(req.params.id, req.body);
    res.send('Usuário atualizado!');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.send('Usuário deletado!');
  } catch (error) {
    res.status(500).send(error.message);
  }
};
