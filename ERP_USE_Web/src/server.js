const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas básicas
app.get('/', (req, res) => {
  res.json({ message: 'ERP Use Sistemas - API' });
});

// Rotas dos módulos
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/produtos', require('./routes/produtos'));
app.use('/api/vendas', require('./routes/vendas'));
app.use('/api/clientes', require('./routes/clientes'));

const PORT = process.env.PORT || 4000; // Changed to 4000

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
