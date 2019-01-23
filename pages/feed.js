import React from 'react'
import Layout from '../components/layout'
import Fab from '@material-ui/core/Fab';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import WriteIcon from '@material-ui/icons/Edit';


import Link from 'next/link'
import Post from "../components/post"
import withRoot from '../util/withRoot'
import {notifications} from '../util/deviceData'


const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },

})



class MessagePage extends React.Component {

  componentDidMount(){
    notifications()
  }



  render() {

    const { classes } = this.props;

    return (
      <Layout title={"Messaging"}>

        {
          //this.props.data.allMongodbEmergencePosts.edges.map((item) =>
            //<Post key={item.node.id} post={item.node}/>
          //)
        }



        <Link href={"compose"}><Fab color="secondary"   className={classes.fab}><WriteIcon/></Fab></Link>

      </Layout>
    )
  }
}

export default withRoot(withStyles(styles)(MessagePage))

