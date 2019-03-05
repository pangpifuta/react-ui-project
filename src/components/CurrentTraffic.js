import React, { Component } from 'react'
import Link from 'react-router-dom'
import './Body.css'
import './CurrentTraffic.css'


class CurrentTraffic extends Component {
/*{key: 'y8jkIzSUtIWNzMjmGDNlQMDmIX7bGdCT',}*/
componentDidMount() { 
    const script = document.createElement('script');

    script.src = process.env.PUBLIC_URL + '/sdk/tomtom.min.js';

    document.body.appendChild(script);

    script.async = true;

    script.onload = function () {
      window.tomtom.L.map('map', {

        source: 'vector',

        key: 'y8jkIzSUtIWNzMjmGDNlQMDmIX7bGdCT',

        center: [37.769167, -122.478468],

        basePath: '/sdk',

        zoom: 15

      });
    //   window.tomtom.setProductInfo('Codepen Examples', '4.46.3');
    // var trafficFlowOptions = {
    //     key: 'y8jkIzSUtIWNzMjmGDNlQMDmIX7bGdCT',
    //     style: 'relative'
    // };
    // var vectorTrafficFlowOptions = {
    //     key: 'y8jkIzSUtIWNzMjmGDNlQMDmIX7bGdCT',
    //     refresh: 180000,
    //     style: 'relative'
    // };
    // var map = window.tomtom.map('map', {
    //     key: 'y8jkIzSUtIWNzMjmGDNlQMDmIX7bGdCT',
    //     source: ['vector', 'raster'],
    //     basePath: 'https://api.tomtom.com/maps-sdk-js/4.46.3/examples/sdk',
    //     vectorTrafficFlow: vectorTrafficFlowOptions,
    //     center: [51.50276, -0.12634],
    //     zoom: 15
    // });
    // var languageLabel = window.tomtom.L.DomUtil.create('label');
    // languageLabel.innerHTML = 'Maps language';
    // var languageSelector = window.tomtom.languageSelector.getHtmlElement(window.tomtom.globalLocaleService, 'maps');
    // languageLabel.appendChild(languageSelector);
    // window.tomtom.controlPanel({
    //     position: 'bottomright',
    //     title: 'Settings',
    //     collapsed: true,
    //     closeOnMapClick: false
    // })
    //     .addTo(map)
    //     .addContent(languageLabel);
    // window.tomtom.controlPanel({
    //     position: 'topright',
    //     title: null,
    //     show: null,
    //     close: null,
    //     collapsed: false,
    //     closeOnMapClick: false
    // })
    //     .addTo(map)
    //     .addContent(document.getElementById('map').nextElementSibling);
    // function isFlowLayer(name) {
    //     return name.toLowerCase().indexOf('flow') >= 0;
    // }
    // function isVectorLayer(name) {
    //     return name.toLowerCase().indexOf('vector') >= 0;
    // }
    // function updateTrafficFlowStyle() {
    //     var selectedOption = this.value;
    //     vectorTrafficFlowOptions.style = selectedOption;
    //     trafficFlowOptions.style = selectedOption;
    //     map.eachLayer(function(layer) {
    //         if (!isFlowLayer(layer.name)) {
    //             return;
    //         }
    //         if (isVectorLayer(layer.name)) {
    //             layer.updateOptions({style: selectedOption});
    //         } else {
    //             layer.options.style = selectedOption;
    //             layer.redraw();
    //         }
    //     });
    // }
    // var trafficLayer = window.tomtom.L.MapUtils.findLayersByName('vectorTrafficFlow', map)[0];
    // function updateBaseLayer() {
    //     map.setMapSource(this.value);
    //     if (trafficLayer) {
    //         trafficLayer.bringToFront();
    //     }
    // }
    // function createTrafficLayer(name) {
    //     switch (name) {
    //     case 'vectorTrafficFlow':
    //         return new window.tomtom.L.TomTomVectorTrafficFlowLayer(vectorTrafficFlowOptions);
    //     case 'trafficFlow':
    //         return new window.tomtom.L.TomTomTrafficFlowLayer(trafficFlowOptions);
    //     default:
    //         return null;
    //     }
    // }
    // function switchTraffic(event) {
    //     var layerName = event.target.value;
    //     map.removeLayer(trafficLayer);
    //     trafficLayer = createTrafficLayer(layerName);
    //     map.addLayer(trafficLayer);
    //     if (trafficLayer) {
    //         trafficLayer.bringToFront();
    //     }
    // }
    // document.getElementById('trafficStyle').onchange = updateTrafficFlowStyle;
    // document.getElementById('baseLayer').onchange = updateBaseLayer;
    // document.getElementById('trafficLayer').onchange = switchTraffic;
    // (function initializeTileSwitcher() {
    //     var baseLayerSelect = document.getElementById('baseLayer');
    //     var layers = map.getBaseLayers();
    //     function newOption(value, label, selected) {
    //         var option = document.createElement('option');
    //         option.value = value;
    //         option.text = label;
    //         if (selected) {
    //             option.selected = 'selected';
    //         }
    //         return option;
    //     }
    //     if (layers.raster) {
    //         baseLayerSelect.appendChild(newOption('raster', 'Raster'));
    //     }
    //     if (layers.vector) {
    //         baseLayerSelect.appendChild(newOption('vector', 'Vector', true));
    //     }
    // })();
    }

    
  }
    


    render() {
        return (
            <div className="body">
            <body class='use-all-space'>
                <div class='map-container use-all-space'>
                <div id='map' class='use-all-space'></div>
                <div>
                    <label for='trafficStyle'>
                        <span>Traffic flow style</span>
                        <select id='trafficStyle' name='trafficStyle' autocomplete='off'>
                            <option value='absolute'>absolute</option>
                            <option value='relative' selected='selected'>relative</option>
                            <option value='relative-delay'>relative-delay</option>
                        </select>
                    </label>
                    <label for='baseLayer'>
                        <span>Base Layer</span>
                        <select id='baseLayer' name='baseLayer'></select>
                    </label>
                    <label for='trafficLayer'>
                        <span>Traffic Layer</span>
                        <select id='trafficLayer' name='baseLayer'>
                            <option value='vectorTrafficFlow'>Vector</option>
                            <option value='trafficFlow'>Raster</option>
                        </select>
                    </label>
                </div>
            </div>
            </body>

            </div>
            )
    }
}

export default CurrentTraffic;