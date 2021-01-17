const Login = require('../models/login_model')
const jsonResult = require('../utils/JSON')

exports.loginCheck = async (ctx,next) => {
    try {
        let { body } = ctx.request.body;
        console.log(body);
        let res = await Login.loginCheck({admin_name: body.id, admin_password: body.pass});
        let role = res.admin_role == 1 ? "super" : "admin";
        ctx.body = jsonResult.resultSuccessJson(undefined, undefined,{msg:res.msg,token:role});
    } catch (error) {
        console.log(error)
        ctx.body = jsonResult.resultErrorJson(undefined, undefined);
    }
}

