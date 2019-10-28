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
    marginBottom: theme.spacing(2)
  },
  mainContentParagraph: {
    marginTop: theme.spacing(3),
  }
}));

function GoalsScreen() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            Goals
          </Typography>
          <Divider />
          <Typography className={classes.mainContentParagraph} paragraph>
          Notecast is a mobile app that allows users to search and playback podcasts episodes
          and at the same time create personal notes, which are always linked to the specific 
          part of the show.
          </Typography>

          <Typography paragraph>
            Notecast is available for Android and  Apple iOS users on their App Stores, as well 
            as a Web App at the url: <a href="http://notecast.sosergio.now.sh" targer="_blank">http://notecast.sosergio.now.sh</a>.
          </Typography>

          <Typography variant="h6" gutterBottom>Review and share</Typography>
          <Typography paragraph>
            With Notecast you can rate and add your own personal notes to the episode you are
            listening to. In this way you can make sense of hours of episodes 
            into a structured library of notes, that can be easily reviewed and 
            shared with other users.
          </Typography>

          <Typography variant="h6" gutterBottom>Easy to use</Typography>
          <Typography paragraph>
            Notecast has been designed following a user centered approach, 
            pain points and user needs have driven the design to produce
            an app that is easy to use, especially while you are on the go.
          </Typography>

          <Typography variant="h6" gutterBottom>Works offline</Typography>
          <Typography paragraph>
            Notecast can download your favourite shows directly on your mobile device, 
            allowing you to playback also in areas where there is no internet connection, 
            yes! you commuters! 
          </Typography>

          <Typography variant="h6" gutterBottom>Apple Podcasts compatible</Typography>
          <Typography paragraph>
            Notecast works with the standard world of podcasts public RSS feeds.
            It’s not a separate platform, all podcasts submitted to Apple Podcasts will show up in here.
          </Typography>

        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={0} className={classes.sidebarAboutBox}>
            <Typography variant="h6" gutterBottom>
              What is podcasting?
            </Typography>
            <Typography paragraph>
              Podcasting is a free service that allows Internet users to 
              pull audio files from a broadcasting Website to 
              listen to on their computers or personal digital audio players. 
              Even though the term is derived from the Apple's iPod, virtually any media 
              player or computer can be used to listen to a podcast.
            </Typography>
            <Typography>
              Podcasting combines the freedom of blogging with digital audio technology 
              to create an almost endless supply of content. 
              Log on to one of several podcast sites on the Web, 
              and you can download content ranging from music to philosophy to sports. 
              Some say this new technology is democratizing the once corporate-run world of radio.
            </Typography>
          </Paper>

          <Paper elevation={0} className={classes.sidebarAboutBox}>
            <Typography variant="h6" gutterBottom>
              How does podcasting work?
            </Typography>
            <Typography>
              Unlike Internet radio, users don't have to 'tune in' to a particular broadcast. 
              Instead, they download the podcast on demand or subscribe via an RSS 
              (Really Simple Syndication) feed, which automatically downloads the podcast to 
              their computers. The technology is similar to that used by TiVo, a ­personal 
              video recorder that lets users set which programs they'd like to record and 
              then automatically records those programs for later viewing.
            </Typography>
          </Paper>
        </Grid>
      
      </Grid>
    </div>
  );
}

export default GoalsScreen;

