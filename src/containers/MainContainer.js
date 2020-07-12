import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import NavigationBar from './NavigationBar';
import GridInfoContainer from './GridInfoContainer';

const MainContainer = () => {
    return(
        <Fragment>
            <Box m={1}>
                <NavigationBar />
            </Box>
            <Box m={1}>
                <GridInfoContainer />
            </Box>
        </Fragment>
    ); 
}

export default MainContainer;