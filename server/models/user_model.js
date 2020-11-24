var db = require("./db");

exports.sel_all =  function (userinfo,callback) {
   var sql = `select * from user where u_id=${userinfo.userid} and u_password=${userinfo.password}`;
    db.query(sql,[],callback);
}