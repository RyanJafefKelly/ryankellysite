import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useHistory } from 'react-router-dom';
import { makeStyles, Typography, Button, Box, Link } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        color: '#white',
        backgroundColor: '#0D47A1',
    },
    toolbar: {
        backgroundColor: '#0D47A1',
        padding: 0,
        color: '#0D47A1',
        '& > .MuiBox-root': {
            paddingLeft: 10,
            paddingRight: 10,
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            '& > .MuiBox-root': {
                display: 'flex',
                alignItems: 'center'
            }
        }
    }
});

const Topbar = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
    <React.Fragment>
        <Toolbar className={classes.toolbar}>
          <Box>
            <Box ml={1}>
            </Box>
            <Box>
            </Box>
            <Box>
                <Box mr={1}>
                    <Typography style={{color: 'white', paddingRight: 15}}>
                        <Link color='inherit' onClick={() => history.push('/')}>
                            About
                        </Link>
                    </Typography>
                </Box>
                <Box mr={1}>
                    <Typography style={{color: 'white'}}>
                        <Link color='inherit' onClick={() => history.push('/projects')}>
                            Projects
                        </Link>
                    </Typography>
                </Box>
            </Box>
          </Box>
      </Toolbar>
    </React.Fragment>
    );
}

export default Topbar;