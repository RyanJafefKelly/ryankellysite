import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles({
    heading: {
        fontFamily: 'Arial',
        fontSize: 40,
        textAlign: 'center',
        paddingTop: 5
    },
    body: {
        paddingTop: 5,
        textAlign: 'center'
    },
    bodyInline: {
        paddingTop: 10,
        display: 'inline',
        paddingRight: 10,
        paddingLeft: 10
    },
    backgroundDiv: {
        color: 'white',
        backgroundColor: '#0D47A1'
    }
});

function HomePage() {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();

    return (
    <React.Fragment>
        <div className={classes.backgroundDiv}>
            <Typography className={classes.heading}>Ryan Kelly</Typography>
            <Typography className={classes.body}>ryan@kiiii.com</Typography>
            <Typography className={classes.body}>Developer, Moreton Blue Software</Typography>
            <Typography className={classes.body}>Bachelor of Maths/IT, QUT 2016-2020 </Typography>
            <div style={{textAlign: 'center'}}>
                <Typography className={classes.bodyInline}>
                    <Link href="#" onClick={preventDefault} color="inherit">
                        Résumé                   
                    </Link>
                </Typography>
                <Typography className={classes.bodyInline}>
                    <Link 
                    onClick={() => window.open('https://github.com/RyanJafefKelly', )}
                    color="inherit">
                        Github
                    </Link>
                </Typography>
            </div>
        </div>

    </React.Fragment>
    );
};

export default HomePage;