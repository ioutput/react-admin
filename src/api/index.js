import http from './api'

export default {
 	async login (params) {
 		let data = await http('post','user/login',params)
 		return data
  	},
  	/*获取用户列表*/
  	async getUser (params) {
 		let data = await http('get','user/index',params)
 		return data
  	},
}

