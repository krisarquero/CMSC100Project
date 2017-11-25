import React, { Component } from 'react';
import {
  	Segment,
		Form,
		Input,
		TextArea,
		Button
} from "semantic-ui-react";

class AddQuestion extends Component {
	render(){
		return(
			<Segment basic>
				<Segment>
					<Form>
						<Form.Group widths='equal'>
							<Form.Field control={Input} label='Category' placeholder='Category' />
						</Form.Group>
						<Form.Field control={TextArea} label='Question' placeholder='Question' />
						<Form.Field control={Input} label='Answer' placeholder='Answer' />
						<Form.Field id='form-button-control-public' control={Button} content='Add' />
					</Form>
				</Segment>
			</Segment>
		)
	}
}

export default AddQuestion;
