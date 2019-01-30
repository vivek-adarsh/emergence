import React from 'react'

// Leaflet does not allow server side rendering
// This component loads the map on page load dynamically

class Map extends React.Component {

  geojsonFeature = {
    "type": "Feature",
    "properties": {
      "name": "Coors Field",
      "amenity": "Baseball Stadium",
      "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [[
        [-119.876, 34.414],
        [-119.877, 34.415],
        [-119.876, 34.416],
      ]]
    }
  }

  mapStyle = {
    height: "90vh",
    margin: "-24px",
    border: "1px solid #000000"
  }

  constructor() {
    super()

    //Set Defaults
    this.state = {}

    this.setupMap = this.setupMap.bind(this)
  }

  setupMap(m){
    try {
      let L = require('leaflet')
      let HM = require('leaflet-heatmap')

      let baseLayer = L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors',
          maxZoom: 18
        }
      )

      let testData = {
        max: 8,
        data: [{lat: 34.414, lng:-119.876, count: 8},{lat: 34.415, lng:-119.879, count: 5}]
      }


      let heatmapLayer = new HM({
        "radius": 0.003,
        "maxOpacity": .8,
        "scaleRadius": true, // scales the radius based on map zoom
        "useLocalExtrema": false,  // if false uses the global maximum for colorization
        latField: 'lat',    // name of latitude field - default "lat"
        lngField: 'lng',    // name of longitude field - default "lng"
        valueField: 'count' // name of value field - default "value"
      })
      heatmapLayer.setData(testData)

      let map = L.map(m, {
        center: this.props.position,
        zoom: this.props.zoom,
        layers: [baseLayer, heatmapLayer]
      })

      let layerControl = L.control.layers()
      layerControl.addOverlay(heatmapLayer, "Heatmap")
      layerControl.addTo(map)



    }
    catch (e) {
      console.log(e)
      m = "Map Not supported"
    }
  }

  componentWillMount() {
  }

  render() {
    return(
      <>
       <div id="map" ref={this.setupMap}  style={this.mapStyle} />
      </>
    )
  }
}

Map.defaultProps = {
  zoom: 16,
  position: [34.414079, -119.876107]
}

export default Map
