import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect
} from 'react-router-dom';

class AnimationTransitions extends Component {
	constructor(props) {
		super(props);
		this.displayName = 'AnimationTransitions';
	}

	render() {
		return (
			<Router>
				<Route render={({location}) => (
					<div className="exampleContent">
						<div style={styles.fill}>
							<Route exact path="/animationTransitions" render={() => (
								<Redirect to="/animationTransitions/10/90/50"></Redirect>
							)}></Route>

							<ul style={ styles.nav }>
								<NavLink to="/animationTransitions/10/90/50">Red</NavLink>
								<NavLink to="/animationTransitions/120/100/40">Green</NavLink>
								<NavLink to="/animationTransitions/200/100/40">Blue</NavLink>
								<NavLink to="/animationTransitions/310/100/50">Pink</NavLink>
							</ul>

							<div style={styles.content}>
								<Transition
									transitionName="fade"
									timeout={300}
								>
									{
										/* 与其他使用CSSTransitionGroup组件的方法一样
											 但要确保传入了'location'给'Route'组件
											 这样可以匹配路由
										*/
									}
									<Route
										location={location}
										key={location.key}
										path="/animationTransitions/:h/:s/:l"
										component={HSL}
									/>
								</Transition>
							</div>
						</div>
					</div>
				)}></Route>
			</Router>
		);
	}
}

const NavLink = (props) => (
  <li style={styles.navItem}>
    <Link {...props} style={{ color: 'inherit' }}/>
  </li>
)

const HSL = ({ match: { params } }) => (
  <div style={{
    ...styles.fill,
    ...styles.hsl,
    background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
  }}>hsl({params.h}, {params.s}%, {params.l}%)</div>
)

const styles = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

styles.content = {
  ...styles.fill,
  top: '40px',
  textAlign: 'center'
}

styles.nav = {
  padding: 0,
  margin: 0,
  position: 'absolute',
  top: 0,
  height: '40px',
  width: '100%',
  display: 'flex'
}

styles.navItem = {
  textAlign: 'center',
  flex: 1,
  listStyleType: 'none',
  padding: '10px'
}

styles.hsl  = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
}


export default AnimationTransitions;