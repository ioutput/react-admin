import http from './api'
//角色
let model = 'role'
export default {
  	/*获取列表*/
  	list (params) {
 		return http('get',model+'/index',params)
  	},
  	/*详情*/
  	view (params) {
 		return http('get',model+'/view?id='+params)
  	},
  	/*创建*/
  	create(params) {
 		return http('post',model+'/create',params)
  	},
  	/*更新*/
  	update (params) {
 		return http('put',model+'/update?id='+params.id,params)
  	},
  	/*删除*/
  	delete (params) {
 		return http('delete',model+'/delete',params)
  	},
}

