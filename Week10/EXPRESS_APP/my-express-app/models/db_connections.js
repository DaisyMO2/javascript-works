const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'd@isy123',
    database: 'student_db'
});

db.connect(err => {
    if (err){
        throw err;
    }else{
        console.log('connected to mysql database')
    }
});

module.exports = db;