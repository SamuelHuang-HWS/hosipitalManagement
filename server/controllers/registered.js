const Router = require('koa-router');
const Registered = require('../service/registered_service')

const router = new Router();




router.get("/nameIsExist",Registered.nameIsExist)


  
module.exports = router;