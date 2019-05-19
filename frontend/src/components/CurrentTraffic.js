import React, { Component } from 'react';
import './CurrentTraffic.css'
import LoadingScreen from 'react-loading-screen';
import {  Box} from 'grommet';


export class CurrentTraffic extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true
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
    var latlng = new window.google.maps.LatLng(52.2297, 21.0122);
    var map = new window.google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 13
      });
      var trafficLayer = new window.google.maps.TrafficLayer();
      trafficLayer.setMap(map);
    }

    render(){
        const { loading } = this.state

        return(

                <div id="map"></div>

        

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
export default CurrentTraffic;