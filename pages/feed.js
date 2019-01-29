import React from 'react'
import Layout from '../components/layout'
import Fab from '@material-ui/core/Fab';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import WriteIcon from '@material-ui/icons/Edit';


import Link from 'next/link'
import Post from "../components/post"
import {notifications} from '../util/deviceData'

import {getJson} from "../util/io"


import fetch from 'isomorphic-unfetch'

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },

})



class Feed extends React.Component {

  static async getInitialProps (props)  {
    const res = await fetch('http://localhost:3000/api/posts/')
    const data = await res.json()

    console.log(`Fetched ${data.length} posts`)

    return {
      posts: data
    }
  }

  componentDidMount(){
    notifications()
  }

  render() {

    const { classes } = this.props



    return (
      <Layout title={"Messages"}>

        {
          this.props.posts.map((post) =>
            <Post key={post.id} post={post}/>
          )
        }

        <Link href={"compose"}><Fab color="secondary"   className={classes.fab}><WriteIcon/></Fab></Link>

      </Layout>
    )
  }
}

export default withStyles(styles)(Feed)