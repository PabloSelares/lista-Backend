const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connect');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();
const port = 80;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/usuarios', usuarioRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
