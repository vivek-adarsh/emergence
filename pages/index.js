import React from 'react'
import Layout from '../components/layout'
import withRoot from '../util/withRoot';
import Card from '../components/card'

import FeedIcon from '@material-ui/icons/QuestionAnswer'
import MapIcon from '@material-ui/icons/Map'
import HelpIcon from '@material-ui/icons/Help';
import ProfileIcon from '@material-ui/icons/Person';

class IndexPage extends React.Component {


  render() {
    return (
      <Layout title={"Emergence"}>
        <Card title="Feed" to="feed"><FeedIcon/></Card>
        <Card title="Map" to={"map"}><MapIcon/></Card>
      </Layout>
    )
  }
}

export default withRoot(IndexPage);