import React, { Component } from 'react';

class AddMovie extends Component{
	constructor(props){
		super(props);

		this.state = {
		title: '',
		director: '',
		year: '',
		actor: '',
		franchise: ''
		}
	}

	render(){
		const{ title, director, year, actor, franchise } = this.state;
		return(
			<div>
				<form>
					<input type="text" placeholder="Title" ref="title"/> <br/>
					<input type="text" placeholder="Director" ref="director"/> <br/>
					<input type="text" placeholder="Year" ref="year"/> <br/>
					<input type="text" placeholder="Actor" ref="actor"/> <br/>
		      <input type="text" placeholder="Franchise" ref="franchise"/> <br/>
					<input type="submit" value="Submit" onClick={this.handleClick}/>
				</form>
			</div>
		)
	}

}

export default AddMovie;
