const Router = require('koa-router');
const driver = require('../controllers/driver')

const router = new Router();


router.post("/selectAll", driver.selectAll);
router.post("/updateDriver", driver.updateDriver);
router.post("/deleteDriver", driver.deleteDriver);
router.post("/insertDriver", driver.insertDriver);
router.post("/run", driver.run);

//动态接口设计
router.get('/list/:name',async ctx =>{
  ctx.body={
    name: ctx.params.name,
    data:Date.now()
  }
})
  
  module.exports = router;