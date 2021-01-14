module.exports = {
     // 错误JSON
 resultErrorJson:(code=-1,message="失败",data={})=>{
    return {
        code:code,
        data:data,
        message:message
    }
},
// 成功JSON
resultSuccessJson:(code=0,message="成功",data={})=>{
    return {
        code:code,
        data:data,
        message:message
    }
},
}