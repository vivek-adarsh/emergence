import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Map from '../components/map/map'

import {getJson} from "../util/io"


class MapPage extends React.Component {

  static async getInitialProps () {
    return {
      layers: getJson("layers")
    }
  }

  render() {
    return(
      <Layout title={"Map"}>
        <Head>
          <link rel="stylesheet" href="/static/leaflet.css" />
        </Head>
        <Map />
      </Layout>
    )
  }
}

export default MapPage
