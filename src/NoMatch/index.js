import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom';

class NoMatch extends Component {
	constructor(props) {
		super(props);
		this.displayName="NoMatch";
	}

	render() {
		return (
			<Router>
				<div className="exampleContent">
					<ul>
						<li>
							<Link to="/nomatch">Home</Link>
						</li>
						<li>
							<Link to="/nomatch/old-match">Old Match, to be redirected</Link>
						</li>
						<li>
							<Link to="/nomatch/will-match">Will Match</Link>
						</li>
						<li>
							<Link to="/nomatch/will-not-match">Will Not Match</Link>
						</li>
						<li>
							<Link to="/nomatch/also/will/not/match">Also Will Not Match</Link>
						</li>
					</ul>
					<Switch>
						<Route exact path="/nomatch" component={Home}></Route>
						<Redirect from="/nomatch/old-match" to="/nomatch/will-match"></Redirect>
						<Route path="/nomatch/will-match" component={WillMatch}></Route>
						<Route component={NotMatch}></Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

const Home = () => (
	<p>
		Switch组件会只渲染内部第一个匹配的Route，没有path的Route总是被匹配
	</p>
)

const WillMatch = () => (
	<h3>Matched!</h3>
)

const NotMatch = ({location}) => (
	<div>
		<h3>No Match for <code>{location.pathname}</code></h3>
	</div>
)

export default NoMatch;