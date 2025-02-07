const express = require('express');
const bodyParser = require('body-parser');
const { authenticateUser } = require('./auth');

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON
app.use(bodyParser.json());

// Middleware para servir arquivos estáticos (HTML, CSS, etc.)
app.use(express.static(__dirname));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    authenticateUser(username, password, (err, user) => {
        if (err) {
            return res.status(500).json({ error: 'Erro no servidor' });
        }
        if (user) {
            res.json(user);
        } else {
            res.status(401).json({ error: 'Credenciais inválidas.' });
        }
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});