var mysql = require('mysql');
var db_info = {
    host: '10.80.161.48',
    port: '3306',
    user: 'narsha',
    password: 'narsha',
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