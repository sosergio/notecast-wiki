import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({  
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  mainContentParagraph: {
    marginTop: theme.spacing(3),
  }
}));

function CompetitorsScreen() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            Competitors Review
          </Typography>
          <Divider />
          <Typography className={classes.mainContentParagraph}>
          available doing the same thing with annotated screen captures if possible
          available doing the same thing with annotated screen captures if possible
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} className={classes.sidebarAboutBox}>
            <Typography variant="h6" gutterBottom>
              About
            </Typography>
            <Typography>
              Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
              amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default CompetitorsScreen;
