import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {PageHeader} from 'react-bootstrap';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
// import Toolbar from './components/Toolbar/Toolbar';
// import Sidebar from './components/Sidebar/Sidebar';
import {Grommet} from 'grommet';
import {Heading} from 'grommet';
import { LineChart , BarChart, Optimize, Car, Clock} from 'grommet-icons';
import { Add } from "grommet-icons";


import { Box,  Button, Grid, Text } from "grommet";
import { grommet } from "grommet/themes";


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
import TCmain from './components/TrafficController';
import CurrentTraffic from './components/CurrentTraffic'
import Stat from './components/Stat'
import Initialization from './components/Initialization'
import RealTimeOptimization from './components/RealTimeOptimization'
import Region from "./components/Region"

const PlainButton = props => (
  <Grommet theme={grommet}>
    <Box  align="center" pad="small" background="dark-3">
      <Button hoverIndicator="light-1" onClick={() => {}} {...props}>
        <Box pad="small" direction="row" align="center" gap="small">

          <Add />
          <Text>Add</Text>
        </Box>
      </Button>
    </Box>
</Grommet>
);
const SidebarButton = ({ label, icon, href }) => (
  <Button plain href={href}>
    {({ hover }) => (
      <Box
        direction="row"
        gap="small"
        background={hover ? "dark-1" : undefined}
        pad={{ horizontal: "medium", vertical: "small" }}
      >
      {icon}
        <Text> {label}</Text>
      </Box>
    )}
  </Button>
);


class App extends Component {
//   componentDidMount() { 

    
//   }
//   render() {
//     return (
//       <div className="App">
//           <Grommet>
//           <div class="header"><Sidebar></Sidebar></div>
//           <div class="leftcolumn"><Toolbar></Toolbar></div>

        

//         <div className="App-intro">
//           <Switch>
//             <main>
//             <Route exact path="/login"  component={Login} />
//             <Route path="/signup" component={Signup} />
//             <Route path="/traffic" component={TCmain} />
//             <Route path="/about" component={About} />
//             <Route path="/region" component={Region} />
//             <Route path="/currenttraffic" component={CurrentTraffic} />
//             <Route path="/tgrommet" component={TestGrommet} />
//             <Route path="/tsignup" component={TestSignup} />
//             </main>
//             <Redirect to="/" />
//           </Switch>
          
          
//         </div>
//         </Grommet>
//       </div>




//     );
//   }
// }

state = { sidebar: true };



  render() {
    const { sidebar } = this.state;
    return (

      <Grommet full theme={grommet}>



        <Grid
          fill
          rows={["auto", "flex"]}
          columns={["auto", "flex"]}
          areas={[
            { name: "header", start: [0, 0], end: [1, 0] },
            { name: "sidebar", start: [0, 1], end: [0, 1] },
            { name: "main", start: [1, 1], end: [1, 1] }
          ]}
        >
          <Box
            gridArea="header"
            direction="row"
            align="center"
            justify="between"
            pad={{ horizontal: "medium", vertical: "small" }}
            background="neutral-3"
          >
            <Button onClick={() => this.setState({ sidebar: !sidebar })}>
              <Heading size="small">Optimal Traffic Control</Heading>
            </Button>
            <Text><a href="/login">Log In</a></Text>  {/* delete the text decoration */}
          </Box>
          {sidebar && (
            <Box
              gridArea="sidebar"
              background="dark-3"
              width="small"
              animation={[
                { type: "fadeIn", duration: 300 },
                { type: "slideRight", size: "xlarge", duration: 150 }
              ]}
            >
              {["Current Traffic"].map(name => (
                <SidebarButton style={{width:'100%', height:'7%', position: 'relative'}} key={name} icon={<Car/>} label="Current Traffic" href="/currenttraffic" hoverIndicator>  {/* ICON PROBLEM !!!!!!! */}
                   <Box fill direction="row" gap="xlarge" pad={{ horizontal: "medium", vertical: "xlarge" }}> 
                    <Text>{name}</Text>
                   </Box> 
                </SidebarButton>
              )
              )}
              {["Initialization"].map(name => (
                <SidebarButton style={{width:'100%', height:'7%', position: 'relative'}} key={name} icon={<BarChart/>} label="Initialization" href="/initialization" hoverIndicator>  {/* ICON PROBLEM !!!!!!! */}
                   <Box fill direction="row" gap="xlarge" pad={{ horizontal: "medium", vertical: "xlarge" }}> 
                    <Text>{name}</Text>
                   </Box> 
                </SidebarButton>
              )
              )}
              {["Real Time Optimization"].map(name => (
                <SidebarButton style={{width:'100%', height:'7%', position: 'relative'}} key={name} icon={<Clock/>} label="Real Time Optimization" href="/real-time-optimization" hoverIndicator>  {/* ICON PROBLEM !!!!!!! */}
                   <Box fill direction="row" gap="xlarge" pad={{ horizontal: "medium", vertical: "xlarge" }}> 
                    <Text>{name}</Text>
                   </Box> 
                </SidebarButton>
              )
              )}
              {["Statistics"].map(name => (
                <SidebarButton style={{width:'100%', height:'7%', position: 'relative'}} key={name} icon={<BarChart/>} label="Statistics" href="/stat" hoverIndicator>  {/* ICON PROBLEM !!!!!!! */}
                   <Box fill direction="row" gap="xlarge" pad={{ horizontal: "medium", vertical: "xlarge" }}> 
                    <Text>{name}</Text>
                   </Box> 
                </SidebarButton>
              )
              )}
              
            </Box>
          )}
          <Box gridArea="main" justify="center" align="center" background="light-4" >
          <div className="App-intro">
           <Switch>
             <main>
             <Route exact path="/login"  component={Login} />
             <Route path="/signup" component={Signup} />
             <Route path="/traffic" component={TCmain} />
             <Route path="/about" component={About} />
             <Route path="/region" component={Region} />
             <Route path="/currenttraffic" component={CurrentTraffic} />
             <Route path="/stat" component={Stat} />
             <Route path="/initialization" component={Initialization} />
             <Route path="/real-time-optimization" component={RealTimeOptimization} />
             </main>
             <Redirect to="/" />
           </Switch>
          
          
         </div>

          </Box>
        </Grid>
      </Grommet>


    );
  }
}


const Percentages = () => (
  <Grommet theme={grommet} full>
    <Grid
      fill
      areas={[
        { name: "nav", start: [0, 0], end: [0, 0] },
        { name: "main", start: [1, 0], end: [1, 0] }
      ]}
      columns={["small", "flex"]}
      rows={["flex"]}
      gap="small"
    >
      <Box gridArea="nav" background="brand" />
      <Box gridArea="main" background="brand" />
    </Grid>
  </Grommet>
);

const NColumnGrid = () => (
  <Grommet theme={grommet} full>
    <Grid
      columns={{
        count: 6,
        size: "auto"
      }}
      gap="small"
    >
      <Box background="brand">Item 1</Box>
      <Box background="brand">Item 2</Box>
      <Box background="brand">Item 3</Box>
      <Box background="brand">Item 4</Box>
      <Box background="brand">Item 5</Box>
      <Box background="brand">Item 6</Box>
    </Grid>
  </Grommet>

);

// storiesOf("Grid", module)
//   .add("App", () => <App />)
//   .add("Percentages", () => <Percentages />)
//   .add("N-column layout", () => <NColumnGrid />);


export default App;
