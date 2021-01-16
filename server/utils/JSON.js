module.exports = {
     // 错误JSON
 resultErrorJson:(code='0001',message="失败")=>{
    return {
        code:code,
        message:message
    }
},
// 成功JSON
resultSuccessJson:(code='0000',message="成功",data={})=>{
    return {
        code:code,
        data:data,
        message:message
    }
},
}