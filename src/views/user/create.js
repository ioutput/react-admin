import React from 'react';
import { Button,Form,Radio,Input,message } from 'antd';
import { create } from '../../api/user'
const { Item } = Form;

@Form.create()
class Create extends React.Component {

	
	
	handleSubmit = (e) => {
    	e.preventDefault();
    	this.props.form.validateFields((err, values) => {
	      if (!err) {
	        create(values).then(res=>{
				if(res.status ===200){
					message.success(res.msg)
					this.props.setCreateState(false)
					this.props.list()
				}else{
					message.error(res.msg)
				}
	        	
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
			        <Item label="密码">
			          {getFieldDecorator('password',{rules:[{required:true,message:'请输入密码'}]})(
			            <Input allowClear type="password" placeholder="密码" />
			          )}
			        </Item>
			        <Item label="状态">
			          {getFieldDecorator('status',{initialValue:'1'})(
			            <Radio.Group>
			              <Radio.Button value="1">启用</Radio.Button>
			              <Radio.Button value="0">禁用</Radio.Button>
			            </Radio.Group>
			          )}
			        </Item>
			        <Item label="备注">
			          {getFieldDecorator('descs')(
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

export default Create;