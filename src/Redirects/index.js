import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	withRouter,
	Redirect
} from 'react-router-dom';

import Login from './Login.js';

class Redirects extends React.Component {
	constructor(props) {
		super(props);
		this.dispalyName = 'Redirects';
		this.state = {
			isAuthenticated: false
		}
	}

	//验证登录函数，模拟费时100ms的登录操作
	authenticate(cb) {
		this.setState({
			isAuthenticated: true
		});
		setTimeout(cb, 100);
	}

	//注销退出函数
	signout(cb) {
		this.setState({
			isAuthenticated: false
		});
		setTimeout(cb, 100);
	}

	render() {
		return (
			<Router>
				<div className="exampleContent">
					<AuthButton
						{...this.props}
						isAuthenticated={this.state.isAuthenticated}
						signout = {() => {this.signout(() => { this.props.history.push("/redirects") })}}
					/>
					<ul>
						<li>
							<Link to="/redirects/public">Public</Link>
						</li>
						<li>
							<Link to="/redirects/protected">Protected Page</Link>
						</li>
					</ul>

					<Route path="/redirects/public" component={Public}></Route>
					<Route path="/redirects/login" render={(props) => {
						return <Login {...props} authenticate={() => {this.authenticate(() => {
							props.history.push('/redirects/protected');
						})}}></Login>
					}}></Route>
					<PrivateRoute
						path="/redirects/protected"
						component={Protected}
						isAuthenticated={this.state.isAuthenticated}
					></PrivateRoute>
				</div>
			</Router>
		)
	}
}

//AuthButton组件
const AuthButton = withRouter((props) => (
	props.isAuthenticated ? (
		<p>
			Welcome! <button onClick={() => {
				props.signout()
			}}>注销</button>
		</p>
	) : (
		<p>您还未登录</p>
	)
))

//PrivateRoute组件
const PrivateRoute = (topProps) => {
	return (<Route
		exact
		path={`${topProps.path}`}
		render={(props) => {
			return (topProps.isAuthenticated ? (
				<Protected />
			) : (
				<Redirect to={{
					pathname: '/redirects/login',
					state: { 
						from: props.location
					}
				}} />
			)
		)}}
	></Route>
)}

const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

export default Redirects;