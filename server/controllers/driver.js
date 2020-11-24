const Router = require('koa-router');
const driver_model = require('../models/driver_model');
const router = new Router();
//获取信息
exports.selectAll = async (ctx, next) => {
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
            driver_model.select( (err, data) => {
                res_info = JSON.parse(JSON.stringify(data));
                resolved(res_info);
            }
            )
        })
    }
}


exports.deleteDriver = async (ctx, next) => {
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
            driver_model.delete(req_info, (err, data) => {
                res_info = JSON.parse(JSON.stringify(data));
                resolved(res_info);
            }
            )
        })
    }
}

exports.insertDriver = async (ctx, next) => {
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
            driver_model.insert(req_info, (err, data) => {
                res_info = JSON.parse(JSON.stringify(data));
                resolved(res_info);
            }
            )
        })
    }
}

exports.updateDriver = async (ctx, next) => {
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
            driver_model.update(req_info, (err, data) => {
                res_info = JSON.parse(JSON.stringify(data));
                resolved(res_info);
            }
            )
        })
    }
}

exports.run = async (ctx, next) => {
    console.log(ctx.request.body);
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
            driver_model.run_start(req_info, (err, data) => {
                res_info = JSON.parse(JSON.stringify(data));
                resolved(res_info);
            }
            )
        })
    }
}

