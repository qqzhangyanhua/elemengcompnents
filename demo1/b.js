var svgCaptcha = require('svg-captcha');
var router = require('express').Router();
var http = require('http')

router.get('/get-img-verify', function (req, res) {
    console.log(req.query);
    var option = req.query;
    // 验证码，有两个属性，text是字符，data是svg代码
    var code = svgCaptcha.create(option);
    // 保存到session,忽略大小写
    req.session["randomcode"] = code.text.toLowerCase();
    // 返回数据直接放入页面元素展示即可
    res.send({
        img: code.data
    });
});
// 创建http服务器
http.createServer(function (req, res) {
    if (req.url === '/favicon.ico') {
        return res.end()
    }
    let img = makeCapcha()
    res.setHeader('Content-Type', 'image/bmp')
    res.end(img.getFileData())
}).listen(3000)