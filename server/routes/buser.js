const Router = require('koa-router');
const buser = require('../controllers/buser')

const router = new Router();


router.post("/selete", buser.selete);
router.post("/update", buser.update);
router.post("/delete", buser.delete);
router.post("/insert", buser.insert);

//动态接口设计
router.get('/list/:name',async ctx =>{
  ctx.body={
    name: ctx.params.name,
    data:Date.now()
  }
})
  
  module.exports = router;