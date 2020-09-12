import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


import Routes from './Routes'

export default function App() {
    return (
        <List>
          {Routes.map((route, index) => (
            <ListItem button key={route.index} component={Link} to={route.path}>
                <ListItemIcon>{route.index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={route.name} />
            </ListItem>
          ))}
        </List>
    );
  }