
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senac',
    database: 'cadastro_db'
});

db.connect((err) => {
        if (err) 
            {
                console.log('Erro ao conectar no banco de dados: ' + err.stack);
                return;
            }
            console.log('Conectado ao banco de dados MySQL');
    });

app.post('/api/cadastro', (req, res) => {
        const { nome, email, senha} = req.body;

        if (!nome || !email || !senha)
            {
                return res.status(400).json({ message: 'Por favor, forneça nome, email e senha. '});
            }

        const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
        db.execute(query, [nome, email, senha], (err, result) => {
                if(err) 
                    {
                        console.log('Erro ao cadastrar usuário:', err);
                        return res.status(500).json({ message: 'Erro ao cadastrar usuário' });
                    }
                res.status(200).json({ message: 'Usuário cadastrado com sucesso!' });
            });
    });

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});