import React from 'react';
import { Button,Form,Radio,Input,message } from 'antd';
import api from '../../api'
const { Item } = Form;

@Form.create()
class Update extends React.Component {

	state={
		id:0,
	}
	componentWillMount(){
		this.setState({id:this.props.match.params.id})
	}
	componentDidMount(){
		api.user.view(this.state.id).then(res=>{
			res.data.status = String(res.data.status)
			//this.setState({data:res})
			this.props.form.setFieldsValue(res.data)
		})
	}
	handleSubmit = (e) => {
    	e.preventDefault();
    	this.props.form.validateFields((err, values) => {
	      if (!err) {
	      	values.id = this.state.id
	        api.user.update(values).then(res=>{
	        	message.success(res.data)
	        })
	      }
	    })
    }
  	render() {
  		const { getFieldDecorator } = this.props.form;
  		const formItemLayout = {
	      labelCol: { span: 6 },
	      wrapperCol: { span: 14 },
	    };
    	return (
    		<div>
        		<Form {...formItemLayout} onSubmit={this.handleSubmit}>
			        <Item label="用户名">
			          {getFieldDecorator('username',{rules:[{required:true,message:'请输入用户名'}]})(
			            <Input allowClear placeholder="用户名" />
			          )}
			        </Item>
			        <Item label="状态">
			          {getFieldDecorator('status')(
			            <Radio.Group>
			              <Radio.Button value="1">启用</Radio.Button>
			              <Radio.Button value="0">禁用</Radio.Button>
			            </Radio.Group>
			          )}
			        </Item>
			        <Item label="备注">
			          {getFieldDecorator('remark')(
			            <Input.TextArea rows={4} placeholder="请输入备注" />
			          )}
			        </Item>
			        <Item style={{textAlign:'center'}}>
			          <Button type="primary" htmlType="submit">保存</Button>
			        </Item>
			    </Form>
        	</div>
    	);
  	}
}

export default Update;