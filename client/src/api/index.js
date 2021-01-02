import axios from '../utils/axios'

function request (url,body) {
  let data = {
    body
  }
  return axios.request({
    url:url,
    data: data,
    method: 'post'
  })
}
// 注册-姓名重复验证
export function nameIsExist(body) {
  return request('/registered/nameIsExist', body);
}

