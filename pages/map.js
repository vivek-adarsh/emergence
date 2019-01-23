import React from 'react'
import Layout from '../components/layout'
import Map from '../components/map/map'
import withRoot from '../util/withRoot'
import {geoLocation} from "../util/deviceData"
import Head from 'next/head'


class MapPage extends React.Component {

  constructor() {
    super();

    //Set Defaults
    this.state = {
      location: null
    }
  }

  componentDidMount(){
    geoLocation(this)
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

export default withRoot(MapPage)
