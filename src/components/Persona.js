import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({  
  root: {
    marginTop: theme.spacing(2)
  },
  card: {
    maxWidth: 345
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
  },
  heading:{
      textTransform: "capitalize"
  }
}));

function Persona(props) {
  const classes = useStyles();
  const [data] = useState(props.data || {});
  const sections = ["demographic", "needs", "serve by"];
  return (
    <div className={classes.root}>
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar aria-label={data.name} src={data.avatar} className={classes.avatar} />}
            title={<b>{data.name}, {data.age}</b>}
            subheader={data.description}
          />
        </Card>
        {sections.map(section => (
            <ExpansionPanel className={classes.card}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${section}-panel-content`}
                    id={`${section}-panel-header`}>
                    <Typography className={classes.heading}>{section}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.noSpacing}>
                    <ul className={classes.list}>
                        {
                            data[section].map(line => (
                                <li>{line}</li>
                            ))
                        }
                    </ul>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        ))}
    </div>
  );
}

export default Persona;
