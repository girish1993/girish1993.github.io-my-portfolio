import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "100%",
}
const GridContentItem = ({gridContent}) => {
    return (
      gridContent.contentType === "image" ? 
        <Grid item xs>
          <Paper className={gridContent.className}>
            <img src= {require("../assets/images/profile_pic.png")} alt={gridContent.alt} style = {imageStyle}/>
          </Paper>
        </Grid>
        :
        <Grid item xs>
          <Paper className={gridContent.className}>{gridContent.text}</Paper>
        </Grid>
    );
}

export default GridContentItem;

