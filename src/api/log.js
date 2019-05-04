import http from './api'
//日志
let model = 'log'
export default {
  	/*获取列表*/
  	list (params) {
 		return http('get',model+'/index',params)
  	},
}

