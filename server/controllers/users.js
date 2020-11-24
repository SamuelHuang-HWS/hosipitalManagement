const Router = require('koa-router');
const User_model = require('../models/user_model');
const router = new Router();
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}
const users = {
  'admintoken': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editortoken': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}
let info = {};
//登录验证
exports.login = async (ctx, next) => {
  let res_user = ctx.request.body;
  console.log(res_user);
  
  let req_user = [];
  var token = {};
  await promise1().then(data => {
    console.log(req_user);

    if (req_user != undefined) {
      if (req_user.u_super == 1) {
        // console.log("超管");
        token = tokens['admin'];
        info = users['admintoken']
        ctx.body = {
          code: 20000,
          data: token
        }
      }
      else {
        token = tokens['editor'];
        info = users['editortoken']
        ctx.body = {
          code: 20000,
          data: token
        }
      }
    }
    else {
      ctx.body = {
        code: 60204,
        message: '账号或密码错误！'
      }
    }
   
    
  })
  function promise1() {
    console.log("123");
    var p1 = new Promise(function (resolved, rejected) {
      User_model.sel_all(res_user, (err, data) => {
        
        
        req_user = JSON.parse(JSON.stringify(data))[0];
        console.log(req_user);
        
        resolved(data);
      }
      )
    })
    return p1;
  }

}
//获取用户信息
exports.info = async (ctx, next) => {
  console.log("用户信息获取成功！")
  ctx.body = {
    code: 20000,
    data: info
  }
}
//退出登录
exports.logout = async (ctx, next) => {
  console.log("退出成功");
  
  ctx.body = {
    code: 20000,
    data: 'success'
  }
}
