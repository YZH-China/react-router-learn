import React, { Component } from 'react';
import {
  BrowserRouter  as Router,
  Route,
  Link
} from 'react-router-dom';
import './Basic.css';

/**
 * 引入内容组件
 */
import URLParameters from '../URLParameters';
import Redirects from '../Redirects';
import CustomLink from '../CustomLink';
import PreventingTransitions from '../PreventingTransitions';
import NoMatch from '../NoMatch';
import RecursivePath from '../RecursivePath';
import Sidebar from '../Sidebar';
import AnimationTransitions from '../AnimatedTransitions';
import AmbigousExample from '../AmbiguousMatches';
import RouteConfig from '../RouteConfig';
import ModalGallery from '../ModalGallery';

class Basic extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="navbar">
            <li>
              <Link to="/urlparameters">URL Parameters</Link>
            </li>
            <li>
              <Link to="/redirects">Redirects</Link>
            </li>
            <li>
              <Link to="/customlink">CustomLink</Link>
            </li>
            <li>
              <Link to="/preventingTransitions">PreventingTransitions</Link>
            </li>
            <li>
              <Link to="/noMatch">NoMatch</Link>
            </li>
            <li>
              <Link to="/recursivePath">RecursivePath</Link>
            </li>
            <li>
              <Link to="/sidebar">Sidebar</Link>
            </li>
            <li>
              <Link to="/animationTransitions">AnimationTransitions</Link>
            </li>
            <li>
              <Link to="/ambigousExample">AmbigousExample</Link>
            </li>
            <li>
              <Link to="/routeConfig">RouteConfig</Link>
            </li>
            <li>
              <Link to="/modalGallery">ModalGallery</Link>
            </li>
          </ul>

          <Route path="/urlparameters" component={URLParameters}></Route>
          <Route path="/redirects" component={Redirects}></Route>
          <Route path="/customlink" component={CustomLink}></Route>
          <Route path="/preventingTransitions" component={PreventingTransitions}></Route>
          <Route path="/noMatch" component={NoMatch}></Route>
          <Route path="/recursivePath" component={RecursivePath}></Route>
          <Route path="/sidebar" component={Sidebar}></Route>
          <Route path="/animationTransitions" component={AnimationTransitions}></Route>
          <Route path="/ambigousExample" component={AmbigousExample}></Route>
          <Route path="/routeConfig" component={RouteConfig}></Route>
          <Route path="/modalGallery" component={ModalGallery}></Route>
        </div>
      </Router>
    );
  }
}

export default Basic;