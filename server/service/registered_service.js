const Registered = require('../models/registered_model')
const jsonResult = require('../utils/JSON')


exports.nameIsExist = async (ctx) => {
    try {
        console.log(ctx.request)
        let res = await Registered.nameIsExist({admin_name: '超级管理员'})
        ctx.cookies.set('username', 'lisa', {
                domain: 'localhost',
                path: '/',   //cookie写入的路径
                maxAge: 1000 * 60 * 60 * 1,
                expires: new Date('2021-07-06'),
                httpOnly: false,
                overwrite: false
            }
        );
        ctx.body = jsonResult.resultSuccessJson(undefined, undefined, res)
    } catch (error) {
        console.log(error)
        ctx.body = jsonResult.resultErrorJson(undefined, error, {});
    }
}

