import React from 'react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import {
  useLocation
} from "react-router-dom";

const useStyles = makeStyles(theme => ({  
  footer: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  footerDivider: {
    marginBottom: theme.spacing(3),
  },
  footerButtons:{
    display: 'flex',
    justifyContent: 'space-between'
  },
  footerButton:{
    textTransform: 'none',
    fontWeight: 'normal'
  }
}));

function FooterNavigation(props) {
  const menuItems = [
    {text: 'Home', path: '/', icon: 'home'},
    {text: 'Personas', path: '/personas', icon: 'portrait'},
    {text: 'Sketches', path: '/sketches', icon: 'photo'},
    {text: 'Competitors', path: '/competitors', icon: 'format_quote'},
    {text: 'Technologies', path: '/technologies', icon: 'memory'}
  ];
  const classes = useStyles();
  let location = useLocation();
  const indexOfCurrent = menuItems.findIndex(x => x.path === location.pathname);

  let prevItem = indexOfCurrent > 0 ? menuItems[indexOfCurrent - 1] : null;
  let nextItem = indexOfCurrent < menuItems.length - 1 ? menuItems[indexOfCurrent + 1] : null;

  return (
    <footer className={classes.footer}>
      <Divider className={classes.footerDivider} />
      <div className={classes.footerButtons}>
        {prevItem ? (
          <Button size="small" 
            disabled={!prevItem} 
            to={prevItem.path} 
            className={classes.footerButton}
            component={Link}>
            <KeyboardArrowLeft />
            {prevItem.text}
          </Button>
        ):(
          <span></span>
        )}
        {nextItem ? (
          <Button size="small" 
            disabled={!nextItem} 
            to={nextItem.path} 
            className={classes.footerButton}
            component={Link}>
            <KeyboardArrowRight />
            {nextItem.text}
          </Button>
        ):(
          <span></span>
        )}
      </div>
    </footer>
  );
}

export default FooterNavigation;
