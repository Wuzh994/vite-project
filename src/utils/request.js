import axios from 'axios'

// 创建实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 9999
})

// 请求拦截
service.interceptors.request.use(config => {
  // TODO
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(response => {
  const res = response.data
  // TODO
  return res
}, error => {
  return Promise.reject(error)
})

export default service
