const sqlite3 = require('sqlite3').verbose();

function authenticateUser(username, password, callback) {
    const database = new sqlite3.Database('database.db');

    database.get(
        `SELECT * FROM users WHERE username = ?`, [username], (err, row) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, row);
            }
        }
    );

    database.close();
}

module.exports = {authenticateUser};