import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './CurrentTraffic.css'
import LoadingScreen from 'react-loading-screen';
import {RangeInput, TextInput, Text} from 'grommet'

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
        

        return(
          <div>
          <RangeInput
          value={value}
          min={0}
          max={10}
          step={1}
          value={timestep} 
          onChange={event => this.setState({ timestep: event.target.value })}
        />
        <Text>{timestep}</Text>
        </div>



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