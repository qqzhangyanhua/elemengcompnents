var mysql = require('mysql');
var connection = mysql.createConnection({
    host: '47.97.179.218',
    user: 'root',
    password: 'a123456',
    database: 'zhangyong'
});

connection.connect();

let addSql = "INSERT INTO xiaoxiao(id,name,age) VALUES(4,?,?)";
let addSqlParams = ["jsliang", "23"];

connection.query(addSql, addSqlParams, function (err, res) {
    if (err) {
        console.log("新增错误：");
        console.log(err);
        return;
    } else {
        console.log("新增成功：");
        console.log(res);
    }
});

connection.end();