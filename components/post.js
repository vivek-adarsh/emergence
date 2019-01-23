import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const styles = theme => ({
  card: {
    maxWidth: 800,
    marginBottom:"1em"
  },
  media: {
    height: 0,
    width: '50px',
    paddingTop: '50px',
  },
  mainImg: {
    width: '100%'
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
})

class RecipeReviewCard extends React.Component {

  constructor() {
    super()

    //Set Defaults
    this.state = {
      expanded: false,
      title: "",
      body: "",
      image: null,
      latitude: null,
      longitude: null
    }

    this.handleExpandClick = this.handleExpandClick.bind(this)
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { classes, post } = this.props;

    console.log(post)
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <CardMedia
              className={classes.media}
              image={post.image}
              title="Post Thumbnail"
            />
          }
          action={
            (post.image || post.body) && <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          }
          title={post.title}
          subheader={post._updated}
        />

        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {post.body}
            </Typography>
            {post.image && (<img
              className={classes.mainImg}
              src={post.image}
              title="Post Thumbnail"
            />)}
          </CardContent>
        </Collapse>
      </Card>
    )
  }
}


export default withStyles(styles)(RecipeReviewCard)
