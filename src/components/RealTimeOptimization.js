
import React, { Component } from 'react'
import SimpleSelect from "./objects/SimpleSelect";
import SimpleRangeInput from "./objects/SimpleRangeInput";
import SimpleNumberInput from "./objects/SimpleNumberInput";
import { RangeInput,Select,TextInput, Text,Grommet, Box, FormField, Button } from 'grommet';
import { NumberInput } from 'grommet-controls';
import { grommet } from "grommet/themes";
// import { NumberInput } from 'grommet/components/NumberInput';

class RealTimeOptimization extends Component {
    constructor(props) {
        super(props)
        this.routeChange = this.routeChange.bind(this);
        this.routeSignUp = this.routeSignUp.bind(this);

        this.state = {
          region: '',
          timeStep: '',
          timeDur: '',
          generation: '',
          noOfInd: ''
        };

      }
    
      routeChange(){
        let path = `./traffic`;
        this.props.history.push(path);
      }
    
      routeSignUp(){
        let path = `./signup`;
        this.props.history.push(path);
      }
    
      
    
      render() {
        return (
          // <div className="LogIn">
          //   <div className="header">
          //       <a>Login</a>
          //   </div>
    
            // <div className="body">
            
            // <a>Login</a>
            
            //   <form><input placeholder="username" /></form>
            //   <form><input placeholder="password" /></form>
            //   <form>< button onClick={this.routeChange}> Log In </ button></form>
            //   <form>< button onClick={this.routeSignUp}> Sign Up </ button></form>
            <Grommet theme={grommet}>
            <Box align="center" pad="medium">
            <div>
                <FormField>
                <Text>Region</Text>
              <SimpleSelect options={["Warsaw"]} placeholder="select region"></SimpleSelect></FormField>

              <FormField>
              <Text>Time Step</Text>
              <SimpleNumberInput min={1} defaultValue={1}/>
              </FormField>

              <Text>Time Duration</Text>
              <Box direction='row'>
              <Box style={{ width: 160 }} >
              <SimpleNumberInput min={1} defaultValue={1} suffix=' hr'/>
              </Box>
              <Box style={{ width: 170 }} >
              <SimpleNumberInput min={0} max={59} defaultValue={1} suffix=' min'/>
              </Box>
              </Box>

              <Box>
              <FormField>
              <Text>Generation</Text>
              <SimpleNumberInput min={1} defaultValue={1}/>
              </FormField></Box>

              {/* <RangeInput min={0} max={10} step={5} onChange={event => this.setState({ value: event.target.value })} */}

              <Box align="left" pad="medium">
              <Button label="start optimization"/>
              </Box>
              
              </div>
              </Box>
              
    </Grommet>
            // </div>
          //  </div>
        )
      }
    
    
    }
    
    export default RealTimeOptimization

        