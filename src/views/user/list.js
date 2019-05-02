import React from 'react';
import { Table } from 'antd';
import {Link,withRouter} from 'react-router-dom'
import api from '../../api'

@withRouter
class List extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			dataSource:[],
			pagination:{
				current:1,
				pageSize:10,
				total:0,
				showTotal:(total)=>'共'+total+'条',
				pageSizeOptions:['10','20','30','40'],
				showQuickJumper:true,
            	showSizeChanger:true,
            	onShowSizeChange:(page,size)=>{this.handleChange(page,size)},
            	onChange:(page,size)=>{console.log(size);this.handleChange(page,size)},
			}
		}
	}
	componentDidMount(){
		this.list()
	}
	list(){
		api.getUser({page:this.state.pagination.current,page_size:this.state.pagination.pageSize}).then(res=>{
			this.setState({dataSource:res.data,pagination:{total:res.total_count}})
		})
	}
	handleChange(page,size){
      this.setState({pagination:{current:page,pageSize:size}})
      this.list()
    }
  render() {
  	let {dataSource,pagination} = this.state
  	const columns = [
	  { title: '序号', dataIndex: 'id',align:'center' },
	  { title: '用户名', dataIndex: 'username',align:'center' },
	  { title: '状态', dataIndex: 'status',align:'center' },
	  {
	    title: '操作', dataIndex: '', render: () => <a href="javascript:;">删除</a>,
	  },
	];
    return (
    	<div>
        	<Table dataSource={dataSource} columns={columns}  rowKey={'id'} pagination={pagination} />
        </div>
    );
  }
}
export default List;
