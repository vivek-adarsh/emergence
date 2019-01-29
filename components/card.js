import React from 'react';
import Link from 'next/link'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    margin: 20,
    minWidth: 100,
    maxWidth: 250
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
  },
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <Link href={props.to}>
        <CardActionArea>
          <CardContent>

            <Typography className={classes.title} gutterBottom>
              {props.title}
            </Typography>
            {props.children}

          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}

export default withStyles(styles)(SimpleCard);
