import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    fontFamily: 'arial',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    fontSize: 20,
    color: 'black',
  },
});

const ProjectItem = ({name, ...props}) => {
    const classes = useStyles();
    console.log(props.props.name);
    console.log(name);
    return (
        <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Project
          </Typography>
          <Typography variant="h5" component="h2">
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.props.name}
          </Typography>
          <Typography variant="body2" component="p">
            {props.props.description}
          </Typography>
          <Typography>
              <Link onClick={() => window.open(props.props.link, )}>
                {props.props.link}
              </Link>
          </Typography>
        </CardContent>
      </Card>
    );
}

export default ProjectItem;