const Koa = require("koa");
const cors = require('koa2-cors');
const koaBody = require('koa-body'); // 文件上传
const http = require("http");
const koaJson = require('koa-json');  // get提交数据的中间件
const bodyParser = require('koa-bodyparser');  // post提交数据中间件
const routes = require('./routes')

//初始化Koa
const app = new Koa();

/*配置文件*/
const config = require("./config");

/*配置属性*/
const {SERVICE , API} = config;

//跨域配置
app.use(cors({
    origin: function (ctx) {
        //允许所有url访问
        return [ctx.request.header.origin];
    },
    maxAge: 5,  //最大访问数量
    credentials: true  //允许携带cookie跨域
}));

//格式化请求参数
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: config.LIMIT.UPLOAD_IMG_SIZE    // 设置上传文件大小最大限制，默认2M
    }
}));
app.use(koaJson());
app.use(bodyParser());

//使用router·
app.use(routes.routes());

//创建监听
// app.listen(3000);
http.createServer(app.callback())
    .listen(SERVICE.PORT)
    .on('listening', function () {
        console.log(`服务已开启，端口：${SERVICE.PORT}`)
    })
console.log("server running : http://localhost:3000");


