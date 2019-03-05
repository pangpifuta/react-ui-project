import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PageHeader} from 'react-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import Toolbar from './components/Toolbar/Toolbar';
import Sidebar from './components/Sidebar/Sidebar';
import {Grommet} from 'grommet';

//import { Container, Row, Col } from 'react-bootstrap/lib/Grid';

import { 
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Messages from './components/Messages';
import TCmain from './components/TrafficController';
// import Menu from './components/Menu';
import Region from './components/Region';
import CurrentTraffic from './components/CurrentTraffic'
import TestGrommet from './components/TestGrommet'
import TestSignup from './components/TestSignup'

class App extends Component {
  componentDidMount() { 

    
  }
  render() {
    return (
      <div className="App">
          <Grommet>
          <div class="header"><Sidebar></Sidebar></div>
          <div class="leftcolumn"><Toolbar></Toolbar></div>

        

        <div className="App-intro">
          <Switch>
            <main>
            <Route exact path="/login"  component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/traffic" component={TCmain} />
            <Route path="/about" component={About} />
            <Route path="/region" component={Region} />
            <Route path="/currenttraffic" component={CurrentTraffic} />
            <Route path="/tgrommet" component={TestGrommet} />
            <Route path="/tsignup" component={TestSignup} />
            </main>
            <Redirect to="/" />
          </Switch>
          
          
        </div>
        </Grommet>
      </div>




    );
  }
}

export default App;
