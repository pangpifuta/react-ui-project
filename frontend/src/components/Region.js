import React, { Component } from 'react'
import Link from 'react-router-dom'
import './Body.css'
//import { Container, Row, Col } from 'react-bootstrap/lib/Grid';

/*
let logout = {
  color:'blue',
  fontSize:30
}*/
class Region extends Component {
  constructor(props) {
    super(props)
    this.logOutRoute = this.logOutRoute.bind(this);
  }
  
  logOutRoute(){
    let path = `./login`
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="body">
      <div className="Region">
         
            <a>Select Region</a>
        
        <div className="body">

        <form><input placeholder="Coordinate X" /></form>
          <form><input placeholder="Coordinate Y" /></form>
          
          <button className="analyze" onClick={this.logOutRoute}> analyze </button>
          <button className="logout" onClick={this.logOutRoute}> Logout </button>
        </div>
      </div>
      </div>
    )
  }
}


export default Region