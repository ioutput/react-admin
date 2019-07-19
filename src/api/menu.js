import http from './api'
//菜单
let model = 'api/menu'
export default {
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
	  /*等级菜单*/
  	levelmenu () {
		return http('get','api/levelmenu')
  	},
}

