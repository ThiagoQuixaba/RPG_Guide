const sqlite3 = require('sqlite3').verbose();

function getTokens(owner, callback) {
    const database = new sqlite3.Database('database.db');

    database.all(
        `SELECT * FROM tokens WHERE owner = ?`, [owner], (err, rows) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, rows); // rows agora contém um array de eventos
            }
        }
    );

    database.close(); // Fechar o banco de dados após a consulta
}

module.exports = { getTokens };