import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

//每一个逻辑路由有两个组件，
//一个在Sidebar中，另一个是主内容区域
//当路由匹配时同时在渲染这两个组件
const routers = [
	{
		path: '/sidebar',
		exact: true,
		sidebar: () => (<div>home!</div>),
		main: () => (<h2>Home</h2>)
	}, {
		path: '/sidebar/bubblegum',
		sidebar: () => (<div>bubblegum!</div>),
		main: () => (<h2>Bubblegum</h2>)
	}, {
		path: '/sidebar/shoelcaes',
		sidebar: () => (<div>shoelaces!</div>),
		main: () => (<h2>Shoelaces</h2>)
	}
];

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.displayName="Sidebar";
	}

	render() {
		return (
			<Router>
				<div className="exampleContent" style={{ display: 'flex' }}>
					<div style={{
						padding: '10px',
						width: '40%',
						background: '#f0f0f0'
					}}>
						<ul style={{
							listStyleType: 'none',
							padding: 0
						}}>
							<li>
								<Link to="/sidebar">Home</Link>
							</li>
							<li>
								<Link to="/sidebar/bubblegum">Bubblegum</Link>
							</li>
							<li>
								<Link to="/sidebar/shoelcaes">Shoelcaes</Link>
							</li>
						</ul>
						{
							routers.map((route, index) => (
								//可以在你的app内部任意位置渲染Route组件，
								//它会与其他任何匹配路由的Route组件一同渲染
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									component={route.sidebar}
								></Route>
							))
						}
					</div>
					
					<div style={{
						flex: 1, padding: '10px'
					}}>
						{
							routers.map((route, index) => (
								//对同一个路由在不同的地方渲染多个Route组件
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									component={route.main}
								></Route>
							))
						}
					</div>
				</div>
			</Router>
		);
	}
}

export default Sidebar;