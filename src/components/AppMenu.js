import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import {
  useHistory,
  useLocation
} from "react-router-dom";

function AppMenu(props) {
  const { classes, onSelect } = props;
  const menuItems = [
    {text: 'Home', path: '/', icon: 'home'},
    {text: 'Personas', path: '/personas', icon: 'portrait'},
    {text: 'Sketches', path: '/sketches', icon: 'photo'},
    {text: 'Competitors', path: '/competitors', icon: 'format_quote'},
    {text: 'Technologies', path: '/technologies', icon: 'memory'}
  ];
  let history = useHistory();
  let location = useLocation();
  
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
        {menuItems && menuItems.map((item, index) => (
          <ListItem 
            button 
            key={item.text} 
            onClick={e => onItemSelect(item.path)}
            selected={location.pathname === item.path}>
            <ListItemIcon><Icon>{item.icon}</Icon></ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default AppMenu;