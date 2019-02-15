import React, { Component } from 'react'
import Link from 'react-router-dom'
import './Body.css'

class LogIn extends Component {

  constructor(props) {
    super(props)
    this.routeChange = this.routeChange.bind(this);
  }
  
  routeChange(){
    let path = `./traffic`
    //let path = `./menu`
    this.props.history.push(path);
  }
  render() {
    return (
      // <div className="LogIn">
      //   <div className="header">
      //       <a>Login</a>
      //   </div>

        <div className="body">
        
        <a>Login</a>
        
          <form><input placeholder="username" /></form>
          <form><input placeholder="password" /></form>
          <form>< button onClick={this.routeChange}> Log In </ button></form>

        </div>
      //  </div>
    )
  }


}

export default LogIn