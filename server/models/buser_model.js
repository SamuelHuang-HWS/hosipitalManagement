var db = require("./db");

//获取信息 传入ID 获取所有信息或单个信息  不传ID时默认获取所有信息
exports.selete = function (id, callback) {
    console.log(id);
    var sql = `select * from buser`;
    if (id != '') {
        sql += ` where bus_id=?`;
        db.query(sql, [id], callback);
    } else {
        db.query(sql, [], callback);
    }
}

//更新信息 传入 对应名字值，表名详见数据库
exports.update = function (info, callback) {
    // var sql = 
    var str = [];
    for (var item in info) {
        str.push(item + '=' + info.item);
    }
    sql += `update buser set ` + str.join(',') + ` where bus_id = ${info.w_id} `;
    db.query(sql, [], callback);
}

// 删除某条 传入ID ID为必传项
exports.delete = function (id, callback) {
    // var sql = 
    var sql = `delete from buser where bus_id = ${id}`;
    db.query(sql, [], callback);
}

//增加一条新信息  传入 对应名字值，表名详见数据库
exports.insert = function (info, callback) {
    // var sql = 
    var name = [];
    var result = [];
    var a = [];
    for (var item in info) {
        name.push(item);
        result.push(info.item);
        a.push('?');
    }
    var sql = `insert into buser (` + name.join(',') + `) values(`+a.join(',')+`) `;
    db.query(sql, [...result], callback);
} 