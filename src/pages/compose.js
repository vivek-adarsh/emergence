import React from 'react'
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
import withRoot from '../util/withRoot'
import {geoLocation} from "../util/deviceData"

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

})

let fileReader

class ComposePage extends React.Component {

  constructor() {
    super();

    //Set Defaults
    this.state = {
      title: "",
      body: "",
      image: null,
      location: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    geoLocation(this)
  }

  handleFileChosen = (file)  => {
    fileReader = new FileReader()
    fileReader.onloadend = function(e){
      file
    }
  }

  handleChange = name => event => {
    this.setState( {[name]: event.target.value})
    console.log({[name]: event.target.value})
  }

  handleSubmit = (event) => {
    //Make a network call somewhere
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    const { classes } = this.props;

    return (
      <Layout title={"Compose"}>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={16} justify="flex-end">

            <Grid item xs={12}>
              <TextField
                required
                id="title"
                label="Title"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                onChange={this.handleChange("title")}
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
                onChange={this.handleChange("body")}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton color="primary"
                          className={classes.button}
                          component="span">
                {this.state.location?<GpsIcon/>:<GpsNoIcon/>}
              </IconButton>
            </Grid>


            <Grid item xs={1}>
              <IconButton color="primary"
                          className={classes.button}
                          component="span">
                <CameraIcon />
              </IconButton>
            </Grid>

            <Grid item xs={1}>
              <input accept="image/*"
                     className={classes.input}
                     id="image-file"
                     onChange={this.handleChange("image")}
                     type="file" />
              <label htmlFor="image-file">
                <IconButton color="primary"
                            className={classes.button}
                            component="span">
                  <FileIcon />
                </IconButton>
              </label>
            </Grid>

            <Grid item xs={2} >
              <Button variant="contained"
                      color="secondary"
                      className={classes.button}
                      disabled={!this.state.title}
                      type="submit">
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
}

export default withRoot(withStyles(styles)(ComposePage))
