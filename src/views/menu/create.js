import React from 'react';
import { message } from 'antd';
import api from '../../api'
import Forms from './form'

class Create extends React.Component {

	submit = (data) => {
	        api.menu.create(data).then(res=>{
	        	message.success(res.msg)
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