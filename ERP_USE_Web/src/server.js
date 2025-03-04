const express = require('express');
const cors = require('cors');
const path = require('path'); // Import path module
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '/../views'))); // Serve static files

// Serve the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../views/login.html')); // Updated path
});

// Routes
app.use('/api/login', require('./routes/login'));
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/produtos', require('./routes/produtos'));
app.use('/api/vendas', require('./routes/vendas'));
app.use('/api/clientes', require('./routes/clientes'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
