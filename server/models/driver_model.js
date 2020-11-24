var db = require("./db");

// //获取信息 传入ID 获取所有信息或单个信息  不传ID时默认获取所有信息
// exports.selete = function (id, callback) {
//     console.log(id);
//     var sql = `select * from businessman`;
//     if (id != '') {
//         sql += ` where b_phone=?`;
//         db.query(sql, [id], callback);
//     } else {
//         db.query(sql, [], callback);
//     }
// }

// //更新信息 传入 对应名字值，表名详见数据库
// exports.update = function (info, callback) {
//     // var sql = 
//     var str = [];
//     for (var item in info) {
//         str.push(item + '=' + info.item);
//     }
//     sql += `update businessman set ` + str.join(',') + ` where b_phone = ${info.w_id} `;
//     db.query(sql, [], callback);
// }

// // 删除某条 传入ID ID为必传项
// exports.delete = function (id, callback) {
//     // var sql = 
//     var sql = `delete from businessman where b_phone = ${id}`;
//     db.query(sql, [], callback);
// }

// //增加一条新信息  传入 对应名字值，表名详见数据库
// exports.insert = function (info, callback) {
//     // var sql = 
//     var name = [];
//     var result = [];
//     var a = [];
//     for (var item in info) {
//         name.push(item);
//         result.push(info.item);
//         a.push('?');
//     }
//     var sql = `insert into businessman (` + name.join(',') + `) values(`+a.join(',')+`) `;
//     db.query(sql, [...result], callback);
// } 



exports.insert = function (info,callback) {
    var sql = `insert into driver (d_name,d_phone) values(?,?) `;
    db.query(sql,[info.name,info.phone],callback);
}

exports.delete = function (info,callback) {
    var sql = `delete from driver where d_id = ?`;
    db.query(sql,[info.id],callback);
}

exports.select = function(callback){
    var sql = `select * from driver`
    db.query(sql,[],callback);
}

exports.update = function(info,callback){
    var sql = `update driver set d_name = ?,d_phone = ? where d_id = ?`
    db.query(sql,[info.name,info.phone,info.id],callback);
}

exports.run_start = function(info,callback){
    var sql = `update driver set d_state = '运输中' where d_id = ?`
    console.log(sql);
    
    db.query(sql,[info.d_id],callback);
}
