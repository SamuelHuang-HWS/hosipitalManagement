import axios from 'axios'
import axiosRetry from 'axios-retry'
import Cookie from '../utils/cookie'
import qs from "qs"
import {
    goLogin,
} from '@/utils/tools'

const baseUrl = process.env.VUE_APP_BASEURL;

class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
        this.queue = {}
    }

    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            timeout: 6000,
            withCredentials: true
        }
        return config
    }

    destroy(url) {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {
            // Spin.hide()
        }
    }

    interceptors(instance, url) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            //   var ticket = Cookie.getCookie("role");
            //   Cookie.setCookie("ticket",ticket);
            this.queue[url] = true
            return config
        }, error => {
            return Promise.reject(error)
        })

        // 响应拦截
        instance.interceptors.response.use(res => {
            this.destroy(url)
            let {
                data: result
            } = res
            if (result.code === '1023') { // 未登录
                goLogin() // 跳转到登录页
                return false
            } else if (result.code == '0000') { // 请求成功
                return result.data || result
            } else { // 请求失败
                return Promise.reject(result)
            }
        }, error => {
            this.destroy(url)
            return Promise.reject(error)
        })
    }

    request(options) {
        const instance = axios.create()
        // 请求失败重新请求
        axiosRetry(instance, {
            retries: 4, // 重新请求四次
            retryDelay: (retryCount) => { // 重新请求延迟
                return retryCount * 1000
            }
        })
        options = Object.assign(this.getInsideConfig(), options)
        options.params && (options.params._t = new Date().getTime())
        options.data && (options.data._t = new Date().getTime())
        // options.data.body && (options.data.body = JSON.stringify(options.data.body))
        // options.data && (options.data = qs.stringify(options.data))
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

export default new HttpRequest(baseUrl)