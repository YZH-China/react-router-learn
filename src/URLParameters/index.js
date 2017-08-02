import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

class URLParameters extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'RUL Parameters';
	}

	render() {
		const { match } = this.props;

		return (
			<Router>
				<div className="exampleContent">
					<h2>Accounts</h2>
					<ul>
						<li>
							<Link to={`${match.url}/netflix`}>Netflix</Link>
						</li>
						<li>
							<Link to={`${match.url}/zillow-group`}>zillow Group</Link>
						</li>
						<li>
							<Link to={`${match.url}/yahoo`}>Yahoo</Link>
						</li>
						<li>
							<Link to={`${match.url}/modus-create`}>Modus Create</Link>
						</li>
					</ul>

					<Route path={`${match.url}/:id`} component={Child}></Route>
				</div>
			</Router>
		)
	}
}

/**
 * 定义子组件
 * 终点在于匹配的模块中可以用match.params.xxx的形式取得路由中的参数
 */
const Child = ({match}) => (
	<div>
		<h3>ID:{`${match.params.id}`}</h3>
	</div>
)

export default URLParameters;