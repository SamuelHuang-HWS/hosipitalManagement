const Router = require('koa-router');
const Order_model = require('../models/order_model');
const router = new Router();

//添加订单信息
exports.insertOrder = async (ctx, next) => {
    var req_info = ctx.request.body;
    await promise().then(data => {
      ctx.body = {
        code: 20000,
        data: data
      }
    })
    function promise() {
      return new Promise((resolved, reject) => {
        Order_model.insert_order(req_info, (err, data) => {
          // console.log(data);
          resolved(data);
        })
      })
    }
  
  }

  //查询所有订单信息
  exports.selectAll = async (ctx, next) => {
    await promise().then(data => {
      ctx.body = {
        code: 20000,
        data: data
      }
    })
    function promise() {
      return new Promise((resolved, reject) => {
        Order_model.sel_order_all((err, data) => {
          // console.log(data);
          resolved(data);
        })
      })
    }
  
  }
  //查询所有未审核订单
  exports.selectCheckAll = async (ctx, next) => {
    await promise().then(data => {
      ctx.body = {
        code: 20000,
        data: data
      }
    })
    function promise() {
      return new Promise((resolved, reject) => {
        Order_model.sel_check_all((err, data) => {
          console.log(data);
          resolved(data);
        })
      })
    }
  
  }

  //查询所有审核订单
  exports.selectCheckAll1 = async (ctx, next) => {
    await promise().then(data => {
      ctx.body = {
        code: 20000,
        data: data
      }
    })
    function promise() {
      return new Promise((resolved, reject) => {
        Order_model.sel_check_all1((err, data) => {
          console.log(data);
          resolved(data);
        })
      })
    }
  
  }
  //查询退换货单
  exports.getReturnInfo = async (ctx, next) => {
    await promise().then(data => {
      ctx.body = {
        code: 20000,
        data: data
      }
    })
    function promise() {
      return new Promise((resolved, reject) => {
        Order_model.sel_return_all((err, data) => {
          console.log(data);
          resolved(data);
        })
      })
    }
  
  }

  //退货处理
  
  exports.returnGoods = async (ctx, next) => {
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
        Order_model.return_goods(req_info, (err, data) => {
          // console.log(data);
          resolved(data);
        })
      })
    }
  }
  //删除订单
  exports.deleteOrder = async (ctx, next) => {
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
        Order_model.delete_order(req_info, (err, data) => {
          // console.log(data);
          resolved(data);
        })
      })
    }
  }

  //订单审核
  exports.checkOrder = async (ctx, next) => {
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
        Order_model.check_order(req_info, (err, data) => {
          console.log(data);
          resolved(data);
        })
      })
    }
}
  //修改订单信息
  exports.updateOrder = async (ctx, next) => {
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
        Order_model.update_order(req_info, (err, data) => {
          console.log(data);
          resolved(data);
        })
      })
    }
}

//换货处理

exports.barterGoods = async (ctx, next) => {
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
      Order_model.barter_goods(req_info, (err, data) => {
        console.log(data);
        resolved(data);
      })
    })
  }
}