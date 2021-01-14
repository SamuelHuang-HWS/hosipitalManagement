/*依赖包*/
const path = require("path");
const fs = require("fs");
const Router = require('koa-router');

/*配置文件*/
const config = require('../config');
const projectApiPrefix = config.API.PROJECT_INTERFACE_PREFIX;

// 工具
const utils = require('../utils/common')

// 初始化路由
const router = new Router({
    prefix: projectApiPrefix,
})

// 读取controller文件夹中的文件
fs.readdirSync(path.join(__dirname,'..','controllers')).forEach((file) => {
    if (~file.indexOf('.js')) {
        let controller = require(path.join(__dirname,'..','controllers', file));
        let fileName = utils.splitFileName(file)
        console.log(`/${fileName.name}`)
        // 为接口设置通用前缀
        router.use(`/${fileName.name}`, controller.routes(), controller.allowedMethods());
    }
});
module.exports = router;