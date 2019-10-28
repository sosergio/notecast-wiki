import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import personasData from './../data/personasData';
import Persona from './../components/Persona';

const useStyles = makeStyles(theme => ({  
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  mainContentParagraph: {
    marginTop: theme.spacing(3),
  }
}));

function PersonasScreen() {
  const classes = useStyles();
  
  return (
    <div>
    <Grid container spacing={5}>
      <Grid item xs={12} md={8}>
        <Typography variant="h6" gutterBottom>
          Personas
        </Typography>
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Persona data={personasData[0]}></Persona>
          </Grid>
          <Grid item xs={12} md={6}>
            <Persona data={personasData[1]}></Persona>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper elevation={0} className={classes.sidebarAboutBox}>
          <Typography variant="h6" gutterBottom>
            About
          </Typography>
          <Typography paragraph>
            Protopersonas representing the users of Notecast.
          </Typography>
          <Typography paragraph>
            They are a collection of heuristics, market research, and intuition presenting an opportunity to articulate the target audience, their needs, and behaviors.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    </div>
  );
}

export default PersonasScreen;
