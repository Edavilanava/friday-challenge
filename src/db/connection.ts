import mysql from 'mysql2/promise';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kikoboss@10',
    database: 'friday-challenge'
});
