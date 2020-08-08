import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const imageStyle = {
  height: "auto",
  maxWidth: "100%"
}
const GridContentItem = ({gridContent}) => {
    return (
      gridContent.contentType === "image" ? 
        <Grid item xs={3} >
          <Paper className={gridContent.className} >
            <img src= {require("../assets/images/profile_pic.png")} alt={gridContent.alt} style = {imageStyle}/>
          </Paper>
        </Grid>
        :
        <Grid item xs={9}>
          <Paper className={gridContent.className}>
          <Typography align="center" variant="h6" gutterBottom >
              {gridContent.tagline}
            </Typography>
            <Divider />
            <Divider />
            <Typography align="justify" variant="body1" gutterBottom >
              {gridContent.desc}
            </Typography>
          </Paper>
        </Grid>
    );
}

export default GridContentItem;

