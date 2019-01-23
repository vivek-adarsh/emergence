import React from 'react'
import Link from 'next/link'

import {List, ListItem, ListItemIcon, ListSubheader, ListItemText} from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'
import FeedIcon from '@material-ui/icons/QuestionAnswer'
import MapIcon from '@material-ui/icons/Map'
import HelpIcon from '@material-ui/icons/Help'
import ProfileIcon from '@material-ui/icons/Person'
import ComposeIcon from '@material-ui/icons/Edit'
import Divider from '@material-ui/core/Divider/Divider'

export default () => (
  <>
    <List >
      <Link href={"/"}>
        <ListItem button >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>

      <Link href={"map"}>
        <ListItem button >
          <ListItemIcon>
            <MapIcon />
          </ListItemIcon>
          <ListItemText primary="Map" />
        </ListItem>
      </Link>

      <Link href={"feed"}>
        <ListItem button >
          <ListItemIcon>
            <FeedIcon />
          </ListItemIcon>
          <ListItemText primary="Feed" />
        </ListItem>
      </Link>

      <Link href={"compose"}>
        <ListItem button >
          <ListItemIcon>
            <ComposeIcon />
          </ListItemIcon>
          <ListItemText primary="Message" />
        </ListItem>
      </Link>

      <Link href={"help"}>
        <ListItem button >
          <ListItemIcon>
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
      </Link>
    </List>

    <Divider />
    <List>
      <Link href={"profile"}>
        <ListItem button >
          <ListItemIcon>
            <ProfileIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </Link>
    </List>
  </>
)