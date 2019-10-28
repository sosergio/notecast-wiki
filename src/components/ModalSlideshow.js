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
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    maxWidth: 'calc(100% - 20px)',
    alignSelf: 'baseline',
    margin: '10px',
    padding: '10px',
    border: '2px solid black',
    borderRadius: '11px'
  },
  toolbar: theme.mixins.toolbar,
  heading:{
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    '&> h6':{
      textTransform:'capitalize'
    }
  },
  footnote: {
    padding: theme.spacing(2),
    paddingTop: 0,
    color: theme.palette.grey[600],
    fontSize: '9pt',
    fontVariant: 'normal'
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
            {selectedItem ? `${selectedItem.group === pageTitle ? '' : `${selectedItem.group} - `} ${selectedItem.title}` : ''} 
          </Typography>
          { selectedItem && selectedItem.description && selectedItem.description.map(line => (
            <Typography paragraph>
              <div dangerouslySetInnerHTML={{ __html:line }}></div>
            </Typography>
          ))}
        </div>
        <Divider />
        
          <a href={selectedItem ? selectedItem.img : ''} target="_blank" rel="noopener noreferrer">
            <img
              className={classes.img}
              src={selectedItem ? selectedItem.img : ''}
              alt={selectedItem? selectedItem.title : ''} 
            />
          </a>
          <span className={classes.footnote}>Tap or click on the image to open it in another tab</span>
      </Dialog>
    </div>
  );
}

export default ModalSlideshow;
