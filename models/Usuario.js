const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  nome: String,
  email: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
