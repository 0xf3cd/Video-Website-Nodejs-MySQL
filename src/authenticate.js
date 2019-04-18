const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'wnq',
    password: '123456',
    database: 'video'
});

connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
//     if (error) {
//         throw error;
//     }
//     console.log('The solution is: ', results[0].solution);
// });

const isValid = function(res, data) {
    // console.log('SELECT COUNT(*) amount FROM `users` WHERE'
    // +' username = \'' + data.username + '\' AND password = \''
    // + data.password + '\'');
    // console.log('SELECT COUNT(*) amount FROM `users` WHERE username = \''+data.username+'\' AND password =\''+ data.password +'\'');
    connection.query('SELECT COUNT(*) amount FROM `users` WHERE'
    + ' username = \'' + data.username + '\' AND password = \''
    + data.password + '\'', (err, rows, fields) => {
        if (err) throw err;
        const amount = rows[0].amount;
        if(amount == 0){
            console.log('Login Error');
            res.sendStatus(404);
        } else {
            console.log('Login Success');
            res.sendStatus(200);
        }
    });
    // connection.end();
};

module.exports = {
    isValid: isValid
};