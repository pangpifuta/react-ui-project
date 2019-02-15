import React, { Component } from 'react'
import Link from 'react-router-dom'
import './Body.css'

{/* <div class="mapouter"><div class="gmap_canvas"><iframe width="924" height="724" id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.pureblack.de/webdesign-mainz/">webdesigner mainz</a></div><style>.mapouter{text-align:right;height:724px;width:924px;}.gmap_canvas {overflow:hidden;background:none!important;height:724px;width:924px;}</style><a href="https://www.google.com/search?q=pureblack.de">Maps by Google.com</a></div> */}

class CurrentTraffic extends Component {
    render() {
        return (

    
            <div className="body">
{/* var trafficFlowOptions = {
    key: 'y8jkIzSUtIWNzMjmGDNlQMDmIX7bGdCT',
    style: 'relative'
};
var vectorTrafficFlowOptions = {
    key: 'y8jkIzSUtIWNzMjmGDNlQMDmIX7bGdCT',
    refresh: 180000,
    style: 'relative'
};
var map = tomtom.map('map', {
    key: 'y8jkIzSUtIWNzMjmGDNlQMDmIX7bGdCT',
    source: ['vector', 'raster'],
    basePath: '<your-tomtom-sdk-base-path>',
    vectorTrafficFlow: vectorTrafficFlowOptions,
    center: [51.50276, -0.12634],
    zoom: 15
});
var languageLabel = L.DomUtil.create('label');
languageLabel.innerHTML = 'Maps language';
var languageSelector = tomtom.languageSelector.getHtmlElement(tomtom.globalLocaleService, 'maps');
languageLabel.appendChild(languageSelector);
tomtom.controlPanel({
    position: 'bottomright',
    title: 'Settings',
    collapsed: true,
    closeOnMapClick: false
})
    .addTo(map)
    .addContent(languageLabel);
tomtom.controlPanel({
    position: 'topright',
    title: null,
    show: null,
    close: null,
    collapsed: false,
    closeOnMapClick: false
})
    .addTo(map)
    .addContent(document.getElementById('map').nextElementSibling);
function isFlowLayer(name) {
    return name.toLowerCase().indexOf('flow') >= 0;
}
function isVectorLayer(name) {
    return name.toLowerCase().indexOf('vector') >= 0;
}
function updateTrafficFlowStyle() {
    var selectedOption = this.value;
    vectorTrafficFlowOptions.style = selectedOption;
    trafficFlowOptions.style = selectedOption;
    map.eachLayer(function(layer) {
        if (!isFlowLayer(layer.name)) {
            return;
        }
        if (isVectorLayer(layer.name)) {
            layer.updateOptions({style: selectedOption});
        } else {
            layer.options.style = selectedOption;
            layer.redraw();
        }
    });
}
var trafficLayer = L.MapUtils.findLayersByName('vectorTrafficFlow', map)[0];
function updateBaseLayer() {
    map.setMapSource(this.value);
    if (trafficLayer) {
        trafficLayer.bringToFront();
    }
}
function createTrafficLayer(name) {
    switch (name) {
    case 'vectorTrafficFlow':
        return new L.TomTomVectorTrafficFlowLayer(vectorTrafficFlowOptions);
    case 'trafficFlow':
        return new L.TomTomTrafficFlowLayer(trafficFlowOptions);
    default:
        return null;
    }
}
function switchTraffic(event) {
    var layerName = event.target.value;
    map.removeLayer(trafficLayer);
    trafficLayer = createTrafficLayer(layerName);
    map.addLayer(trafficLayer);
    if (trafficLayer) {
        trafficLayer.bringToFront();
    }
}
document.getElementById('trafficStyle').onchange = updateTrafficFlowStyle;
document.getElementById('baseLayer').onchange = updateBaseLayer;
document.getElementById('trafficLayer').onchange = switchTraffic;
(function initializeTileSwitcher() {
    var baseLayerSelect = document.getElementById('baseLayer');
    var layers = map.getBaseLayers();
    function newOption(value, label, selected) {
        var option = document.createElement('option');
        option.value = value;
        option.text = label;
        if (selected) {
            option.selected = 'selected';
        }
        return option;
    }
    if (layers.raster) {
        baseLayerSelect.appendChild(newOption('raster', 'Raster'));
    }
    if (layers.vector) {
        baseLayerSelect.appendChild(newOption('vector', 'Vector', true));
    }
})(); */}
            </div>
            )
    }
}

export default CurrentTraffic;