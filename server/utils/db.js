const mysql = require('mysql');
const config = require("../config");

const db = config.DATABASE; 
const pool = mysql.createPool({
    host: db.HOST,
    user: db.USER,
    password: db.PASSWORD,
    database: db.DATABASE,
    connectionLimit: db.CONNECTION_LIMIT
});
const database = {
    // 数据库查询方法
    query: (sql, values) => {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    return reject(err);
                } else {
                    connection.query(sql, values, (err, rows) => {
                        connection.release();
                        if (err) {
                            return reject(err)
                        } else {
                            return resolve(rows);
                        }
                    })
                }
            })
        });
    },
};
module.exports = database;