import React from 'react'
import Layout from '../components/layout'
import Map from '../components/map/map'

class MapPage extends React.Component {

  render() {
    return(
      <Layout title={"Map"}>
        <Map />
      </Layout>
    )
  }
}

export default MapPage
