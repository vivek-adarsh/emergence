import React from 'react'
import Layout from '../components/layout'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField/TextField'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot'

const styles = theme => ({

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,

    minWidth: "90%"
  }

});




class ProfilePage extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <Layout title={"Profile"}>
        <Grid container spacing={12} justify="flex-end">

          <Grid item xs={6}>
            <TextField
              required
              id="firstname"
              label="First Name"
              defaultValue=""
              className={classes.textField}
              margin="normal"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="lastname"
              label="Last Name"
              defaultValue=""
              className={classes.textField}
              margin="normal"
            />
          </Grid>
        </Grid>

      </Layout>
    )
  }
}



export default withRoot(withStyles(styles)(ProfilePage))
