import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import {
  useHistory
} from "react-router-dom";
  
function AppMenu(props) {
      const { classes, onSelect } = props;
      let history = useHistory();
      const menuItems = [
        {text: 'Home', path: '/'},
        {text: 'Personas', path: '/personas'},
        {text: 'Sketches', path: '/sketches'},
        {text: 'Critique', path: '/critique'},
        {text: 'Technologies', path: '/technologies'}
      ];
    
      const onItemSelect = (path) => {
        history.push(path);
        if(onSelect) {
          onSelect();
        }
      }

      return(
        <div>
          <div className={classes.toolbar} />
          <Divider />
          <List>
            {menuItems.map((item, index) => (
              <ListItem button key={item.text} onClick={e => onItemSelect(item.path)}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      );
}

export default AppMenu;