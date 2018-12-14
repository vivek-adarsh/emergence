import React from 'react'
import "./leaflet.css"

// Leaflet does not allow server side rendering
// This component loads the map on page load not
// during static compliation

class Map extends React.Component {

  componentWillMount() {

    try {
      let { Map, Marker, Popup, TileLayer } = require('react-leaflet')
      this.map = (
        <Map center={this.props.position} zoom={this.props.zoom} style={{ height: "500px", border: "1px solid #000000" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />

        </Map>
      )
    }
    catch (e) {
      this.map = "Map Not supported"
    }
  }

  render() {
    return(
      <>
        {this.map}
      </>
    )
  }
}

Map.defaultProps = {
  zoom: 16,
  position: [34.414079, -119.876107]
};

export default Map
