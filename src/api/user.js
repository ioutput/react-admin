import http from './api'
//用户
let model = 'user'
export default {
 	  login (params) {
 		return http('post','/login',params)
  	},
  	/*获取列表*/
  	list (params) {
 		return http('get',model,params)
  	},
  	/*详情*/
  	view (params) {
 		return http('get',model+'/'+params)
  	},
  	/*创建*/
  	create(params) {
 		return http('post',model,params)
  	},
  	/*更新*/
  	update (params) {
 		return http('put',model+'/'+params.id,params)
  	},
  	/*删除*/
  	delete (params) {
 		return http('delete',model+'/'+params)
  	},
}

