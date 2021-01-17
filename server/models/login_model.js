const db = require("../utils/db");

exports.loginCheck =  async (params) => {
    return new Promise(((resolve, reject) => {
        db.query('select * from admin where (admin_name = ? and admin_password = ?) or (admin_id = ? and admin_password = ?)',[params.admin_name,params.admin_password,params.admin_name,params.admin_password]).then(res=>{
            console.log(res,"nameIsExist sql查询成功结果")
            if(res.length){ 
                let result = res[0];
                result.msg = "登录成功"
                resolve(result);
            }else{
                reject("账号或密码错误");
            }
        }).catch(error=>{
            console.log(error,"nameIsExist sql查询失败结果")
            reject(error)

        })
    }))
}