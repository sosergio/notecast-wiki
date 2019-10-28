import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({  
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  mainContentParagraph: {
    marginTop: theme.spacing(3),
  }
}));

function TechnologiesScreen() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            Technologies
          </Typography>
          <Divider />
          <br/>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Area</TableCell>
                  <TableCell>Experience</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Javascript</TableCell>
                  <TableCell>Programming Language</TableCell>
                  <TableCell>High Proficiency</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>NPM</TableCell>
                  <TableCell>Package Manager</TableCell>
                  <TableCell>High Proficiency</TableCell>
                </TableRow>
                <TableRow key="3">
                  <TableCell>Material UI</TableCell>
                  <TableCell>Component Library</TableCell>
                  <TableCell>New</TableCell>
                </TableRow>
                <TableRow key="4">
                  <TableCell>React Native</TableCell>
                  <TableCell>Framework</TableCell>
                  <TableCell>New</TableCell>
                </TableRow>
                <TableRow key="5">
                  <TableCell>Expo</TableCell>
                  <TableCell>Mobile SDK</TableCell>
                  <TableCell>New</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>

          <Typography className={classes.mainContentParagraph}>
          React Native is a framework that allows us to build native (iOS and Android) apps using the React JavaScript framework. 
          Expo is a toolchain built around React Native to help us quickly start an app. It provides a set of tools that simplify 
          the development and testing of React Native app and provides components of users interface and services that are usually 
          available in third-party native React Native components.
          </Typography>
          <Typography paragraph>
          Expo, in accordance with the current trend, has started supporting the beta version of Expo Web with the release of Expo SDK v33.0.0 in June. 
          Expo Web enables the implementation of a mobile Web and also support Progressive Web Apps (PWA). 
          This means that the components provided by React Native and Expo can not only be built for the native app, 
          but also can be executed on the web using the same components.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} className={classes.sidebarAboutBox}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Typography>
              In this page it is presented the list of the technologies and frameworks that will be used 
              to create Notecast, including the level of confidence with each at the moment of starting the development.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default TechnologiesScreen;
