const Router = require('koa-router');
const Login = require('../service/login_service');
const router = new Router();

// 登录-登录验证
router.post("/loginCheck",Login.loginCheck);

router.get("/test",async(ctx)=>{
    ctx.cookies.set("test",'test',{
        domain:'localhost',
        path:'/',   //cookie写入的路径
        maxAge:1000*60*60*1,
       expires:new Date('2021-07-06'),
       httpOnly:false,
       overwrite:false
   }),
   ctx.body = '11111'
})

module.exports = router;



