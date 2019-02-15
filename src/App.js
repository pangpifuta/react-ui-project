import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PageHeader} from 'react-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import Toolbar from './components/Toolbar/Toolbar';
import Sidebar from './components/Sidebar/Sidebar';

//import { Container, Row, Col } from 'react-bootstrap/lib/Grid';

import { 
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Login from './components/Login';
import About from './components/About';
import Messages from './components/Messages';
import TCmain from './components/TrafficController';
import Menu from './components/Menu';
import Region from './components/Region';
import CurrentTraffic from './components/CurrentTraffic'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
            </header> */}

        {/* <div className="menu">
            <ul>
              <li> <Link to="/">Login</Link> </li>
              <li> <Link to="/traffic">Traffic Control</Link> </li>
              <li> <Link to="/about">About</Link> </li>
            </ul>
          </div>  */}


          {/* <PageHeader> */}
          <div class="header"><Sidebar></Sidebar></div>
          <div class="leftcolumn"><Toolbar></Toolbar></div>
          
          {/* </PageHeader> */}

        

        <div className="App-intro">
          <Switch>
            <main>
            <Route exact path="/login"  component={Login} />
            <Route path="/traffic" component={TCmain} />
            <Route path="/about" component={About} />
            <Route path="/menu" component={Menu} />
            <Route path="/region" component={Region} />
            <Route path="/currenttraffic" component={CurrentTraffic} />
            </main>
            <Redirect to="/" />
          </Switch>
          
          
        </div>
      </div>




    );
  }
}

export default App;
