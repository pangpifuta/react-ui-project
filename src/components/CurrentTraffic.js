import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class CurrentTraffic extends Component {
    render() {
        return (
            <div style={{
                width: '80%',
                height: '80%',
                position: 'absolute',
                top: '16%',
                left: '13.5%'
            }}>
                <Map
                    google={this.props.google}
                    zoom={14}
                    initialCenter={{
                        lat: 52.2297,
                        lng: 21.0122
                    }}
                >

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                            {/* <h1>{this.state.selectedPlace.name}</h1> */}
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCpfEuV9haslB7YcbL6LwwXAK8ELYHiUck')
})(CurrentTraffic)