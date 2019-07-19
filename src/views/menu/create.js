import React from 'react';
import { message } from 'antd';
import api from '../../api'
import Forms from './form'

class Create extends React.Component {

	submit = (data) => {
	        api.menu.create(data).then(res=>{
				if(res.status ===200){
					message.success(res.data)
					this.props.setCreateState(false)
					this.props.list()
				}else{
					message.error(res.data)
				}
	        		
	        })
    }
  	render() {
    	return (
    		<div>
    			<Forms  submit={param=>{this.submit(param)}} />
        		
        	</div>
    	);
  	}
}

export default Create;