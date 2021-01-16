const db = require("../utils/db");


exports.nameIsExist =  async (params) => {
    return new Promise(((resolve, reject) => {
        db.query('select * from admin where admin_name = ?',[params.admin_name]).then(res=>{
            console.log(res,"nameIsExist sql查询成功结果")
            if(res.length){
                reject("名称已存在")
            }else{
                resolve("名称可用")
            }
        }).catch(error=>{
            console.log(error,"nameIsExist sql查询失败结果")
            reject(error)

        })
    }))
}

exports.adminRegistered =  async (params) => {
    return new Promise(((resolve, reject) => {
        db.query('insert into admin (admin_name,admin_password,admin_role) values(?,?,0)',[params.name,params.pass]).then(res=>{
            console.log(res,"adminRegistered sql成功结果");
            resolve(res);
        }).catch(error=>{
            console.log(error,"adminRegistered sql失败结果");
            reject(error)

        })
    }))
}

