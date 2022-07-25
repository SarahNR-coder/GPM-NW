const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ac75ifguSh459#',
    database: 'Groupomania'
});

db.connect(function(err) {
    if(err) throw err;
    console.log("Connecté à la base de données MYSQL!");
});

module.exports = db;
