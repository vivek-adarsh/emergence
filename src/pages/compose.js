import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import PostIcon from '@material-ui/icons/Send';
import CameraIcon from '@material-ui/icons/PhotoCamera'
import CloseIcon from '@material-ui/icons/Close'

import Webcam from "react-webcam";
import FileIcon from '@material-ui/icons/Image'
import IconButton from '@material-ui/core/IconButton'
import Fab from '@material-ui/core/Fab/Fab'

const styles = theme => ({

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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



class ComposePage extends React.Component {


  render() {

    const { classes } = this.props;

    return (
      <Layout title={"Compose"}>

        <IconButton color="secondary" component={Link} to={"/messaging"}  className={classes.button}>
          <CloseIcon />
        </IconButton>


        <form>

          <TextField
            required
            id="title"
            label="Title"
            defaultValue=""
            className={classes.textField}
            margin="normal"
          />

          <TextField
            id="body"
            label="Post"
            placeholder="Placeholder"
            multiline
            className={classes.textField}
            margin="normal"
          />

          <IconButton color="primary" className={classes.button} component="span">
            <CameraIcon />
          </IconButton>

          <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
            <IconButton color="primary" className={classes.button} component="span">
              <FileIcon />
            </IconButton>
          </label>


          <Button variant="contained" color="primary" className={classes.button}>
            Post <PostIcon className={classes.rightIcon} />
          </Button>

        </form>

      </Layout>
    )
  }
}

ComposePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposePage);
