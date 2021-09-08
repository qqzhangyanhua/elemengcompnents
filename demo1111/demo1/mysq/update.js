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
let updateSql = "UPDATE xiaoxiao SET name = ?,age = ? WHERE id = ?";
let updateSqlParams = ["LiangJunrong", "23", 1];

// 连接 SQL 并实施语句
connection.query(updateSql, updateSqlParams, function (err, res) {
    if (err) {
        console.log("修改错误：");
        console.log(err);
        return;
    } else {
        console.log("修改成功：");
        console.log(res);
    }
});

// 终止连接
connection.end();