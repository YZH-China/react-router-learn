import React, { Component } from 'react';
import {
		BrowserRouter as Router,
		Route,
		Link
} from 'react-router-dom';

class CustomLink extends Component {
	constructor(props) {
		super(props);
		this.displayName = 'CustomLink';
	}

	render() {
		return (
			<Router>
				<div className="exampleContent">
					<OldSchoolMenuLink activeOnlyWhenExact={true} to="/customlink" label="Home" />
					<OldSchoolMenuLink to="/customlink/about" label="About" />
					<hr/>
					<Route exact path="/customlink" component={Home}></Route>
					<Route path="/customlink/about" component={About}></Route>
				</div>
			</Router>
		);
	}
}

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div className={match ? 'active' : ''}>
      {match ? '> ' : ''}<Link to={to}>{label}</Link>
    </div>
  )}/>
)

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
)

const About = () => (
	<div>
		<h2>About</h2>
	</div>
)

export default CustomLink;