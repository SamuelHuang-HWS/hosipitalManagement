var db = require("./db");

exports.sel_ware_info =  function (info,callback) {
    console.log(info.id);
   var sql = `select * from warehouse where w_id = ?`;
    db.query(sql,[info.id],callback);
}

exports.insert_ware = function (info,callback) {
    var sql = `insert into warehouse (w_aid,w_content,w_remarks,w_snumber) values(?,?,?,?) `;
    db.query(sql,[info.aid,info.content,info.remarks,info.snumber],callback);
}

exports.delete_ware = function (info,callback) {
    var sql = `delete from warehouse where w_id = ?`;
    db.query(sql,[info.id],callback);
}

exports.sel_ware_all = function(callback){
    var sql = `select * from warehouse`
    db.query(sql,[],callback);
}

exports.update_ware = function(info,callback){
    var sql = `update warehouse set w_aid = ?,w_content = ?,w_remarks = ?,w_snumber = ? where w_id = ?`
    db.query(sql,[info.aid,info.content,info.remarks,info.snumber,info.id],callback);
}

exports.get_user = function(callback){
    var sql = `select * from user`
    db.query(sql,[],callback);
}
