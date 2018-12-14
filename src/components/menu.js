import React from 'react';
import {Link} from 'gatsby'
import {List, ListItem, ListItemIcon, ListSubheader, ListItemText} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FeedIcon from '@material-ui/icons/QuestionAnswer'
import MapIcon from '@material-ui/icons/Map'

import ProfileIcon from '@material-ui/icons/Person';
import ComposeIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider/Divider'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export default (props) => (
  <>
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
      <ListItem button component={Link} to={"feed"}>
        <ListItemIcon>
          <FeedIcon />
        </ListItemIcon>
        <ListItemText primary="Feed" />
      </ListItem>
      <ListItem button component={Link} to={"compose"}>
        <ListItemIcon>
          <ComposeIcon />
        </ListItemIcon>
        <ListItemText primary="Message" />
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListSubheader inset>User Info</ListSubheader>
      <ListItem button  component={Link} to={"profile"}>
        <ListItemIcon>
          <ProfileIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </List>
  </>
)