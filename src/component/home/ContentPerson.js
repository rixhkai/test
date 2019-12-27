import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import {red} from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import BookmarkIcon from "@material-ui/icons/Bookmark";

const useStyles = makeStyles(theme => ({
 card: {
  maxWidth: 600
 },
 media: {
  height: 0,
  paddingTop: "56.25%" // 16:9
 },
 expand: {
  marginLeft: "auto"
 },
 expandOpen: {
  color: "grey"
 },
 avatar: {
  backgroundColor: red[500]
 }
}));

export default function RecipeReviewCard() {
 const classes = useStyles();
 const [expanded, setExpanded] = React.useState(true);

 const handleExpandClick = () => {
  setExpanded(!expanded);
 };

 return (
  <Card className={classes.card}>
   <CardHeader
    avatar={
     <Avatar aria-label='recipe' className={classes.avatar}>
      R
     </Avatar>
    }
    action={
     <IconButton aria-label='settings'>
      <MoreVertIcon />
     </IconButton>
    }
    title='Shrimp and Chorizo Paella'
    subheader='September 14, 2016'
   />
   <CardMedia
    className={classes.media}
    image='https://miro.medium.com/fit/c/788/236/1*1CrvVdtHHxYXetI_ac60tw.png'
    title='Paella dish'
   />
   <CardContent>
    <Typography variant='body2' color='textSecondary' component='p'>
     This impressive paella is a perfect party dish and a fun meal to cook
     together with your guests. Add 1 cup of frozen peas along with the mussels,
     if you like.
    </Typography>
   </CardContent>
   <CardActions disableSpacing>
    <IconButton aria-label='add to favorites'>
     <FavoriteIcon />
    </IconButton>
    <IconButton aria-label='share'>
     <ShareIcon />
    </IconButton>
    <IconButton
     className={clsx(classes.expand, {
      [classes.expandOpen]: expanded
     })}
     onClick={handleExpandClick}
    >
     <BookmarkIcon style={{color: "grey", borderColor: "grey"}} />
    </IconButton>
   </CardActions>
  </Card>
 );
}
