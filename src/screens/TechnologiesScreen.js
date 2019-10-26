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
          <b>React Native</b> is a framework that allows us to build native (iOS and Android) apps using the React JavaScript framework. 
          While React Native also permits development in native languages for Android and iOS, Expo, on the other hand, only permits the use of purely JavaScript and React 
          for the purpose of development, and provides the Software Development Kit (SDK) and the build environment so that we can only use the provided modules for native development. 
          </Typography>
          <Typography className={classes.mainContentParagraph}>
          Recently, with the release of React Native for Web, React Native has introduced a new addition to its supporting platforms. 
          Expo, in accordance with the current trend, has started supporting the beta version of Expo Web with the release of Expo SDK v33.0.0 in June. 
          Expo Web enables the implementation of a mobile Web and also support Progressive Web Apps (PWA). 
          This means that the components provided by React Native and Expo can not only be built for the native app, 
          but also can be executed on the web using the same components. 
          As is true for React, ReactDom is used for rendering on the web.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} className={classes.sidebarAboutBox}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Typography>
              A list of the technologies/frameworks to be used creating the app and how confident you are with each right now.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default TechnologiesScreen;
