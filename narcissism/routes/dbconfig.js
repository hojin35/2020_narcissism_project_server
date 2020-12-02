var mysql = require('mysql');
var db_info = {
    host: 'http://10.80.161.48',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'narcissism'
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}