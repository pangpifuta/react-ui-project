import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './CurrentTraffic.css'
import LoadingScreen from 'react-loading-screen';
import {RangeInput, TextInput, Text} from 'grommet'
import CanvasJSReact from './assets/canvasjs.react';
import { Box,  Button, Grid } from "grommet";
import {Grommet} from 'grommet';
import { grommet } from "grommet/themes";
// import './Result.css'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;



export class Result extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            maxtimestep: 1,
            timestep: 0
        }
    }
    componentDidMount(){
        this.renderMap()
        setTimeout(() =>
        this.setState({loading: false}), 1000)
       
    }

    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCpfEuV9haslB7YcbL6LwwXAK8ELYHiUck&callback=initMap")
        window.initMap = this.initMap
        // this.setState({loading: false})
      }


initMap = ()=>{
    var map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: 52.2297, lng: 21.0122},
        zoom: 13
      });
      var trafficLayer = new window.google.maps.TrafficLayer();
      trafficLayer.setMap(map);
    }

    render(){
        // const { loading } = this.state


        const { value } = this.state;
        const { timestep } = this.state
        const options = {
          animationEnabled: true,
          exportEnabled: true,
          theme: "light2", // "light1", "dark1", "dark2"
          title:{
            text: "Traffic Improvement"
          },
          axisY: {
            title: "Fitness",
            includeZero: false,
            suffix: ""
          },
          axisX: {
            title: "Generation",
            prefix: "G",
            interval: 2
          },
          data: [{
            type: "line",
            toolTipContent: "Week {x}: {y}%",
            dataPoints: [
              { x: 1, y: 64 },
              { x: 2, y: 61 },
              { x: 3, y: 64 },
              { x: 4, y: 62 },
              { x: 5, y: 64 },
              { x: 6, y: 60 },
              { x: 7, y: 58 },
              { x: 8, y: 59 },
              { x: 9, y: 53 },
              { x: 10, y: 54 },
              { x: 11, y: 61 },
              { x: 12, y: 60 },
              { x: 13, y: 55 },
              { x: 14, y: 60 },
              { x: 15, y: 56 },
              { x: 16, y: 60 },
              { x: 17, y: 59.5 },
              { x: 18, y: 63 },
              { x: 19, y: 58 },
              { x: 20, y: 54 },
              { x: 21, y: 59 },
              { x: 22, y: 64 },
              { x: 23, y: 59 }
            ]
          }]
        }

        return(

          <Grommet full theme={grommet}>
              {/* <Box direction="row" pad="medium">
                <div>
                    <CanvasJSChart options = {options}></CanvasJSChart>
                </div>
                <div>
                    <Text>MAP</Text>
                </div>    
              </Box> */}

              <Box>
              <Grid
                      fill
                      columns={['medium', 'auto']}
                      rows={['auto', 'flex']}
                      gap='small'
                areas={[
                  { name: 'left', start: [0, 0], end: [0, 0] },
                  { name: 'right', start: [1, 0], end: [1, 0] },
                  { name: 'foot', start: [0, 1], end: [0, 1] }
                  // { name: 'side', start: [2, 0], end: [2, 0] }
                ]}
              >
                <Box gridArea="left" background="light-4">
                <div>
                <CanvasJSChart options = {options}></CanvasJSChart>

                
                </div>
                </Box>  
                <Box gridArea="right" align="center" background="light-4">
                  <Text>Map</Text>
                </Box>
                <Box gridArea="foot" padding="medium" background="light-4">
                <Text>Time Step</Text>
                  <RangeInput
                  value={value}
                  min={0}
                  max={10}
                  step={1}
                  value={timestep} 
                  onChange={event => this.setState({ timestep: event.target.value })}
                />
                  <Text>Time Step: {timestep}</Text>
                </Box>

            
            </Grid>
            </Box> 
            </Grommet>

        )
        
    }

}


function loadScript(url) {
    var index  = window.document.getElementsByTagName("script")[0]
    var script = window.document.createElement("script")
    script.src = url
    script.async = true
    script.defer = true
    index.parentNode.insertBefore(script, index)
  }



export default Result;