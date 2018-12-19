import React from 'react'
import Layout from '../components/layout'
import withRoot from '../withRoot'


class HelpPage extends React.Component {


  render() {
    return (
      <Layout title={"Help"}>
        <h3>Need Help?</h3>
        <p>Learn how to use this app.</p>
      </Layout>
    )
  }
}

export default withRoot(HelpPage)