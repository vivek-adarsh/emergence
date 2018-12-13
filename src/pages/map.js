import React from 'react'
import Layout from '../components/layout'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

import "../components/leaflet.css"

const position = [34.414079, -119.876107]

class MapPage extends React.Component {


  render() {
    return <Layout title={"Map"}>
      <Map center={position} zoom={16} style={{height:"500px", border:"1px solid #000000"}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

      </Map>
    </Layout>
  }
}

export default MapPage
