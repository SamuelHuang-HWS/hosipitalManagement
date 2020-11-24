const Router = require('koa-router');
const Goods_model = require('../models/goods_model');
const router = new Router();

var info = "111"
//获取信息
exports.getGoodsInfo = async (ctx, next) => {
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
            Goods_model.get_info(req_info, (err, data) => {
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
            Goods_model.Delete(req_info, (err, data) => {
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
            Goods_model.insert(req_info, (err, data) => {
                res_info = JSON.parse(JSON.stringify(data));
                resolved(res_info);
            }
            )
        })
    }
}

exports.update = async (ctx, next) => {
    console.log("信息获取成功！")
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
            Goods_model.update(req_info, (err, data) => {
                res_info = JSON.parse(JSON.stringify(data));
                resolved(res_info);
            }
            )
        })
    }
}

exports.buyHouse = async (ctx, next) => {
    console.log("信息获取成功！")
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
            Goods_model.buy_house(req_info, (err, data) => {
                res_info = JSON.parse(JSON.stringify(data));
                resolved(res_info);
            }
            )
        })
    }
}


exports.insertHouse = async (ctx, next) => {
    var req_info = ctx.request.body;
    await promise().then(data => {
      ctx.body = {
        code: 20000,
        data: data
      }
    })
    function promise() {
      return new Promise((resolved, reject) => {
        Goods_model.insert(req_info, (err, data) => {
          // console.log(data);
          resolved(data);
        })
      })
    }
  
  }


