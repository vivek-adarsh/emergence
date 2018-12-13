import React from 'react';
import {Link} from 'gatsby'
import {List, ListItem, ListItemIcon, ListSubheader, ListItemText} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ConversationIcon from '@material-ui/icons/QuestionAnswer'
import AssignmentIcon from '@material-ui/icons/Assignment';
import Divider from '@material-ui/core/Divider/Divider'

import MapIcon from '@material-ui/icons/Map'

export default (props) => (
  <>
    <Divider />
    <List>

      <ListItem button component={Link} to={"/"}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <ListItem button component={Link} to={"map"}>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary="Map" />
      </ListItem>
      <ListItem button component={Link} to={"messaging"}>
        <ListItemIcon>
          <ConversationIcon />
        </ListItemIcon>
        <ListItemText primary="Messaging" />
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListSubheader inset>Admin Functions</ListSubheader>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Report" />
      </ListItem>
    </List>
  </>
)