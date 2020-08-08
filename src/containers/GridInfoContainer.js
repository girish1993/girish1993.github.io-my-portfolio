import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import GridContentItem from '../components/GridContentItem';
import introDesc from "../Content";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "80vh"
  },
  paperImage: {
    padding: theme.spacing(0.5),
    color: theme.palette.text.secondary,
    backgroundColor:'#1c3052',
    height:'50vh',
    justifyContent:'center'
  },
  paperDesc: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:'80vh',

  },
}));

const GridInfoContainer = () => {
    const classes = useStyles();
    return (
        <div className = {classes.root} style = {{marginTop:"30px"}}>
            <Grid container spacing={2}>
                <GridContentItem gridContent = {{contentType:"image", url:"../assets/images/profile_pic.png", 
                                  className: classes.paperImage, alt:"Profile Picture for the Portfolio"}}/>
                <GridContentItem gridContent = {{contentType:"text", tagline:introDesc.tagline, desc: introDesc.description ,
                                  className: classes.paperDesc}}/>
            </Grid>
        </div>
    );
}

export default GridInfoContainer;