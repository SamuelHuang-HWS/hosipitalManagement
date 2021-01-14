const fs = require("fs");
const path = require("path");

module.exports = {
    // 切割文件后缀名
    splitFileName: (text) => {
        let index = text.lastIndexOf(".");
        return {
            name: text.substring(0, index),
            suffix: text.substring(index + 1)
        };
    },
    // 递归创建目录
    mkdirsSync: (dirname) => {
        if (fs.existsSync(dirname)) {
            return true;
        } else {
            if (utils.mkdirsSync(path.dirname(dirname))) {
                fs.mkdirSync(dirname);
                return true;
            }
        }
    }
}