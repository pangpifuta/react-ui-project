
import React, { Component } from 'react'
import SimpleSelect from "./objects/SimpleSelect";
import SimpleRangeInput from "./objects/SimpleRangeInput";
import SimpleNumberInput from "./objects/SimpleNumberInput";
import { RangeInput,Select,TextInput, Text,Grommet, Box, FormField, Button } from 'grommet';
import { NumberInput } from 'grommet-controls';
import { grommet } from "grommet/themes";
import LoadingScreen from 'react-loading-screen';

// import { NumberInput } from 'grommet/components/NumberInput';

class Initialization extends Component {
    constructor(props) {
        super(props)
        this.routeChange = this.routeChange.bind(this);
        this.routeSignUp = this.routeSignUp.bind(this);

        this.state = {
          region: '',
          timeStep: 0,
          timeDur: 0,
          hr: 0,
          min: 0,
          generation: 0,
          numOfInd: 0,
          loading: false
        };

        this.fetchData = this.fetchData.bind(this)
      }
    
      routeChange(){
        let path = `./traffic`;
        this.props.history.push(path);
      }
    
      routeSignUp(){
        let path = `./signup`;
        this.props.history.push(path);
      }

      onChangenumOfInd = (e) => {
        this.setState({ numOfInd: e.target.value });
      }
     
   
      onChangeMinute = (e) => {
        this.setState({ minute: e.target.value });
      }

      
      fetchData(){
        this.state.timeDur = parseInt(this.state.hr,10) *60 + parseInt(this.state.min,10)
        this.state.loading = true
        var path = '/api/initialization?region=' + this.state.region + '&timestep=' + this.state.timeStep + '&duration=' +this.state.timeDur + 
        '&generation=' + this.state.generation + '&individuals=' + this.state.noOfInd
          fetch(path)
          // .then((Response) => Response.json())
          .then((res) => {
                
          })
      }

      componentDidMount() {
      }
    
    
      render() {
        const {loading, region, hr, min, generation, noOfInd} = this.state

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
            <LoadingScreen
                loading={loading}
                bgColor='#f1f1f1'
                spinnerColor='#9ee5f8'
                textColor='#676767'
                logoSrc='https://upload.wikimedia.org/wikipedia/commons/a/a3/Nuvola_apps_ksysv.png'
            > 
            <Grommet theme={grommet}>
            <Box align="center" pad="medium">
            <div>
                <FormField>
                  <Text>Region</Text>
                  <Select
                    value={region}
                    placeholder="select region" 
                    onChange={event => {
                      this.setState({
                        region: event.value
                      });
                     
                    }}
                    options={["Warsaw"]}
                  />
                </FormField>

              <FormField>
              <Text>Time Step</Text>
              <NumberInput min={1} defaultValue={1} value={this.state.timeStep} onChange={event => {
                      this.setState({
                        timeStep: event.target.value
                      });
                     }}/>
              </FormField>

              <Text>Time Duration</Text>
              <Box direction='row'>
              <Box style={{ width: 160 }} >
              <NumberInput min={0} defaultValue={0} suffix=' hr' value={hr} onChange={event => {
                      this.setState({
                        hr: event.target.value
                      });
                     }}
              />
              </Box>
              <Box style={{ width: 170 }} >
              <NumberInput min={0} max={59} defaultValue={0} suffix=' min' value={min} onChange={event => {
                      this.setState({
                        min: event.target.value
                      });
                     }}
              />
              </Box>
              </Box>

              <Box>
              <FormField>
              <Text>Generation</Text>
              <NumberInput min={1} defaultValue={1} value={generation} onChange={event => {
                      this.setState({
                        generation: event.target.value
                      });
                     }}
              />
              </FormField></Box>

              <Box>
              <FormField>
              <Text>Number of Individuals</Text>
              <NumberInput min={0}  step={1000} defaultValue={0} value={noOfInd} onChange={event => {
                          this.setState({
                            noOfInd: event.target.value
                          });
                         }}
                  />
              {/* <TextInput keyboardType={Number}/> */}

              
              {/* <FormField label="Number of Individuals">
              <TextInput
                ref='numOfIndInput'
                // autoFocus
                placeholder=" "
                type={Number}
                value={this.state.numOfInd}
                onChange={this.onChangenumOfInd} />
              </FormField> */}
              

              </FormField>    
              </Box>


              {/* <RangeInput min={0} max={10} step={5} onChange={event => this.setState({ value: event.target.value })} */}
              <Box align="left" pad="medium">
              <Button label="start optimization" color="#0c96bc" onClick={this.fetchData}/>
              </Box>

              
              
              </div>
              </Box>
              
              </Grommet>
            </LoadingScreen>

        )
      }
    
    
    }
    
    export default Initialization

        