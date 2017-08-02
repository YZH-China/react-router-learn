import React, { Component } from 'react';
import {
  Redirect
} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'Login';
    this.state = {
      redirectToReferrer: false
    }
  };
  
  render() {
    const { authenticate, history } = this.props; 
    const { from } = this.props.location.state || {
      from: {
        pathname: '/redirects'
      }
    };
    const { redirectToReferrer } = this.state

    if(redirectToReferrer){
      return ( <Redirect to={from} /> )
    }

    return (
      <div>
          <p>You must log in to view the page at {from.pathname}</p>
          <button onClick={() => {authenticate()}}>Log in</button>
      </div>
    );
  }
}

export default Login;