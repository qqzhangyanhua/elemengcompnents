// 连接 MySQL
var mysql = require('mysql');
// MySQL 的连接信息
var connection = mysql.createConnection({
    host: '47.97.179.218',
    user: 'root',
    password: 'a123456',
    database: 'zhangyong'
});

// 开始连接
connection.connect();

// 新增的 SQL 语句及新增的字段信息
let readSql = "SELECT * FROM xiaoxiao";

// 连接 SQL 并实施语句
connection.query(readSql, function (err, res) {
    if (err) throw err;
    console.log(res);
});

// 终止连接n
connection.end();