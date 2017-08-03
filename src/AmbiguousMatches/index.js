import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';

class AmbigousExample extends Component {
	constructor(props) {
		super(props);
		this.displayName="AmbigousExample";
	}

	render() {
		return (
			<Router>
				<div className="exampleContent">
					<ul>
						<li>
							<Link to="/ambigousExample/about">About Us(static)</Link>
						</li>
						<li>
							<Link to="/ambigousExample/company">Company(stataic)</Link>
						</li>
						<li>
							<Link to="/ambigousExample/kim" >Kim (dynamic)</Link>
						</li>
						<li>
							<Link to="/ambigousExample/chris" >Chris (dynamic)</Link>
						</li>
					</ul>
					{
						/**
						 * 有时我们希望有个固定路由白名单，比如：/about、/company
						 * 同时又能使用动态路由/:user。
						 * 问题就在于/about也会匹配/:user，
						 * 所以，当我们需要模糊匹配但又要"/about"不匹配"/:user"，
						 * 可以将Route组件包裹在Swtich组件中，只渲染第一个匹配的Route
						 */
					}
						<Switch>
							<Route path="/ambigousExample/about" component={About}></Route>
							<Route path="/ambigousExample/company" component={Company}></Route>
							<Route path="/ambigousExample/:user" component={User}></Route>
						</Switch>
				</div>
			</Router>
		);
	}
}

const About = () => (
	<h2>About</h2>
)

const Company = () => (
	<h2>Company</h2>
) 

const User = ({ match }) => (
	<div>
		<h2>User:{ match.params.user }</h2>
	</div>
)

export default AmbigousExample;