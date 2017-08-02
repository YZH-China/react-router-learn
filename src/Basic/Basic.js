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
          </ul>

          <Route path="/urlparameters" component={URLParameters}></Route>
          <Route path="/redirects" component={Redirects}></Route>
          <Route path="/customlink" component={CustomLink}></Route>
          <Route path="/preventingTransitions" component={PreventingTransitions}></Route>
        </div>
      </Router>
    );
  }
}

export default Basic;