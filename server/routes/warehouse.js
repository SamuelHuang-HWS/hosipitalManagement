const Router = require('koa-router');
const Ware = require('../controllers/warehouse')

const router = new Router();


// router.post("/login", User.login);

  
router.post("/getWareInfo", Ware.getWareInfo);

router.post("/selectAll", Ware.selectAll);

router.post("/insertWare",Ware.insertWare);

router.post("/deleteWare",Ware.deleteWare);

router.post("/updateWare",Ware.updateWare);
router.post("/getUser",Ware.getUser);




//动态接口设计
// router.get('/list/:name',async ctx =>{
//   ctx.body={
//     name: ctx.params.name,
//     data:Date.now()
//   }
// })
  
  module.exports = router;