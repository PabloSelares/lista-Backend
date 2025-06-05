const mongoose = require('mongoose');

const connectDB = () => {
  return mongoose.connect(
    "mongodb+srv://pabloselares:root@cluster0.hk5r4nv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log('Conectado ao MongoDB Atlas!'))
  .catch(err => console.log('Erro na conexão:', err));
};

module.exports = connectDB;
