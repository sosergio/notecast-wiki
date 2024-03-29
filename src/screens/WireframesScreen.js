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
import wireframesData from '../data/wireframesData';

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
  gridListImg: {
    transform: 'none', 
    left:0, 
    top:0,
    maxWidth: '100%'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function WireframesScreen() {
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
          Wireframes
        </Typography>
        <Divider />
        <Typography className={classes.mainContentParagraph} paragraph>
          What follows are the initial wireframes of the final app.
          </Typography>
          <Typography paragraph>
          Select an image below to start reading a detailed description.
          </Typography>
        <Divider />
        <div className={classes.root}>
          <GridList cellHeight={280} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div">Overcast App</ListSubheader>
            </GridListTile>
            {wireframesData
              .map(tile => (
              <GridListTile 
                key={`${tile.id}-wireframes-list`}
                onClick={x => onSelected(tile)} 
                className={classes.gridListTile}> 
                <img src={tile.img} alt={tile.title} className={classes.gridListImg}/>
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
            These fairly basic diagrams of the screen of the app are derived from the proto-personas, and are important to 
            understand the flow of data and the possible user journeys.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    <ModalSlideshow 
        open={selectedItem !== null} 
        pageTitle="Wireframes"
        onClose={handleClose}
        items={wireframesData}
        selectedItem={selectedItem}></ModalSlideshow>
  </div>
  );
}

export default WireframesScreen;
