import React from 'react'
import Layout from '../components/layout'
import Fab from '@material-ui/core/Fab';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import WriteIcon from '@material-ui/icons/Edit';
import { Link } from 'gatsby'
import Post from "../components/post"
import withRoot from '../withRoot'

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },

});


class MessagePage extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <Layout title={"Messaging"}>
        <Post/>
        <Post/>
        <Fab color="secondary" component={Link} to={"compose"} className={classes.fab}><WriteIcon/></Fab>
      </Layout>
    )
  }
}

export default withRoot(withStyles(styles)(MessagePage))
