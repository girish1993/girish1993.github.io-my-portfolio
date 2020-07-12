import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const GridContentItem = ({gridContent}) => {
    return (
        <Grid item xs>
          <Paper className={gridContent.className}>{gridContent.content}</Paper>
        </Grid>
    );
}

export default GridContentItem;

