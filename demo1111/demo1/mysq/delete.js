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
var delSql = 'DELETE FROM xiaoxiao where id = 0';

// 连接 SQL 并实施语句
connection.query(delSql, function (err, res) {
    if (err) {
        console.log("删除错误：");
        console.log(err);
        return;
    } else {
        console.log("删除成功：");
        console.log(res);
    }
});

// 终止连接
connection.end();