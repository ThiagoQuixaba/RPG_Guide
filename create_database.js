const sqlite3 = require('sqlite3').verbose();
const database = new sqlite3.Database('database.db');

database.serialize(() => {
    database.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT UNIQUE NOT NULL, password TEXT NOT NULL, admin TEXT NOT NULL);`);
    
    database.run(`INSERT INTO users (username, password, admin) VALUES (?, ?, ?);`, ['Isabel', '25456266', 'false'], (err) => {
        if (err) {
            console.error('Erro ao inserir Isabel:', err.message);
        } else {
            console.log('Usuário Isabel inserido com sucesso!');
        }
    });
    database.run(`INSERT INTO users (username, password, admin) VALUES (?, ?, ?);`, ['Felas', '73', 'false'], (err) => {
        if (err) {
            console.error('Erro ao inserir Felas:', err.message);
        } else {
            console.log('Usuário Felas inserido com sucesso!');
        }
    });
    console.log("Tabela de usuários criada e dados inseridos com sucesso!");


    database.run(`CREATE TABLE IF NOT EXISTS events (name TEXT UNIQUE PRIMARY KEY, day int, month int, year int, hour TEXT, minute TEXT, description TEXT);`);

    database.run(`INSERT INTO events (name, day, month, year, hour, minute, description) VALUES (?, ?, ?, ?, ?, ?, ?);`, ['Prova de Maila', 17, 2, 2025, '15', '10', 'Fazer a prova de Maila.'], (err) => {
        if (err) {
            console.error('Erro ao inserir evento:', err.message);
        } else {
            console.log('Evento inserido com sucesso!');
        }
    });
    console.log("Tabela de eventos criada e dados inseridos com sucesso!");
    database.run(`INSERT INTO events (name, day, month, year, hour, minute, description) VALUES (?, ?, ?, ?, ?, ?, ?);`, ['Pitch/Apresentação mayla', 18, 2, 2025, '13', '00', 'Apresentar o pitch de empreendedorismo e o trabalho de Maila'], (err) => {
        if (err) {
            console.error('Erro ao inserir evento:', err.message);
        } else {
            console.log('Evento inserido com sucesso!');
        }
    });
    console.log("Tabela de eventos criada e dados inseridos com sucesso!");
    database.run(`INSERT INTO events (name, day, month, year, hour, minute, description) VALUES (?, ?, ?, ?, ?, ?, ?);`, ['Projeto de Julian', 19, 2, 2025, '14', '00', 'Apresentar o site do projeto de programação para web II'], (err) => {
        if (err) {
            console.error('Erro ao inserir evento:', err.message);
        } else {
            console.log('Evento inserido com sucesso!');
        }
    });
    console.log("Tabela de eventos criada e dados inseridos com sucesso!");
    database.run(`INSERT INTO events (name, day, month, year, hour, minute, description) VALUES (?, ?, ?, ?, ?, ?, ?);`, ['Projeto de Julian II', 20, 2, 2025, '14', '00', 'Apresentar o site do projeto de programação para web II'], (err) => {
        if (err) {
            console.error('Erro ao inserir evento:', err.message);
        } else {
            console.log('Evento inserido com sucesso!');
        }
    });
    console.log("Tabela de eventos criada e dados inseridos com sucesso!");

});

database.close();