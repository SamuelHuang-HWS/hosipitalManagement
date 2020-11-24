const Router = require('koa-router');
const Ware_model = require('../models/ware_model');
const router = new Router();

var info = "111"
//获取用户信息
exports.getWareInfo = async (ctx, next) => {
  // console.log("用户信息获取成功！")
  console.log(ctx.request.body);
  var req_info = ctx.request.body;
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
      Ware_model.sel_ware_info(req_info, (err, data) => {
        res_info = JSON.parse(JSON.stringify(data))[0];
        resolved(res_info);
      }
      )
    })
  }
}
//查询所有信息
exports.selectAll = async (ctx, next) => {
  await promise().then(data => {
    ctx.body = {
      code: 20000,
      data: data
    }
  })
  function promise() {
    return new Promise((resolved, reject) => {
      Ware_model.sel_ware_all((err, data) => {
        // console.log(data);
        resolved(data);
      })
    })
  }

}

exports.getUser = async (ctx, next) => {
  await promise().then(data => {
    ctx.body = {
      code: 20000,
      data: data
    }
  })
  function promise() {
    return new Promise((resolved, reject) => {
      Ware_model.get_user((err, data) => {
        // console.log(data);
        resolved(data);
      })
    })
  }

}
//添加仓库信息
exports.insertWare = async (ctx, next) => {
  var req_info = ctx.request.body;
  await promise().then(data => {
    ctx.body = {
      code: 20000,
      data: data
    }
  })
  function promise() {
    return new Promise((resolved, reject) => {
      Ware_model.insert_ware(req_info, (err, data) => {
        // console.log(data);
        resolved(data);
      })
    })
  }

}
//删除仓库信息
exports.deleteWare = async (ctx, next) => {
  var req_info = ctx.request.body;
  console.log(req_info);

  await promise().then(data => {
    ctx.body = {
      code: 20000,
      data: data
    }
  })
  function promise() {
    return new Promise((resolved, reject) => {
      Ware_model.delete_ware(req_info, (err, data) => {
        // console.log(data);
        resolved(data);
      })
    })
  }
}
//修改仓库信息
  exports.updateWare = async (ctx, next) => {
    var req_info = ctx.request.body;
    console.log(req_info);
    await promise().then(data => {
      ctx.body = {
        code: 20000,
        data: data
      }
    })
    function promise() {
      return new Promise((resolved, reject) => {
        Ware_model.update_ware(req_info, (err, data) => {
          // console.log(data);
          resolved(data);
        })
      })
    }
}

