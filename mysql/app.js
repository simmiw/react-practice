const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'app_user',
    password: 'password',
    database: 'city_manager'
})

connection.connect((err) => {
    if (err) return console.log(err.message);
    else console.log("connected with the server");
});

connection.query('SELECT * FROM town', (error, results, fields) => {
    if (!error) return console.log(results);
});