import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './CurrentTraffic.css'
import LoadingScreen from 'react-loading-screen';


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
    var map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: 52.2297, lng: 21.0122},
        zoom: 13
      });
      var trafficLayer = new window.google.maps.TrafficLayer();
      trafficLayer.setMap(map);
    }

    render(){
        const { loading } = this.state

        return(
        <main>

        <LoadingScreen
            loading={loading}
            bgColor='#f1f1f1'
            spinnerColor='#9ee5f8'
            textColor='#676767'
            logoSrc='https://upload.wikimedia.org/wikipedia/commons/a/a3/Nuvola_apps_ksysv.png'
        > 
                <div id="map"></div>
        </LoadingScreen>
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