// import React, { Component } from 'react'
// import Link from 'react-router-dom'
// import './Body.css'
// import './CurrentTraffic.css'
// import google.maps from 'google-maps-react'

// function initMap() {
//     var map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 13,
//       center: {lat: 34.04924594193164, lng: -118.24104309082031}
//     });
  
//     var trafficLayer = new google.maps.TrafficLayer();
//     trafficLayer.setMap(map);
//   }

// class CurrentTraffic extends Component {
//     constructor(props){
//         super(props)
//         initMap()
//     }

//     render() {
//         return (
//             <div id="map">
//             <script async defer
//             src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk&callback=initMap">
//             </script>
//           </div>
//         )
//     }
// }

// export default CurrentTraffic;

import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import htmlContent from './traffic.html';

const CurrentTraffic = React.createClass({
    render() {
        return (
            <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
        );
    }
});
export default CurrentTraffic;


// const mapStyles = {
//   margin: 0,
//   padding: 0,
//   visible: true,
//   position: 'absolute',
//   height: '100%'
// };

// export class CurrentTraffic extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={13}
//         style={mapStyles}
//         initialCenter={{
//          lat: 52.2297,
//          lng: 21.0122
//         }}
//       />
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCkUOdZ5y7hMm0yrcCQoCvLwzdM6M8s5qk'
// })(CurrentTraffic);
