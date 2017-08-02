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
          </ul>

          <Route path="/urlparameters" component={URLParameters}></Route>
          <Route path="/redirects" component={Redirects}></Route>
        </div>
      </Router>
    );
  }
}

export default Basic;