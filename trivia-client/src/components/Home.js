import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
	render(){
		return(
			<div className="homeContent">
				<h2>select category</h2>
				<input class="form-control form-control-lg" type="text" placeholder="Enter Name" id="name"></input>
				<button id="start" type="button" class="btn btn-success btn-lg">Start Game</button>

				<div className="category">
					MATHHH
				</div>
				<div className="category1">
					MATHHH
				</div>
			</div>
		)
	}
}

export default Home;
