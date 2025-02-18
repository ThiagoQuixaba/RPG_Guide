const sqlite3 = require('sqlite3').verbose();

function getEvents(callback) {
    const database = new sqlite3.Database('database.db');

    database.all(
        `SELECT * FROM events`, [], (err, rows) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, rows); // rows agora contém um array de eventos
            }
        }
    );

    database.close(); // Fechar o banco de dados após a consulta
}

module.exports = { getEvents };
