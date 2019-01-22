import React from 'react'
import Layout from '../components/layout'
import MapNew from '../components/map/map'
import withRoot from '../util/withRoot'
import {geoLocation} from "../util/deviceData"

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
        <MapNew />
      </Layout>
    )
  }
}

export default withRoot(MapPage)
