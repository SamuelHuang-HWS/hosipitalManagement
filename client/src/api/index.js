import axios from '../utils/axios'

function request (url,body) {
  let data = {
    body
  }
  return axios.request({
    url:url,
    data,
    method: 'post'
  })
}

export default request


