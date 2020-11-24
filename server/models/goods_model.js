var db = require("./db");

//获取信息 传入ID 获取所有信息或单个信息  不传ID时默认获取所有信息
exports.get_info = function (id, callback) {
    console.log(id);
    var sql = `select * from goods`;
    if (id.id != '') {
        sql += ` where g_id=?`;
        db.query(sql, [id.id], callback);
    } else {
        db.query(sql, [], callback);
    }
}

//更新信息 传入 对应名字值，表名详见数据库
// exports.update = function (info, callback) {
//     var sql = "";
//     var str = [];
//     for (var item in info) {
//         if(item !='g_id'){
//             str.push(item + '=' + info[item]);
//         }

//     }
//     console.log(str);
    
//      sql += `update goods set ` + str.join(',') + ` where g_id = ? `;
//     db.query(sql, [info.g_id], callback);
// }

// 删除某条 传入ID ID为必传项
exports.Delete = function (id, callback) {
    // var sql = 
    console.log(id.id);

    var sql = `delete from goods where g_id ='${id.id}'`;
    db.query(sql, [], callback);
}

//增加一条新信息  传入 对应名字值，表名详见数据库

exports.update = function(info,callback){
    var sql = `update goods set g_name = ?,g_type = ?,g_type = ?,g_Mdate = ?,g_much = ?,g_address=?,g_Tphone=?,g_warehouse=?,g_remarks=? where g_id = ?`
    db.query(sql,[info.g_name,info.g_type,info.g_type,info.g_Mdate,info.g_much,info.g_address,info.g_Tphone,info.g_warehouse,info.g_remarks,info.g_id],callback);
}

exports.buy_house = function(info,callback){
    var sql = `update goods set g_much = ? where g_id = ?`
    db.query(sql,[info.g_much,info.g_id],callback);
}
exports.insert_ware = function (info,callback) {
    var sql = `insert into warehouse (g_name,g_type,g_pice,g_Mdate,g_much,g_address,g_Tphone,g_warehouse,g_remarks) values(?,?,?,?,?,?,?,?,?) `;
    db.query(sql,[info.g_name,info.g_type,info.g_pice,info.g_Mdate,info.g_much,info.g_address,info.g_Tphone,info.g_warehouse,info.g_remarks],callback);
}