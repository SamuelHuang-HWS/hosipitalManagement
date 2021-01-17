import request from "./index";

// 登录-登录验证
export function loginCheck(body) {
    return request('/login/loginCheck', body);
}

// 登录-根据身份获取相应路由权限
export function loginRoleInfo(body) {
    return request('/login/loginRoleInfo', body);
}
