import React, { Component } from 'react';
import './App.css';
import {Grommet} from 'grommet';
import {Heading} from 'grommet';
import {Clock as DClock} from 'grommet';
import { BarChart,  Car, Clock as ClockIcon} from 'grommet-icons';


import { Box,  Button, Grid, Text } from "grommet";
import { grommet } from "grommet/themes";

import { 
  Route,
  Switch,
  Redirect
} from 'react-router-dom';


import CurrentTraffic from './components/CurrentTraffic'
import Initialization from './components/Initialization'
import RealTimeOptimization from './components/RealTimeOptimization'
import Opt1Result from './components/Opt1Result'
import Opt2Result from './components/Opt2Result'


const SidebarButton = ({ label, icon, href }) => (
  <Button plain href={href}>
    {({ hover }) => (
      <Box
        direction="row"
        gap="small"
        background={hover ? "#606668" : undefined}
        pad={{ horizontal: "medium", vertical: "small" }}
      >
      {icon}
        <Text> {label}</Text>
      </Box>
    )}
  </Button>
);

const DigitalClock = ({time}) => (
    <Box align="center" justify="start" pad="small">
      <DClock type="digital" size="large"  time={new Date(time).toISOString()}/>
    </Box>

);

class App extends Component {

state = { sidebar: true, time: Date.now()+ 7.2e+6};

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() + 7.2e+6}), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

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
            background="#0c96bc"
          >
            <Button onClick={() => this.setState({ sidebar: !sidebar })}>
              <Heading size="small" >Optimal Traffic Control</Heading>
            </Button>

            <div><DigitalClock time={this.state.time}/>
            <Text>(GMT+2) EU/Warsaw</Text></div>

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
                <SidebarButton style={{width:'100%', height:'7%', position: 'relative'}} key={name} icon={<BarChart/>} label="Optimization1" href="/initialization" hoverIndicator>  {/* ICON PROBLEM !!!!!!! */}
                   <Box fill direction="row" gap="xlarge" pad={{ horizontal: "medium", vertical: "xlarge" }}> 
                    <Text>{name}</Text>
                   </Box> 
                </SidebarButton>
              )
              )}
              {["Real Time Optimization"].map(name => (
                <SidebarButton style={{width:'100%', height:'7%', position: 'relative'}} key={name} icon={<ClockIcon/>} label="Optimization2" href="/real-time-optimization" hoverIndicator>  {/* ICON PROBLEM !!!!!!! */}
                   <Box fill direction="row" gap="xlarge" pad={{ horizontal: "medium", vertical: "xlarge" }}> 
                    <Text>{name}</Text>
                   </Box> 
                </SidebarButton>
              )
              )}
              
            </Box>
          )}
          <Box gridArea="main" justify="center" align="center" background="light-4" >
          <div style={{width:'100%', height: '100%'}}>
           <Switch>
             
            
             <Route exact path="/" render={() => <Redirect to="/currenttraffic" />} />          
             <Route name="currentTraffic"path="/currenttraffic" component={CurrentTraffic} />
             <Route path="/initialization" component={Initialization} />
             <Route path="/real-time-optimization" component={RealTimeOptimization} />
             <Route path="/initialization-result" component={Opt1Result} />
             <Route path="/real-time-optimization-result" component={Opt2Result} />
             
             <Redirect to="/" />
           </Switch>
          
          
         </div>

          </Box>
        </Grid>
      </Grommet>


    );
  }
}

export default App;
