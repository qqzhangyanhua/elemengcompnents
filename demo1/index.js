var express = require('express');
var app = express();
//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

var questions = {
  phone: '13212345678',
  carNo: '苏E31QL7',
  addr: '上海浦东营业厅',
  datailAddr: '宜山路719号',
  dataTime: '2019-10-14',
  nowTime: '10:30-11:00',
  categroy: '咨询'
};



// var questions = [{
//     depId: "sss",
//     depCategoryInfo: "ssss",
//     depCategory: "sssss",
//     depKey: "ssssss",
//     depValue: "任务类型"
//   },
//   {
//     depId: "sss",
//     depCategoryInfo: "ssss",
//     depCategory: "sssss",
//     depKey: "ssssss",
//     depValue: "任务类型2"
//   },
//   {
//     depId: "sss",
//     depCategoryInfo: "ssss",
//     depCategory: "sssss",
//     depKey: "ssssss",
//     depValue: "胖虎傻逼"
//   },
// ]




//写个接口123
app.get('/123', function (req, res) {
  res.status(200),
    res.json(questions)
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
//post请求
// const server = http.createServer((req, res) => {
//     if (req.method === 'POST') {
//         // console.log('req.content-type')
//         //接受数据
//         let postDate = ''
//         req.on('data', chunk => {
//             postDate += chunk.toString()
//         })
//         req.on('end', () => {
//             console.log('postData', postDate)
//             res.end('hello wrold')
//         })

//     }
// })