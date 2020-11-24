const Router = require('koa-router');
const goods = require('../controllers/goods')

const router = new Router();


router.post("/Ginfo", goods.getGoodsInfo);
router.post("/update", goods.update);
router.post("/Delete", goods.delete);
router.post("/insert", goods.insert);
router.post("/insertHouse", goods.insertHouse);
router.post("/buyHouse", goods.buyHouse);



//动态接口设计
router.get('/list/:name',async ctx =>{
  ctx.body={
    name: ctx.params.name,
    data:Date.now()
  }
})
  
  module.exports = router;