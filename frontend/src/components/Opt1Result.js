import React, { Component } from 'react'
import { RangeInput, Text,Grommet, Box } from 'grommet';
import { grommet } from "grommet/themes";
import CanvasJSReact from './assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Opt1Result extends Component {
    constructor(props) {
        super(props)
        // console.log("Result:", this.props.location.state.result)
        var coordinates = [];
        if (this.props.location.state !== undefined && this.props.location.state.result !== undefined && this.props.location.state.result.length > 0) {
          coordinates = []
          
          var pointy = this.props.location.state.result[0];
          var carCoordinates = this.props.location.state.result[1];

          for (var i = 0; i < pointy.length; i++) {
            coordinates.push({x: i+1,y: pointy[i]})
          }
        }
        this.state = {
          graphData: coordinates,
          maxTimestep: this.props.location.state.timestep,
          timestep : this.props.location.state.timestep,
          loading: false
        };
    }


    componentDidMount() {
      this.renderMap()
    }

    componentWillMount(){
       
    }

    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCpfEuV9haslB7YcbL6LwwXAK8ELYHiUck&callback=initMap")
        window.initMap = this.initMap
       
    } 


 initMap = ()=>{
     var latlng = new window.google.maps.LatLng(52.2297, 21.0122);
     var map = new window.google.maps.Map(document.getElementById('map'), {
         center: latlng,
         zoom: 13
       });
       var trafficLayer = new window.google.maps.TrafficLayer();
       trafficLayer.setMap(map);
     }
    
    
      render() {
        const { value } = this.state;
        const { timestep } = this.state;
        const { graphData} = this.state;
        const { maxTimestep} = this.state;
        console.log(maxTimestep, timestep)
        const divStyle = {
          width: '95%',
          height: '100%'
        };

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
            title: "Time step",
            prefix: "",
            interval: 1
          },
          data: [{
            type: "line",
            toolTipContent: "Step {x}:Improvement {y}%",
            dataPoints: graphData
          }]
        } 

        return (

           
            <Grommet theme={grommet}>
            <Box  pad="medium" background="light-4">
              <Box direction="row" wrap="true" background="light-4">
                  <Box basis="1/2">
                  <div id="map" style={divStyle} ></div>
                  </Box>
                  <Box basis="1/2">
                  <div>
                  <CanvasJSChart options = {options}></CanvasJSChart>
                  </div>
                  </Box>
              </Box>

              <Box direction="row" wrap="true" pad="large" background="light-4">
                    <Box basis="1/3" align="center">
	                  <RangeInput
	                  value={value}
	                  min={0}
	                  max={maxTimestep}
	                  step={1}
	                  
	                  onChange={event => this.setState({ timestep: event.target.value })}
	                />
	                  <Text>Time Step: {timestep}</Text>
                    </Box>
              </Box>  

              {/*<Box direction="row" pad="large"  background="light-4">
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
              </Box> */}
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
   
export default Opt1Result

      
   
