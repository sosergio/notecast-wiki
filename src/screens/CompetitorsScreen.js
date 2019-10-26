import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import ModalSlideshow from './../components/ModalSlideshow';
import competitorsData from './../components/competitorsData';

const useStyles = makeStyles(theme => ({  
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  mainContentParagraph: {
    marginTop: theme.spacing(3),
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    minWidth: 280
  },
  gridListTile: {
    backgroundColor: theme.palette.grey[200],
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


function CompetitorsScreen() {
  const classes = useStyles();

  const [selectedItem, setSelectedItem] = React.useState(null);

  const onSelected = (index) => {
    setSelectedItem(index)
  };

  const handleClose = () => {
    setSelectedItem(null)
  };

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            Competitors Review
          </Typography>
          <Divider />
          <Typography className={classes.mainContentParagraph} paragraph>
          available doing the same thing with annotated screen captures if possible
          available doing the same thing with annotated screen captures if possible
          </Typography>
          
          <Divider />
          <div className={classes.root}>
            <GridList cellHeight={280} className={classes.gridList}>
              <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Overcast App</ListSubheader>
              </GridListTile>
              {competitorsData
                .filter(c => c.group === "overcast")
                .map(tile => (
                <GridListTile key={tile.img} 
                  onClick={x => onSelected(tile)} 
                  className={classes.gridListTile}> 
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    actionIcon={
                      <IconButton 
                        aria-label={`info about ${tile.title}`} className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>  
          <br></br>
          <Divider />
          <div className={classes.root}>
            <GridList cellHeight={280} className={classes.gridList}>
              <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Apple Podcast App</ListSubheader>
              </GridListTile>
              {competitorsData
                .filter(c => c.group === "apple")
                .map(tile => (
                <GridListTile key={tile.img} 
                  onClick={x => onSelected(tile)} 
                  className={classes.gridListTile}> 
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    actionIcon={
                      <IconButton 
                        aria-label={`info about ${tile.title}`} className={classes.icon}>
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>  
          
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
      <ModalSlideshow 
        open={selectedItem !== null} 
        pageTitle="Competitors"
        onClose={handleClose}
        items={competitorsData}
        selectedItem={selectedItem}></ModalSlideshow>
    </div>
  );
}

export default CompetitorsScreen;
