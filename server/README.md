## 服务端

### 项目结构

* app.js -- 入口文件

* models文件夹 -- 数据访问层，用来连接数据库，通过sql语句返回数据供service层使用

* service文件夹 -- 业务服务层，执行业务逻辑并通过models层获取数据，提供给controller层使用

* router文件夹 -- 路由层，编写接口调用controller层

* controller文件夹 -- 控制层，具体的接口

* public文件夹 -- 资源存放

* config.js -- 公共配置文件


