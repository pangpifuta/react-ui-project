import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './CurrentTraffic.css'

export class CurrentTraffic extends Component {

    componentDidMount(){
        this.renderMap()
    }

    renderMap = () => {
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyCpfEuV9haslB7YcbL6LwwXAK8ELYHiUck&callback=initMap")
        window.initMap = this.initMap
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
        return(
            <main>
                <div id="map"></div>
                </main>
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