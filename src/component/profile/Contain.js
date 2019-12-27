import React from "react";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Button, Avatar, Grid} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
 card: {
  display: "flex"
 },
 details: {
  display: "flex",
  flexDirection: "column"
 },
 content: {
  flex: "1 0 auto"
 },
 cover: {
  width: "150px",
  height: "150px"
 }
}));

export default function MediaControlCard() {
 const classes = useStyles();
 const theme = useTheme();

 return (
  <Grid className={classes.card}>
   <div className={classes.details}>
    <CardContent className={classes.content}>
     <Typography component='h5' variant='h5'>
      Ember Spirit{" "}
      <Button variant='outlined' size='small'>
       {" "}
       Edit Profile
      </Button>{" "}
      <ExpandMoreIcon />
     </Typography>
     <Typography variant='subtitle1' color='textSecondary'>
      Mac Miller
     </Typography>
    </CardContent>
   </div>
   <div>
    <Avatar
     style={{margin: "20px 2px 0px 140px"}}
     className={classes.cover}
     image='/static/images/cards/live-from-space.jpg'
     title='Live from space album cover'
    />
   </div>
  </Grid>
 );
}
