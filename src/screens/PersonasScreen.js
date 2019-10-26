import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({  
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  mainContentParagraph: {
    marginTop: theme.spacing(3),
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  avatar: {
    margin: 10,
    width: 90,
    height: 90,
    padding: theme.spacing(1),
    border:`1px dashed #3f51b5`,
  },
  list: {
    marginTop:0,
    paddingRight:'10px',
    fontSize: '14px'
  },
  noSpacing:{
    padding:0,
    margin:'0 0 5px 0'
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
        <br/>

        {/* FIRST PERSONA BEGIN */}
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar aria-label="robert" src="/robert.png" className={classes.avatar} />}
            title={<b>ROBERT, 43</b>}
            subheader="From East Sussex, Lives in London, Marketing manager"
          />
        </Card>

        <ExpansionPanel className={classes.card}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header">
            <Typography className={classes.heading}>Demographic</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.noSpacing}>
              <ul className={classes.list}>
                <li>Single</li>
                <li>Tech savvy</li>
                <li>40 minutes commute (20’ underground, 20’ bus+walking)</li>
                <li>Interested in self development</li>
                <li>Currently learning online marketing tools</li>
                <li>Likes to discuss politics with his friends</li>
                <li>Brief experience with podcasts</li>
              </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel className={classes.card}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header">
            <Typography className={classes.heading}>Needs</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.noSpacing}>
              <ul className={classes.list}>
                <li>Make the best use of his commute time</li>
                <li>Quickly jump to new interesting shows/episodes</li>
                <li>Highlight interesting parts to research further or share</li>
              </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel className={classes.card}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header">
            <Typography className={classes.heading}>Serve By</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.noSpacing}>
              <ul className={classes.list}>
                <li>An app that works offline</li>
                <li>Filter shows by topic</li>
                <li>Filter shows by new</li>
                <li>Give a personal score to shows/episodes</li>
                <li>Attach notes to a part of an episode</li>
                <li>Review and manage his notes</li>
              </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* FIRST PERSONA END */}
        <br/>
        {/* SECOND PERSONA BEGIN */}
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar aria-label="robert" src="/susan.png" className={classes.avatar} />}
            title={<b>SUSAN, 29</b>}
            subheader="From Suffolk, Accountant, On maternity leave"
          />
        </Card>

        <ExpansionPanel className={classes.card}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header">
            <Typography className={classes.heading}>Demographic</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.noSpacing}>
              <ul className={classes.list}>
              <li>Married</li>
              <li>College educated</li>
              <li>Takes long walks in the park with the baby</li>
              <li>Has always been interested in psychology</li>
              <li>Hard worker but values time with family</li>
              <li>Zero experience with podcasts</li>
              </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel className={classes.card}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header">
            <Typography className={classes.heading}>Needs</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.noSpacing}>
              <ul className={classes.list}>
              <li>To keep herself motivated while in her parental leave</li>
              <li>To learn how to use podcasts</li>
              <li>To plan her activities beforehand</li> 
              <li>Support from like-minded people</li>
              </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel className={classes.card}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header">
            <Typography className={classes.heading}>Serve By</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.noSpacing}>
              <ul className={classes.list}>
              <li>The support of a community with common problems/goals</li>
              <li>A shows/episodes diary</li>
              <li>Goal and progress tracker</li>
              </ul>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* SECOND PERSONA END */}

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
