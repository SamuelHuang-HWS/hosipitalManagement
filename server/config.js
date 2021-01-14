module.exports = {
    // 服务器配置
    SERVICE:{
        HOST:"localhost",
        PORT:"3000"
    },
    // 数据库连接配置
    DATABASE:{
        HOST: 'localhost',
        USER: 'examsys',
        PASSWORD: 'examsys',
        DATABASE: 'hospitalmanege',
        CONNECTION_LIMIT: 10
    },
    // 接口地址配置
    API:{
        // 项目接口前缀
        PROJECT_INTERFACE_PREFIX:'/hospital',
    },
    // 路径配置
    PATH:{
        UPLOAD_PATH:"public/upload"
    },
    // 限制条件配置
    LIMIT:{
        UPLOAD_IMG_SIZE:200*1024*1024
    }
 
};