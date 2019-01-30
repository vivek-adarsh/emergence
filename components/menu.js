import React from 'react'
import Link from 'next/link'

import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import {
  Dashboard as DashboardIcon,
  QuestionAnswer as FeedIcon,
  Map as MapIcon,
  Help as HelpIcon,
  Person as ProfileIcon,
  Edit as ComposeIcon
} from '@material-ui/icons'
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
