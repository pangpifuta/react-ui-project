import React, { Component } from 'react'
import Link from 'react-router-dom'
import './Body.css'
//import { Container, Row, Col } from 'react-bootstrap/lib/Grid';

/*
let logout = {
  color:'blue',
  fontSize:30
}*/
class TCmain extends Component {
  constructor(props) {
    super(props)
    this.logOutRoute = this.logOutRoute.bind(this);
    this.selectRoute = this.selectRoute.bind(this);

  }
  
  logOutRoute(){
    let path = `./`
    this.props.history.push(path);
  }

  selectRoute(){
    let path = `./region`
    this.props.history.push(path);
  }

  render() {
    return (

      <div className="TCmain">
         <div className="header">
            <a>Select Region</a>
        </div>
        <div className="body">
        <form><input placeholder="Coordinate X" /></form>
          <form><input placeholder="Coordinate Y" /></form>
          {/* <form><button type="submit" onClick={this.SelectRoute}> Select </button></form> */}
          <div><button className="region" onClick={this.selectRoute}> Select </button></div>
          <div><button className="logout" onClick={this.logOutRoute}> Logout </button></div>

        </div>
      </div>

    )
  }
}


export default TCmain