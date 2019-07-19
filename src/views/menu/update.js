import React from 'react';
import { message } from 'antd';
import api from '../../api'
import Forms from './form'

class Update extends React.Component {

	state={
		id:0,
	}
	componentWillMount(){
		this.setState({id:this.props.match.params.id})
	}
	submit = (data) => {
	      	data.id = this.state.id
	        api.menu.update(data).then(res=>{
	        	message.success(res.data)
	        })
    }
  	render() {
  		const { id } = this.state;
    	return (
    		<div>
    			<Forms id={id} submit={param=>{this.submit(param)}} />
        		
        	</div>
    	);
  	}
}

export default Update;