const Registered = require('../models/registered_model')
const jsonResult = require('../utils/JSON')
const Cookie = require('../utils/cookie')


exports.nameIsExist = async (ctx,next) => {
    try {
        let { body } = ctx.request.body;
        let res = await Registered.nameIsExist({admin_name: body.name});
        ctx.body = jsonResult.resultSuccessJson(undefined, undefined, res);
    } catch (error) {
        console.log(error)
        ctx.body = jsonResult.resultErrorJson(undefined, undefined);
    }
}

exports.adminRegistered = async (ctx,next) => {
    try{
        let { body } = ctx.request.body;
        let { name, pass } = body; 
        let res = await Registered.adminRegistered({name:name,pass:pass});
        if(res.insertId){
            ctx.body = jsonResult.resultSuccessJson(undefined, undefined, {id:res.insertId});
        }
    }catch(error){
        ctx.body = jsonResult.resultErrorJson(undefined, undefined);
    }
}

