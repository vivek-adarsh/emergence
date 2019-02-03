import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Map from '../components/map/map'
import MapControls from '../components/map/controls'
import {getJson} from "../util/io"

class MapPage extends React.Component {

  static async getInitialProps () {
    return {
      layers: await getJson("layers")
    }
  }

  render() {
    return(
      <Layout title={"Map"}>
        <Head>
          <link rel="stylesheet" href="/static/leaflet.css" />
        </Head>
        <MapControls/>
        <Map layers={this.props.layers}/>
      </Layout>
    )
  }
}

export default MapPage
