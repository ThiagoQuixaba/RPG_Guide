const sqlite3 = require('sqlite3').verbose();
const database = new sqlite3.Database('database.db');

database.serialize(() => {
    database.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE NOT NULL, password TEXT NOT NULL);`);

    database.run(`INSERT INTO users (username, password) VALUES (?, ?);`, ['Isabel', '25456266'], (err) => {
        if (err) {
            console.error('Erro ao inserir Isabel:', err.message);
        } else {
            console.log('Usuário Isabel inserido com sucesso!');
        }
    });

    database.run(`INSERT INTO users (username, password) VALUES (?, ?);`, ['Felas', '73'], (err) => {
        if (err) {
            console.error('Erro ao inserir Felas:', err.message);
        } else {
            console.log('Usuário Felas inserido com sucesso!');
        }
    }); 

    console.log("Tabela de usuários criada e dados inseridos com sucesso!");
});

database.close();