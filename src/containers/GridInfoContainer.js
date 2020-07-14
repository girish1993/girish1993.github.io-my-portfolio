import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridContentItem from '../components/GridContentItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "500px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:'500px'
  },
}));

const GridInfoContainer = () => {
    const classes = useStyles();
    return (
        <div className = {classes.root} style = {{marginTop:"30px"}}>
            <Grid container spacing={3}>
                <GridContentItem gridContent = {{contentType:"image", url:"../assets/images/profile_pic.png", 
                                  className: classes.paper, alt:"Profile Picture for the Portfolio"}}/>
                <GridContentItem gridContent = {{contentType:"text", text:"About Description to be put here" ,
                                  className: classes.paper}}/>
            </Grid>
        </div>
    );
}

export default GridInfoContainer;