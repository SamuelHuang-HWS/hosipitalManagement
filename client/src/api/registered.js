import request from "./index";

// 注册-姓名重复验证
export function nameIsExist(body) {
    return request('/registered/nameIsExist', body);
}

// 注册-管理员注册
export function adminRegistered(body) {
    return request('/registered/adminRegistered', body);
}