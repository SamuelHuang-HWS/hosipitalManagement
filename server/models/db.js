var mysql = require('mysql');
var pool = mysql.createPool({
    // connectionLimit: 10,
    host: 'localhost',
    user: 'examsys',
    password: 'examsys',
    database: 'ims'
});

//处理业务
exports.query  =  function(sql,params,callback){
    pool.getConnection(function (err, connection) {
        // console.log(connection);
        if (err) throw err;
        connection.query(sql, params,function (error, results, fields) {
            //释放资源
            connection.release();
            if (error) throw error;
            callback(error,results);
        });
    });
}