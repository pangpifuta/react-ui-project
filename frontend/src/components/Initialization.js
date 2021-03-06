import React, { Component } from 'react'
import { Select, Text,Grommet, Box, FormField, Button } from 'grommet';
import { NumberInput } from 'grommet-controls';
import { grommet } from "grommet/themes";
import LoadingScreen from 'react-loading-screen';
import saveAs from 'file-saver';

class Initialization extends Component {
    constructor(props) {
        super(props)

        this.state = {
          region: '',
          timeStep: 1,
          timeDur: 0, //unit in seconds
          hr: 0,
          min: 0,
          generation: 1,
          noOfInd: 10,
          loading: false
        };

        this.fetchData = this.fetchData.bind(this)
        this.onResult = this.onResult.bind(this)
      }
    

      onChangenumOfInd = (e) => {
        this.setState({ numOfInd: e.target.value });
      }
     
   
      onChangeMinute = (e) => {
        this.setState({ minute: e.target.value });
      }

      onResult = (params) => {
        let path = `./initialization-result`;
        this.props.history.push({
          pathname: path,
          state: {
            result: params,
            timestep: this.state.generation
          }
        });
      }

      sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }

      download(path) {
        setTimeout(() => {
          const response = {
            file: path,
          };
          window.location.href = response.file;
          // window.open(response.file)
        }, 100);
      }

      async fetchData(){
        this.state.timeDur = (parseInt(this.state.hr,10) *60 + parseInt(this.state.min,10))*60 //seconds
        this.state.loading = true
        var path = '/api/initialization?region=' + this.state.region + '&timestep=' + this.state.timeStep + '&duration=' +this.state.timeDur + 
        '&generation=' + this.state.generation + '&individuals=' + this.state.noOfInd
        console.log("Fetching Optimization1")
        var res = await fetch(path)
        var flag = false  
        var checkpath = '/api/checkinitialization'
        while(!flag){
          await this.sleep(30000)
          res = await fetch(checkpath)
          if (res.status === 200) {
            flag = true
          }
        }
        var resjson = await res.json()
        console.log("Receive Response", resjson)
        this.state.loading = false
        var reqfile = 'http://localhost:8000/api/requestfile'
        this.download(reqfile)
        this.onResult(resjson)
      }

      componentDidMount() {
      }
    
    
      render() {
        const {loading, region, hr, min, generation, noOfInd} = this.state

        return (

            <LoadingScreen
                loading={loading}
                bgColor='#f1f1f1'
                spinnerColor='#9ee5f8'
                textColor='#676767'
                logoSrc='https://upload.wikimedia.org/wikipedia/commons/a/a3/Nuvola_apps_ksysv.png'
            > 
            <Grommet theme={grommet}>
            <Box align="center" pad="medium" background="light-4">
            <Box pad="medium" background="#ffffff">
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
              <NumberInput min={1} value={this.state.timeStep} onChange={event => {
                      this.setState({
                        timeStep: event.target.value
                      });
                     }}/>
              </FormField>

              <Text>Time Duration</Text>
              <Box direction='row'>
              <Box style={{ width: 160 }} >
              <NumberInput min={0} suffix=' hr' value={hr} onChange={event => {
                      this.setState({
                        hr: event.target.value
                      });
                     }}
              />
              </Box>
              <Box style={{ width: 170 }} >
              <NumberInput min={0} max={59} suffix=' min' value={min} onChange={event => {
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
              <NumberInput min={1}  value={generation} onChange={event => {
                      this.setState({
                        generation: event.target.value
                      });
                     }}
              />
              </FormField></Box>

              <Box>
              <FormField>
              <Text>Number of Individuals</Text>
              <NumberInput min={10}  step={10}  value={noOfInd} onChange={event => {
                          this.setState({
                            noOfInd: event.target.value
                          });
                         }}
                  />


              </FormField>    
              </Box>

              <Box align="left" pad="medium">
              <Button label="start optimization" color="#0c96bc" onClick={this.fetchData}/>
              </Box>

              

              
              
              </div>
              </Box>
              </Box>
              
              </Grommet>
            </LoadingScreen>

        )
      }
    
    
    }
    
    export default Initialization

        