const express = require('express');
const bodyParser = require('body-parser');
const { authenticateUser } = require('./auth');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;


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


// Rota para a raiz que serve o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve arquivos estáticos das pastas 'imgs'
app.use('/imgs', express.static(path.join(__dirname, 'imgs')));

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
