const Router = require('koa-router');
const task = require('../controllers/task')

const router = new Router();


router.post("/selete", task.selete);
router.post("/update", task.update);
router.post("/delete", task.delete);
router.post("/insert", task.insert);

//动态接口设计
router.get('/list/:name', async ctx => {
    ctx.body = {
        name: ctx.params.name,
        data: Date.now()
    }
})

module.exports = router;