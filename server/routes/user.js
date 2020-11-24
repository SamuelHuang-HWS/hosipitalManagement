const Router = require('koa-router');
const User = require('../controllers/users')

const router = new Router();


router.post("/login", User.login);

  
router.get("/info", User.info);

router.post("/logout",User.logout);

//动态接口设计
router.get('/list/:name',async ctx =>{
  ctx.body={
    name: ctx.params.name,
    data:Date.now()
  }
})
  
  module.exports = router;
  // /ims/user/login