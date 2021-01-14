const db = require("../utils/db");


exports.nameIsExist =  async (params) => {
    return new Promise(((resolve, reject) => {
        db.query('select * from admin where admin_name = ?',[params.admin_name]).then(res=>{
            console.log(res,"nameIsExist sql查询成功结果")
            resolve(res)
        }).catch(error=>{
            console.log(error,"nameIsExist sql查询失败结果")
            reject(error)

        })
    }))
}

