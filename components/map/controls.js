import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails,
  Input, MenuItem, InputLabel, FormControl, Select } from '@material-ui/core';
import {ExpandMore as ExpandMoreIcon} from '@material-ui/icons';

const styles = theme => ({
  panel: {
    margin: "-24px",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
})

class MapControl extends React.Component {

  constructor() {
    super()

    //Set Defaults
    this.state = {
      type: "points"
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });

  }
  componentWillMount() {}

  render() {
    const { classes } = this.props
    return(
      <>
        <ExpansionPanel  className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Layers</Typography>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="layer-type">Type</InputLabel>
                <Select
                  value={this.state.type}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'Type',
                    id: 'layer-type',
                  }}
                >
                  <MenuItem value={"points"}>Points</MenuItem>
                  <MenuItem value={"heatmap"}>Heatmap</MenuItem>
                </Select>
              </FormControl>

          </ExpansionPanelSummary>
          <ExpansionPanelDetails>

          </ExpansionPanelDetails>
        </ExpansionPanel>
      </>
    )
  }
}

export default withStyles(styles)(MapControl)
