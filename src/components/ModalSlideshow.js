import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(theme => ({  
  // appBar: {
  //   position: 'relative',
  // },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    
    maxWidth: '100%',
    overflow: 'hidden',
    display: 'block',
    maxHeigth: '100%',
    margin: '10px',
    border: '2px solid black',
    padding: '10px',
    borderRadius: '11px'
  },
  toolbar: theme.mixins.toolbar,
  heading:{
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ModalSlideshow(props) {
  const classes = useStyles(); 
  const [activeStep, setActiveStep] = React.useState(0);
  const [pageTitle, setPageTitle] = React.useState('');
  const [open, setOpen] = useState(props.open);
  const [items, setItems] = useState(props.items);
  const [selectedItem, setSelectedItem] = useState(props.selectedItem || {});
  const maxSteps = items ? items.length : 0;

  const handleNext = () => {
    let newStep = activeStep < items.length - 1 ? activeStep + 1 : items.length - 1;
    setActiveStep(newStep);
    setSelectedItem(items[newStep]);
  };

  const handleBack = () => {
    let newStep = activeStep > 0 ? activeStep - 1 : 0;
    setActiveStep(newStep);
    setSelectedItem(items[newStep]);
  };
  
  const handleClose = () => {
    if(props.onClose){
      props.onClose();
    }
  };

  useEffect(() => {
    setOpen(props.open);
    setSelectedItem(props.selectedItem);
    setItems(props.items);
    setPageTitle(props.pageTitle);
    let ix = props.selectedItem ? 
      props.items.findIndex(d => d.id === props.selectedItem.id) : 0;
    setActiveStep(ix);
  }, [props.open, props.selectedItem, props.items, props.pageTitle]);

  return (
    <div >
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {pageTitle}
            </Typography>
            <Button color="inherit" onClick={handleBack} disabled={activeStep === 0}>
                <KeyboardArrowLeft />
            </Button>
            <Button color="inherit" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
               <KeyboardArrowRight />
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.toolbar} />
        <div className={classes.heading}>
          <Typography variant="h6" gutterBottom>
            {selectedItem ? `${selectedItem.group} - ${selectedItem.title}` : ''} 
          </Typography>
          <Typography>
            {selectedItem ? selectedItem.description : ''}
          </Typography>
        </div>
        <Divider />
        
        <div className={classes.root}>
          <img
            className={classes.img}
            src={selectedItem ? selectedItem.img : ''}
            alt={selectedItem? selectedItem.title : ''} 
          />
        </div>
      </Dialog>
    </div>
  );
}

export default ModalSlideshow;
