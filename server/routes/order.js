const Router = require('koa-router');
const Order = require('../controllers/order')

const router = new Router();


router.post("/insertOrder", Order.insertOrder);

router.post("/selectAll", Order.selectAll);

router.post("/deleteOrder", Order.deleteOrder);

router.post("/updateOrder", Order.updateOrder);

router.post("/selectCheckAll", Order.selectCheckAll);

router.post("/selectCheckAll1", Order.selectCheckAll1);

router.post("/getReturnInfo",Order.getReturnInfo);

router.post("/checkOrder",Order.checkOrder);

router.post("/returnGoods",Order.returnGoods);

router.post("/barterGoods",Order.barterGoods);


  
// router.get("/info", User.info);



// //动态接口设计
// router.get('/list/:name',async ctx =>{
//   ctx.body={
//     name: ctx.params.name,
//     data:Date.now()
//   }
// })
  
  module.exports = router;
  // /ims/user/login