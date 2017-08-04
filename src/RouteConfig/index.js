import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

/**
 * 有些人喜欢将路由集中配置。
 * 路由配置仅仅是配置数据。
 * react很擅长将数据和component映射起来。
 */

//首先定义基础组件
const Main = () => (<h2>Main</h2>)
const Sandwiches = () => (<h2>Sandwiches</h2>)
const Bus = () => (<h3>Bus</h3>)
const Cart = () => (<h3>Cart</h3>)
//定义子级路由组件
const Tacos = ({ routers }) => (
	<div>
		<h2>Tacos</h2>
		<ul>
			<li>
				<Link to="/routeConfig/tacos/bus">Bus</Link>
			</li>
			<li>
				<Link to="/routeConfig/tacos/cart">Cart</Link>
			</li>
		</ul>
		{
			routers.map((route, index) => (
				<RouteWithSubRoutes key={index} {...route}></RouteWithSubRoutes>
			))
		}
	</div>
)
//定义带自路由的路由组件
const RouteWithSubRoutes = (route) => (
	<Route path={route.path} render={(props) => (
		<route.component {...props} routers={route.routers} />
	)}></Route>
)

//集中配置路由
const routers = [
	{
		path: '/routeConfig/sandwiches',
		component: Sandwiches
	}, {
		path: '/routeConfig/tacos',
		component: Tacos,
		routers: [
			{
				path: '/routeConfig/tacos/bus',
				component: Bus
			}, {
				path: '/routeConfig/tacos/cart',
				component: Cart
			}
		]
	}
]

class RouteConfig extends Component {
	constructor(props) {
		super(props);
		this.displayName="RouteConfig";
	}

	render() {
		return (
			<Router>
				<div className="exampleContent">
					<ul>
						<li>
							<Link to="/routeConfig/tacos">Tacos</Link>
						</li>
						<li>
							<Link to="/routeConfig/sandwiches">Sandwiches</Link>
						</li>
					</ul>
					{
						routers.map((route, index) => (
							<RouteWithSubRoutes {...route} key={index} />
						))
					}
				</div>
			</Router>
		);
	}
}

export default RouteConfig;