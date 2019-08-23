import http from './'
//角色
let model = 'api/role'
 //获取列表
export const list = (params)=> {
	return http('get',model,params)
}
//详情
export const view = (params)=> {
	return http('get',model+'/'+params)
}
//创建
export const create = (params) => {
	return http('post',model,params)
}
//更新
export const update = (params) => {
	return http('put',model+'/'+params.id,params)
}
//删除
export const del = (params) => {
	return http('delete',model+'/'+params)
}

