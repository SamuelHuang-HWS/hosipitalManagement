module.exports = {
    setCoolie: (ctx,name,value,)=>{
        ctx.cookies.set(name, value, {
                domain: 'localhost',
                path: '/',   //cookie写入的路径
                maxAge: 1000 * 60 * 60 * 1,
                expires: new Date('2021-07-06'),
                httpOnly: false,
                overwrite: false
            }
        );
        return ctx
    },
    checkoutCoolie: (ctx,name)=>{
        if(ctx.cookies.get(name)){
            return ctx.cookies.get(name)
        }else{
            return false
        }
    },
    clearCookie: ()=>{

    }
}