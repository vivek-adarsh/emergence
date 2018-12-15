import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import PostIcon from '@material-ui/icons/Send';
import MapIcon from '@material-ui/icons/EditLocation';
import GpsIcon from '@material-ui/icons/GpsFixed';
import GpsNoIcon from '@material-ui/icons/GpsNotFixed';
import CameraIcon from '@material-ui/icons/PhotoCamera'
import FileIcon from '@material-ui/icons/Image'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: "100%"
  },
  input: {
    display: 'none',
  },
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },

});




function getLocation(){
  let fetchedLocation
  if (!('geolocation' in navigator)) {
    return;
  }

  navigator.geolocation.getCurrentPosition(function (position) {
    fetchedLocation = {lat: position.coords.latitude, lng: position.coords.longitude};
    locationInput.value = ('Lat: '+ fetchedLocation.lat + ', Long: ' + fetchedLocation.lng);
    document.querySelector('#manual-location').classList.add('is-focused');
  }, function (err) {
    console.log(err);

    fetchedLocation = {lat: 0, lng: 0};
  }, {timeout: 7000});

  console.log(fetchedLocation)
}


class ComposePage extends React.Component {


  render() {

    const { classes } = this.props;

    return (
      <Layout title={"Compose"}>
        <form>
          <Grid container spacing={6} justify="flex-end">

            <Grid item xs={12}>
          <TextField
            required
            id="title"
            label="Title"
            defaultValue=""
            className={classes.textField}
            margin="normal"
          />
            </Grid>

            <Grid item xs={12}>
          <TextField
            id="body"
            label="Post"
            placeholder="What would you like to say?"
            multiline
            rows="6"
            className={classes.textField}
            margin="normal"
          />
            </Grid>

            <Grid item xs={1}>
              <IconButton color="primary" className={classes.button} component="span">
                <MapIcon />
              </IconButton>
            </Grid>

            <Grid item xs={1}>
          <IconButton color="primary" className={classes.button} component="span">
            <CameraIcon />
          </IconButton>
            </Grid>

            <Grid item xs={1}>
          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" className={classes.button} component="span">
              <FileIcon />
            </IconButton>
          </label>
            </Grid>

            <Grid item xs={2} justify="flex-end">

          <Button variant="contained" color="primary" className={classes.button}>
            Post <PostIcon className={classes.rightIcon} />
          </Button>
            </Grid>
          </Grid>
        </form>

      </Layout>
    )
  }
}

ComposePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposePage);
