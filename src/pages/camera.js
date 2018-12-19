import React from 'react'
import Layout from '../components/layout'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import PostIcon from '@material-ui/icons/Send';
import CameraIcon from '@material-ui/icons/PhotoCamera'

import Webcam from "react-webcam";
import FileIcon from '@material-ui/icons/Image'
import IconButton from '@material-ui/core/IconButton'
import withRoot from '../withRoot'

const styles = theme => ({

});


class ComposePage extends React.Component {

  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    console.log(imageSrc)
  };


  render() {

    const { classes } = this.props;

    return (
      <Layout title={"Compose"}>

        <Webcam
          audio={false}
          height={350}
          width={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"

        />

        <button onClick={this.capture}>Capture photo</button>
      </Layout>
    )
  }
}

ComposePage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(ComposePage))
