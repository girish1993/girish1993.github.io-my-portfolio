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
                <GridContentItem gridContent = {{content:"Block1", className: classes.paper}}/>
                <GridContentItem gridContent = {{content:"Block2", className: classes.paper}}/>
            </Grid>
        </div>
    );
}

export default GridInfoContainer;