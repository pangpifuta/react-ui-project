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
      var locations = [
      ['car',52.226783, 20.996947],
      ['car',52.226744, 20.996690],
      ['car',52.227237, 20.999211],
      ['car',52.227756, 21.001368],
      ['car',52.228385, 21.001314],
      ['car',52.229512, 21.000595],
      ['car',52.229212, 21.008484],
      ['car',52.229100, 21.007926],
      ['car',52.229001, 21.007475],
      ['car',52.227827, 21.001706],
      ['car',52.227577, 21.001878],
      ['car',52.227469, 21.001969],
      ['car',52.227344, 21.002039],
      ['car',52.227239, 21.002114],
      ['car',52.227380, 21.002017],
      ['car',52.227295, 21.002082],
      ['car',52.226871, 21.002350],
      ['car',52.226776, 21.002430],
      ['car',52.227809, 21.001987],
      ['car',52.227955, 21.001931],
      ['car',52.228060, 21.001856],
      ['car',52.227772, 21.001405],
      ['car',52.227734, 21.001257],
      ['car',52.228030, 21.002394],
      ['car',52.228032, 21.002566],
      ['car',52.228153, 21.003317],
      ['car',52.228196, 21.003497],
      ['car',52.228235, 21.003750],
      ['car',52.228268, 21.003927],
      ['car',52.228306, 21.004168],
      ['car',52.227917, 21.001912],
      ['car',52.227656, 21.002658],
      ['car',52.227654, 21.002749],
      ['car',52.227692, 21.002910],
      ['car',52.227754, 21.002980],
      ['car',52.227744, 21.003071],
      ['car',52.227811, 21.003162],
      ['car',52.227686, 21.001014],
      ['car',52.227670, 21.000917],
      ['car',52.227586, 21.000834],
      ['car',52.227566, 21.000657],
      ['car',52.227517, 21.000445],
      ['car',52.227469, 21.000314],
      ['car',52.227461, 21.000102],
      ['car',52.227420, 21.000121],
      ['car',52.227412, 20.999973],
      ['car',52.228271, 21.001400],
      ['car',52.228360, 21.001365],
      ['car',52.228449, 21.001319],
      ['car',52.228536, 21.001252],
      ['car',52.228618, 21.001185],
      ['car',52.227475, 21.001928],
      ['car',52.227439, 21.001976],
      ['car',52.227363, 21.002014],
      ['car',52.227309, 21.002073],
      ['car',52.227245, 21.002096],
      ['car',52.227176, 21.002144],
      ['car',52.227100, 21.002195],
      ['car',52.227476, 21.002233],
      ['car',52.227437, 21.002273],
      ['car',52.227402, 21.002278],
      ['car',52.227202, 21.002388],
      ['car',52.227221, 21.002395],
      ['car',52.227221, 21.002395],
      ['car',52.226982, 21.002583],
      ['car',52.226890, 21.002621],
      ['car',52.226791, 21.002675],
      ['car',52.226673, 21.002747],
      ['car',52.228967, 21.001393],
      ['car',52.228908, 21.001479],
      ['car',52.228862, 21.001511],
      ['car',52.228727, 21.001575],
      ['car',52.228484, 21.001747],
      ['car',52.228382, 21.001817],
      ['car',52.228201, 21.001956],
      ['car',52.227698, 21.002329],
      ['car',52.227450, 21.002473],
      ['car',52.227200, 21.001931],
      ['car',52.227095, 21.001995],
      ['car',52.226788, 21.002244],
      ['car',52.226614, 21.002373],
      ['car',52.226282, 21.002555],
      ['car',52.226229, 21.002593],
      ['car',52.226587, 21.002360],
      ['car',52.226911, 21.002165],
      ['car',52.227148, 21.001961],
      ['car',52.227401, 21.001779],
      ['car',52.227937, 21.001436],
      ['car',52.228105, 21.001302],
      ['car',52.228261, 21.001238],
      ['car',52.228402, 21.001168],
      ['car',52.228742, 21.001729],
      ['car',52.228847, 21.001868],
      ['car',52.228936, 21.001981],
      ['car',52.229043, 21.001994],
      ['car',52.229155, 21.002147],
      ['car',52.229102, 21.002394],
      ['car',52.228354, 21.002547],
      ['car',52.228378, 21.002660],
      ['car',52.228411, 21.002781],
      ['car',52.228432, 21.002910],
      ['car',52.228464, 21.003044],
      ['car',52.228503, 21.003224],
      ['car',52.226837, 21.003074],
      ['car',52.226862, 21.003293],
      
      
          ];
          var iconBase = 'http://maps.google.com/mapfiles/kml/pal4/icon31.png';
          var map = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: new window.google.maps.LatLng(52.227917, 21.001912),
            mapTypeId: window.google.maps.MapTypeId.ROADMAP
          });
      
          var infowindow = new window.google.maps.InfoWindow();
      
          var marker, i;
      
          for (i = 0; i < locations.length; i++) {
            marker = new window.google.maps.Marker({
              position: new window.google.maps.LatLng(locations[i][1], locations[i][2]),
              map: map,
              icon: iconBase
      
            });
      
            window.google.maps.event.addListener(marker, 'click', (function(marker, i) {
              return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
              }
            })(marker, i));
          }
           }
    
    
      render() {
        const { value } = this.state;
        const { timestep } = this.state;
        const { graphData} = this.state;
        const { maxTimestep} = this.state;
        // console.log(maxTimestep, timestep)
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
            title: "Generation",
            prefix: "",
            interval: 1
          },
          data: [{
            type: "line",
            toolTipContent: "Generation {x}:Improvement {y}%",
            dataPoints: graphData
          }]
        } 

        return (

           
            <Grommet theme={grommet}>
            <Box  pad="medium" background="light-4">
            <Text alignSelf="center" size="xlarge" >Optimization1 Result</Text>
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

      
   
