// uploadfile.js
const tableName = "upload_file";
module.exports = {
    uploadFile:(ctx,postData)=>{
        return ctx.execSql(`insert into ${tableName} values (?,?,?)`, [null,postData.url, postData.fileName]);
    },
    getAllFiles:(ctx)=>{
        return ctx.execSql(`select * from ${tableName}`);
    }
};