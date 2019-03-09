//项目中所有的请求接口都应该定义在这个文件中,其它组件中需要用到请求只需要导入

import axios from 'axios'
//设置根路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1'


export function fetch_login(params) {
  return axios.post("/login", params)
}
