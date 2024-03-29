import React from 'react';
import {
  // BrowserRouter as Router,
  MemoryRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import GoalsScreen from './screens/GoalsScreen'
import PersonasScreen from './screens/PersonasScreen';
import CompetitorsScreen from './screens/CompetitorsScreen'
import WireframesScreen from './screens/WireframesScreen';
import TechnologiesScreen from './screens/TechnologiesScreen'
import AppMenu from './components/AppMenu' ;
import FooterNavigation from './components/FooterNavigation' ;
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  html: {
    [theme.breakpoints.up("sm")]: {
      fontSize: 18
    }
  },
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  mainContentParagraph: {
    marginTop: theme.spacing(3),
  }
}));

function App(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={e => setMobileOpen(true)}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Notecast Wiki
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={e => setMobileOpen(false)}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true
              }}
            >
              <AppMenu 
                classes={classes} 
                onSelect={e => setMobileOpen(false)}></AppMenu>
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open>
              <AppMenu classes={classes}></AppMenu>
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path="/">
              <GoalsScreen />
            </Route>
            <Route path="/personas">
              <PersonasScreen />
            </Route>
            <Route path="/wireframes">
              <WireframesScreen />
            </Route>
            <Route path="/competitors">
              <CompetitorsScreen />
            </Route>
            <Route path="/technologies">
              <TechnologiesScreen />
            </Route>
          </Switch>
          <FooterNavigation />
        </main>
      </Router>
    </div>
  );
}

export default App;