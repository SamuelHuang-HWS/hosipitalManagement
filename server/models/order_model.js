var db = require("./db");

exports.sel_order_info =  function (info,callback) {
    console.log(info.id);
   var sql = `select * from order1 where o_id = ?`;
    db.query(sql,[info.id],callback);
}

exports.insert_order = function (info,callback) {
    var sql = 'insert into order1 (o_name,o_id,o_SInfo,o_CInfo,o_GInfo,o_Remarks,o_Type) values(?,?,?,?,?,?,?)';
    db.query(sql,[info.o_name,info.o_id,info.o_SInfo,info.o_CInfo,info.o_GInfo,info.o_Remarks,'F'],callback);
}

exports.delete_order = function (info,callback) {
    var sql = `delete from order1 where o_id = ?`;
    db.query(sql,[info.id],callback);
}

exports.sel_check_all = function(callback){
    var sql = `select * from order1 where o_Type = 'F'`
    db.query(sql,[],callback);
}

exports.sel_check_all1 = function(callback){
    var sql = `select * from order1 where o_Type = 'T'`
    db.query(sql,[],callback);
}

exports.sel_order_all = function(callback){
    var sql = `select * from order1`
    db.query(sql,[],callback);
}

exports.update_order = function(info,callback){
    var sql = `update order1 set o_name = ?,o_SInfo = ?,o_CInfo = ?,o_GInfo = ?,o_Remarks = ? where o_id = ?`
    db.query(sql,[info.name,info.SInfo,info.CInfo,info.GInfo,info.remarks,info.id],callback);
}


exports.check_order = function(info,callback){
    var sql = `update order1 set o_Type = 'T' where o_id = ?`
    db.query(sql,[info.id],callback);
}

exports.sel_return_all = function(callback){
    var sql = `select * from returngoods`
    db.query(sql,[],callback);
}

exports.return_goods = function (info,callback) {
    var sql = `delete from returngoods where r_id = ?`;
    db.query(sql,[info.r_id],callback);
}

exports.barter_goods = function(info,callback,){
    var sql = `update returngoods set r_type = '处理中' where r_id = ?`
    db.query(sql,[info.r_id],callback);
}




// exports.update_info = function (info, callback) {
//     // var sql = 
//     var str = [];
//     for (var item in info) {
//         str.push(item + '=' + info.item);
//     }
//     sql += `update warehouse set ` + str.join(',') + ` where w_id = ${info.w_id} `;
//     db.query(sql, [], callback);
// }