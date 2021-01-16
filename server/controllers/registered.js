const Router = require('koa-router');
const Registered = require('../service/registered_service')

const router = new Router();



// 注册-名册是否存在
router.post("/nameIsExist",Registered.nameIsExist)

// 注册-管理员注册
router.post("/adminRegistered",Registered.adminRegistered)


  
module.exports = router;