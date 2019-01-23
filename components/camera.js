import React from 'react'
import Webcam from "react-webcam"
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../util/withRoot'

class Camera extends React.Component {

  setRef = camera => {
    this.camera = camera
  }

  capture = () => {
    this.props.onCapture(this.camera.getScreenshot())
  }

  constructor() {
    super();

    //Set Defaults
    this.state = {
      image: null,
    }

    this.setRef = this.setRef.bind(this)
    this.capture = this.capture.bind(this)


  }


  render() {

    return (
      <>
        <Webcam
          audio={false}
          width={"100%"}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
        />
        <button onClick={this.capture}>Capture photo</button>
      </>
    )
  }

}

export default Camera
