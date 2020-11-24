const Router = require('koa-router');
const Task_model = require('../models/task_model');
const router = new Router();

var info = "111"
//获取信息
exports.selete = async (ctx, next) => {
    console.log("信息获取成功！")
    // console.log(ctx.request.body);
    var req_info = ctx.request.body;//前端获取的数据

    var res_info = [];
    await promise().then(data => {
        console.log(data);
        ctx.body = {
            code: 20000,
            data: data
        }
    })
    function promise() {
        // console.log("123");
        return new Promise(function (resolved, rejected) {
            Task_model.get_info(req_info, (err, data) => {
                res_info = JSON.parse(JSON.stringify(data));
                resolved(res_info);
            }
            )
        })
    }
}


exports.delete = async (ctx, next) => {
    console.log("信息获取成功！")
    // console.log(ctx.request.body);
    var req_info = ctx.request.body;//前端获取的数据

    var res_info = [];
    await promise().then(data => {
        console.log(data);
        ctx.body = {
            code: 20000,
            data: data
        }
    })
    function promise() {
        // console.log("123");
        return new Promise(function (resolved, rejected) {
            Task_model.delete(req_info, (err, data) => {
                res_info = JSON.parse(JSON.stringify(data));
                resolved(res_info);
            }
            )
        })
    }
}

exports.insert = async (ctx, next) => {
    console.log("信息获取成功！")
    // console.log(ctx.request.body);
    var req_info = ctx.request.body;//前端获取的数据

    var res_info = [];
    await promise().then(data => {
        console.log(data);
        ctx.body = {
            code: 20000,
            data: data
        }
    })
    function promise() {
        // console.log("123");
        return new Promise(function (resolved, rejected) {
            Task_model.insert(req_info, (err, data) => {
                res_info = JSON.parse(JSON.stringify(data));
                resolved(res_info);
            }
            )
        })
    }
}

exports.update = async (ctx, next) => {
    console.log("信息获取成功！")
    // console.log(ctx.request.body);
    var req_info = ctx.request.body;//前端获取的数据

    var res_info = [];
    await promise().then(data => {
        console.log(data);
        ctx.body = {
            code: 20000,
            data: data
        }
    })
    function promise() {
        // console.log("123");
        return new Promise(function (resolved, rejected) {
            Task_model.update(req_info, (err, data) => {
                res_info = JSON.parse(JSON.stringify(data));
                resolved(res_info);
            }
            )
        })
    }
}

