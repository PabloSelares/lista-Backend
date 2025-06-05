const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose
    .connect(
      "mongodb+srv://talles:root@lista.bal4y7o.mongodb.net/?retryWrites=true&w=majority&appName=lista"
    )
    .then(() => console.log("Conectado ao MongoDB Atlas!"))
    .catch((err) => console.log("Erro na conexão:", err));
};

module.exports = connectDB;
