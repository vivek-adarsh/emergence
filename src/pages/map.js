import React from 'react'
import Layout from '../components/layout'
import L from 'leaflet';


class MapPage extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }

  render() {
    return <Layout title={"Map"}>
        <div id="map" />
      </Layout>

  }
}

export default MapPage
