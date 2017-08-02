import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import Form from './Form';

class PreventingTransitions extends Component {
	constructor(props) {
		super(props);
		this.displayName="PreventingTransitions";
	}

	render() {
		return (
			<Router>
				<div className="exampleContent">
					<ul>
						<li>
							<Link to="/preventingTransitions/form">Form</Link>
						</li>
						<li>
							<Link to="/preventingTransitions/one">One</Link>
						</li>
						<li>
							<Link to="/preventingTransitions/two">Two</Link>
						</li>
					</ul>
					<Route path="/preventingTransitions/form" exact component={Form}></Route>
					<Route path="/preventingTransitions/one" render={() => (
						<h3>One</h3>
					)}></Route>
					<Route path="/preventingTransitions/two" render={() => (
						<h3>Two</h3>
					)}></Route>
				</div>
			</Router>
		);
	}
}

export default PreventingTransitions;